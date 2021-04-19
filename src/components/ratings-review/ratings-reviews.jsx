/* eslint-disable import/extensions */
import React from 'react';
import ReviewList from './review-list.jsx';

class RatingsReviews extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="ratings-reviews">
          This my whole ratings review component - Tomas
          <div>Ratings Breakdown</div>
          <div>Sort button</div>
          <ReviewList />
          <div>Product Breakdown</div>
          <div>Write a review</div>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
