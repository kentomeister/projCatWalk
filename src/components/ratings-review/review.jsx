/* eslint-disable import/extensions */
import React from 'react';
import Helpful from './helpful-counter.jsx';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <li className="review-cont">
        <div>Ratings & Reviews</div>
        <div className="top-bar-cont">Top-bar-cont - Stars, user, date</div>
        <div className="review-summary">Review Summary/Title</div>
        <div className="review-body">Review Body</div>
        <div className="recommended-tag">**I recommend this product text**</div>
        <div className="seller-response">**Response from seller**</div>
        <div>
          <Helpful />
        </div>
      </li>
    );
  }
}

export default Reviews;
