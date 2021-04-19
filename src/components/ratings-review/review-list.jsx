/* eslint-disable import/extensions */
import React from 'react';
import Reviews from './review.jsx';

class ReviewList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="review-list">
        This is my review list component
        <ul>
          <Reviews />
        </ul>
      </div>
    );
  }
}

export default ReviewList;
