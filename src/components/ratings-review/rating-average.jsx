import React from 'react';
import StarRating from '../shared/StarRating.jsx';

function Average(props) {
  const { average } = props;
  const starAvg = StarRating({
    rating: average.toString(), size: '25', isClickable: false, handleRatingClick: () => 'starrating',
  });

  return (
    <div className="average-cont">
      <div className="num-average">{average}</div>
      <div className="stars-average">{starAvg}</div>
    </div>
  );
}

export default Average;
