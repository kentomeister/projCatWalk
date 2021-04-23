import React from 'react';
import starRating from '../shared/starRating.jsx';

function Average(props) {
  const { average } = props;
  const starAvg = starRating({
    rating: average.toString(), size: '16', isClickable: false, handleRatingClick: () => 'starrating',
  });

  return (
    <div>
      <div className="average">{average}</div>
      <div className="stars-breakdown">{starAvg}</div>
    </div>
  );
}

export default Average;
