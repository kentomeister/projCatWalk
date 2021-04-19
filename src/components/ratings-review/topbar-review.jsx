/* eslint-disable import/extensions */
import React from 'react';
import moment from 'moment';
import data from './sample-data.js';

const { date } = data.results[0].date;
const formattedDate = moment(date).format('LL');
console.log(formattedDate);

function Topbar() {
  return (
    <div className="topbar-cont">
      <div className="review-stars">stars</div>
      <div className="review-username">{data.results[0].reviewer_name}</div>
      <div className="review-date">{formattedDate}</div>
    </div>
  );
}

export default Topbar;
