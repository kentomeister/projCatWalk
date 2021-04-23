import React from 'react';
import _ from 'lodash';

function RatingsBreakdown(props) {
  const { reviewObj } = props;

  const totalRatings = function (reviews) {
    let result = Object.values(reviews);
    result = _.reduce(result, function (memo, current) {
      return memo += current;
    });
    return result;
  };

  const getRatingCount = function (reviews, key) {
    let reviewCount = reviews[key];
    return reviewCount;
  };

  return (
    <div>
      <div className="cont">
        <div className="text-rating">5 stars</div>
        <div className="star-ratings-bar">
          <span className="star-bar-fill">{getRatingCount(reviewObj, 5)}</span>
        </div>
      </div>
      <div className="star-ratings-bar">
        <span className="star-bar-fill">{getRatingCount(reviewObj, 4)}</span>
      </div>
      <div className="star-ratings-bar">
        <span className="star-bar-fill">{getRatingCount(reviewObj, 3)}</span>
      </div>
      <div className="star-ratings-bar">
        <span className="star-bar-fill">{getRatingCount(reviewObj, 2)}</span>
      </div>
      <div className="star-ratings-bar">
        <span className="star-bar-fill">{getRatingCount(reviewObj, 1)}</span>
      </div>
    </div>
  );
}

export default RatingsBreakdown;
