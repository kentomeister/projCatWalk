/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import ReviewList from './review-list.jsx';
import RatingsSummary from './ratings-summary.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: [],
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    axios.get(`/reviews/${productId}`)
      .then((res) => this.setState({ productReviews: res.data.results }))
      .catch((err) => console.log('err: ', err));
  }

  render() {
    const { productReviews } = this.state;
    return (
      <div id="reviews">
        <div className="ratings-reviews">
          <div className="widget-title">RATINGS & REVIEWS</div>
          <div className="ratings-reviews-cont">
            <RatingsSummary reviews={productReviews} />
            <ReviewList reviews={productReviews} />
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
