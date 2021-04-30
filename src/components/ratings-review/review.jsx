/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Helpful from './helpful-counter.jsx';
import Topbar from './topbar-review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    const { helpfulness } = props.review;
    this.state = {
      helpfulCount: helpfulness,
      helpfulClicked: false,
    };
    this.helpfulClick = this.helpfulClick.bind(this);
  }

  helpfulClick() {
    const { helpfulClicked } = this.state;
    const { review_id } = this.props.review;
    const { helpfulCount } = Number(this.state);

    if (!helpfulClicked) {
      axios.put(`/updateHelpfulCounter/${review_id}`)
        .then((res) => console.log(res))
        .catch(() => console.log('error'));
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.helpfulCount !== prevProps.helpfulCount) {
      this.fetchData(this.props.helpfulCount)
    }
  }

  render() {
    const { helpfulCount } = this.state;
    const {
      body,
      date,
      photos,
      rating,
      recommend,
      response,
      reviewer_name,
      summary,
      review_id,
    } = this.props.review;
    return (
      <li className="review-cont" key={review_id}>
        <Topbar stars={rating} name={reviewer_name} date={date} />
        <div className="review-summary">{summary}</div>
        <div className="review-body">{body}</div>
        <div>
          {recommend
            ? <div className="recommended-tag">**I recommend this product</div>
            : <div>{}</div>}
        </div>
        <div>
          {response
            ? (
              <div className="seller-response">
                Seller response:
                {' '}
                {response}
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
