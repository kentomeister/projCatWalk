import React from 'react';
import starRating from '../shared/starRating.jsx';

function Average(props) {
  const { average } = props;
  const starAvg = starRating({
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
