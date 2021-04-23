import React from 'react';
import Average from './rating-average.jsx';
import RatingsBreakdown from './ratings-breakdown.jsx';

const { calcAvgRating } = require('../../../server/productOverviewHelpers.js');

class RatingsSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parseRatings = this.parseRatings.bind(this);
  }

  parseRatings(reviewObj) {
    let reviews = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    reviewObj.forEach((singleReview) => (
      reviews[singleReview.rating]++
    ))
    return reviews;
  }

  render() {
    const reviewObj = this.parseRatings(this.props.reviews);
    const rating = calcAvgRating(reviewObj);
    return (
      <div className="ratings-breakdown-col">
        <div className="ratings-avg">
          {rating
            ? <Average average={rating} />
            : <div>{}</div>}
        </div>
        <div className="ratings-breakdown">
          <RatingsBreakdown reviewObj={reviewObj} />
        </div>
        <div className="product-breakdown">product breakdown</div>
      </div>
    );
  }
}

export default RatingsSummary;
