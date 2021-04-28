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
      reviewsBackup: [],
      productReviews: [],
      selectedSort: null,
      isSortedByRating: false,
    };
    this.handleClickClear = this.handleClickClear.bind(this);
    this.handleSortSelection = this.handleSortSelection.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByHelpfulness = this.sortByHelpfulness.bind(this);
    this.sortByRelevance = this.sortByRelevance.bind(this);
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    axios.get(`/reviews/${productId}`)
      .then((res) => this.setState(
        {
          productReviews: res.data.results,
          reviewsBackup: res.data.results,
        },
      ))
      .catch((err) => console.log('err: ', err));
  }

  // handleClickSortRating(e) {
  //   let rating = e.target.value;
  //   let clickedRatings = this.reviewRating.current.focus();
  //   this.setState({
  //     productReviews: _.filter(productReviews, (rating) => (rating === clickedRatings.length)),
  //     isSortedByRating: true,
  //   });
  //   // gets rating from 'ratings-breakdown' - value={5}
  //   // update the state of productReviews:
  //     // this.setState({ productReviews: _.filter(productReviews, (rating (5)), sortedByRating: true )}
  // }

  // // if (this.state.isSortedByRating) { render the clicked filter options (5 stars, 3 stars) and 'clear' button }

  handleClickClear() {
    const { reviewsBackup } = this.state;
    this.setState({ productReviews: reviewsBackup });
  }

  handleSortSelection(e) {
    this.setState({ selectedSort: e.target.value });
  }

  sortByDate(a, b) {
    let sort = 0;
    if (a.date > b.date) {
      sort = 1;
    } else if (a.date < b.date) {
      sort = -1;
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

  change() {
    const { productReviews } = this.state;
    const { selectedSort } = this.state;
    console.log(productReviews);

    if (selectedSort === 'Newest') {
      this.setState({
        productReviews: productReviews.sort(this.sortByDate),
      });
    } else if (selectedSort === 'Helpful') {
      this.setState({
        productReviews: productReviews.sort(this.sortByHelpfulness),
      });
    } else if (selectedSort === null || selectedSort === 'Sort' || selectedSort === 'Relevant') {
      this.setState({
        productReviews: productReviews.sort(this.sortByRelevance),
      });
    }
  }

  render() {
    const { productReviews } = this.state;
    console.log(this.state.productReviews);
    // if (productReviews.length) {
    //   this.change();
    // }

    return (
      <div id="reviews">
        <div className="ratings-reviews">
          <div className="widget-title">RATINGS & REVIEWS</div>
          <div className="ratings-reviews-cont">
            <RatingsSummary reviews={productReviews} />
            <ReviewList reviews={productReviews} sortSelect={this.handleSortSelection} />
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
