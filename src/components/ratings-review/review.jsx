import React from 'react';
import Helpful from './helpful-counter';

class Reviews extends React.Components {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="review-cont">
        <h3>Ratings & Reviews</h3>
        <div className="top-bar-cont">Top-bar-cont - Stars, user, date</div>
        <div className="review-summary">Review Summary/Title</div>
        <div className="review-body">Review Body</div>
        <div className="recommended-tag">**I recommend this product text**</div>
        <div className="seller-response">**Response from seller**</div>
        <div>
          <Helpful />
        </div>
      </div>
    );
  }
}

export default Reviews;
