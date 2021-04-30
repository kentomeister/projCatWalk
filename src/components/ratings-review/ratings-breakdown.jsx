import React from 'react';
import _ from 'lodash';

function RatingsBreakdown(props) {
  const { reviewObj } = props;
  const { sortRatings } = props;

  const countRatings = function (reviewsObj, rating) {
    return Number(reviewsObj[rating]);
  };

  const getRating = function (reviewsObj, rating) {
    let total = Object.values(reviewsObj);
    total = _.reduce(total, function (memo, current) {
      return memo += Number(current);
    }, 0);
    const ratingCount = countRatings(reviewsObj, rating);

    const percentage = Math.floor((ratingCount / total) * 100);

    return {
      height: '100%',
      width: `${percentage}%`,
      backgroundColor: 'gray',
    };
  };

  return (
    <div className="ratings-breakdown-cont">
      <div className="ratings-cont" onClick={() => sortRatings(5)}>
        <div className="text-rating">5 stars</div>
        <div className="star-ratings-bar">
          <div style={getRating(reviewObj, 5)}></div>
        </div>
          <div className="text-rating-count">{countRatings(reviewObj, 5)} reviews</div>
      </div>
      <div className="ratings-cont" onClick={() => sortRatings(4)}>
        <div className="text-rating">4 stars</div>
        <div className="star-ratings-bar">
          <div style={getRating(reviewObj, 4)}></div>
        </div>
          <div className="text-rating-count">{countRatings(reviewObj, 4)} reviews</div>
      </div>
      <div className="ratings-cont" onClick={() => sortRatings(3)}>
        <div className="text-rating">3 stars</div>
        <div className="star-ratings-bar">
          <div style={getRating(reviewObj, 3)}></div>
        </div>
          <div className="text-rating-count">{countRatings(reviewObj, 3)} reviews</div>
      </div>
      <div className="ratings-cont" onClick={() => sortRatings(2)}>
        <div className="text-rating">2 stars</div>
        <div className="star-ratings-bar">
          <div style={getRating(reviewObj, 2)}></div>
        </div>
          <div className="text-rating-count">{countRatings(reviewObj, 2)} reviews</div>
      </div>
      <div className="ratings-cont" onClick={() => sortRatings(1)}>
        <div className="text-rating">1 star</div>
        <div className="star-ratings-bar">
          <div style={getRating(reviewObj, 1)}></div>
        </div>
          <div className="text-rating-count">{countRatings(reviewObj, 1)} reviews</div>
      </div>
    </div>
  );
}

export default RatingsBreakdown;
