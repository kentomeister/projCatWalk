/* eslint-disable import/extensions */
import React from 'react';
import Helpful from './helpful-counter.jsx';
import Topbar from './topbar-review.jsx';
import data from './sample-data.js';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // we map over all the objects to render the reviews

  render() {
    return (
      <li className="review-cont">
        <div>Ratings & Reviews</div>
        <Topbar />
        <div className="review-summary">{data.results[0].summary}</div>
        <div className="review-body">{data.results[0].body}</div>
        <div className="recommended-tag">
          **I recommend this product:
          {data.results[0].recommend.toString()}
        </div>
        <div>
          {data.results[0].response
            ? <div className="seller-response">{data.results[0].response}</div>
            : <div>{}</div>}
        </div>
        <div>
          <Helpful />
        </div>
      </li>
    );
  }
}

export default Reviews;
