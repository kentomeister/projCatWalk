/* eslint-disable import/extensions */
import React from 'react';
import moment from 'moment';
import starRating from '../shared/starRating.jsx';

function Topbar(props) {
  const { stars, name, date } = props;
  const formattedDate = moment(date).format('LL');
  const starsRating = starRating({
    rating: stars.toString(), size: '15', isClickable: false, handleRatingClick: () => 'starrating',
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
