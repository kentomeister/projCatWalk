/* eslint-disable import/extensions */
import React from 'react';
import moment from 'moment';
import StarRating from '../shared/StarRating.jsx';

function Topbar(props) {
  const { stars, name, date } = props;
  const formattedDate = moment(date).format('LL');
  const starsRating = StarRating({
    rating: stars.toString(), size: '18', isClickable: false, handleRatingClick: () => 'starrating',
  });
  return (
    <div className="topbar-cont">
      <div className="review-stars">{starsRating}</div>
      <div className="review-username">{name}</div>
      <div className="review-date">{formattedDate}</div>
    </div>
  );
}

export default Topbar;
