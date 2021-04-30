import React from 'react';
import Average from './rating-average.jsx';
import RatingsBreakdown from './ratings-breakdown.jsx';
import ProductBreakdown from './product-breakdown.jsx';

const { calcAvgRating } = require('../../../server/productOverviewHelpers.js');

class RatingsSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sortRatings } = this.props;
    const { reviewsMeta } = this.props;
    const { productRatings } = this.props;
    const rating = calcAvgRating(reviewsMeta);
    return (
      <div className="ratings-breakdown-col">
        <div className="ratings-avg">
          {rating
            ? <Average average={rating} />
            : <div>{}</div>}
        </div>
        <div className="ratings-breakdown">
          <RatingsBreakdown reviewObj={reviewsMeta} sortRatings={sortRatings} />
        </div>
        <div className="product-breakdown">
          <ProductBreakdown productRatings={productRatings} />
        </div>
      </div>
    );
  }
}

export default RatingsSummary;
