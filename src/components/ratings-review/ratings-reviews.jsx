/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import ReviewList from './review-list.jsx';

class RatingsReviews extends React.Component {
  constructor() {
    super();
    this.state = {
      productReviews: [],
    };
  }

  componentDidMount() {
    axios.get('/reviews/19092')
      .then((res) => this.setState({ productReviews: res.data.results }))
      .catch((err) => console.log('err: ', err));
  }

  render() {
    const { productReviews } = this.state;
    return (
      <div>
        <div className="ratings-reviews">
          This my whole ratings review component - Tomas
          <div>Ratings Breakdown</div>
          <div>Sort button</div>
          <ReviewList reviews={productReviews} />
          <div>Product Breakdown</div>
          <div>Write a review</div>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
