/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import ReviewList from './review-list.jsx';
import RatingsSummary from './ratings-summary.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: [],
      displayReviews: [],
      clickedRatings: [],
      productReviewsMeta: {},
      productRatingsMeta: {},
    };
    this.handleSortSelection = this.handleSortSelection.bind(this);
    this.handleRatingSort = this.handleRatingSort.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByHelpfulness = this.sortByHelpfulness.bind(this);
    this.sortByRelevance = this.sortByRelevance.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    Promise.all([
      axios.get(`/reviews/${productId}`),
      axios.get(`/reviews/meta/${productId}`),
    ]).then(([res1, res2]) => {
      this.setState({
        productReviews: res1.data.results,
        displayReviews: res1.data.results,
        productReviewsMeta: res2.data,
        productRatingsMeta: res2.data.ratings,
      });
    });
  }

  // // if (this.state.isSortedByRating) { render the clicked filter options (5 stars, 3 stars) and 'clear' button }

  handleRatingSort(rating) {
    this.sortByRating(rating);
  }

  handleSortSelection(e) {
    this.changeFilter(e.target.value);
  }

  sortByRating(rating) {
    let { clickedRatings } = this.state;
    const { productReviews } = this.state;
    let clickedRatingsArray = clickedRatings;

    if (!clickedRatings.includes(rating)) {
      clickedRatingsArray.push(rating);
      this.setState({
        clickedRatings: clickedRatingsArray,
      }, () => {
        let { clickedRatings } = this.state;
        console.log('day 2:', clickedRatings);
        let filtered = [];
        clickedRatings.forEach(function(rating) {
          productReviews.forEach(function(review) {
            if (review.rating === rating) {
              filtered.push(review)
            }
          })
        }),
        console.log('filtered:', filtered);
        this.setState({
          displayReviews: filtered,
        });
        console.log('displayReviews: ', this.state.displayReviews);
      });

      // should I use a for loop with _.filter instead?
      // maybe that way return the filtered arrays
      // and concat them together?
    }
    // else - we remove (toggle off) that rating as a filter
  }

  sortByDate(a, b) {
    let sort = 0;
    if (a.date > b.date) {
      sort = -1;
    } else if (a.date < b.date) {
      sort = 1;
    }
    return sort;
  }

  sortByHelpfulness(a, b) {
    let sort = 0;
    if (a.helpfulness > b.helpfulness) {
      sort = 1;
    } else if (a.helpfulness < b.helpfulness) {
      sort = -1;
    }
    return sort;
  }

  sortByRelevance(a, b) {
    let sort = 0;
    if (a.date && a.helpfulness > b.date && b.helpfulness) {
      sort = 1;
    } else if (a.date && a.helpfulness < b.date && b.helpfulness) {
      sort = -1;
    }
    return sort;
  }

  changeFilter(selectedSort) {
    const { productReviews } = this.state;

    if (selectedSort === 'Newest') {
      this.setState({
        productReviews: productReviews.sort(this.sortByDate),
      });
    } else if (selectedSort === 'Helpful') {
      this.setState({
        productReviews: productReviews.sort(this.sortByHelpfulness),
      });
    } else {
      this.setState({
        productReviews: productReviews.sort(this.sortByRelevance),
      });
    }
  }

  render() {
    const { productReviews } = this.state;
    const { displayReviews } = this.state;
    const { productReviewsMeta } = this.state;
    const { productRatingsMeta } = this.state;
    const { productId } = this.props;
    return (
      <div id="reviews">
        <div className="ratings-reviews">
          <div className="widget-title">RATINGS & REVIEWS</div>
          <div className="ratings-reviews-cont">
            <RatingsSummary
              reviews={productReviews}
              reviewsMeta={productRatingsMeta}
              productRatings={productReviewsMeta}
              sortRatings={this.handleRatingSort}
            />
            <ReviewList
              reviews={displayReviews}
              reviewsMeta={productReviewsMeta}
              productId={productId}
              sortSelect={this.handleSortSelection}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
