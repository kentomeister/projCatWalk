import React from 'react';
import StarRating from '../shared/StarRating.jsx';

function Average(props) {
  const { average } = props;
  const starAvg = StarRating({
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
