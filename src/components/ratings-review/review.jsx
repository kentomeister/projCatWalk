/* eslint-disable import/extensions */
import React from 'react';
import Helpful from './helpful-counter.jsx';
import Topbar from './topbar-review.jsx';
import data from './sample-data.js';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      helpfulCount: 0,
    };
    this.helpfulClick = this.helpfulClick.bind(this);
  }
  // we map over all the objects to render the reviews

  helpfulClick() {
    this.setState((prevState) => (
      { helpfulCount: prevState.helpfulCount + 1 }
    ));
  }

  render() {
    const { helpfulCount } = this.state;
    return (
      <li className="review-cont">
        <div>Ratings & Reviews</div>
        <Topbar />
        <div className="review-summary">{data.results[0].summary}</div>
        <div className="review-body">{data.results[0].body}</div>
        <div>
          {data.results[0].recommend
            ? <div className="recommended-tag">**I recommend this product</div>
            : <div>{}</div>}
        </div>
        <div>
          {data.results[0].response
            ? (
              <div className="seller-response">
                Seller response:
                {' '}
                {data.results[0].response}
              </div>
            )
            : <div>{}</div>}
        </div>
        <div>
          <Helpful increment={this.helpfulClick} count={helpfulCount} />
        </div>
      </li>
    );
  }
}

export default Reviews;
