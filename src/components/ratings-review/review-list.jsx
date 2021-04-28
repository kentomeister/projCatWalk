/* eslint-disable import/extensions */
import React from 'react';
import Reviews from './review.jsx';
import WriteReview from './write-review.jsx';
import SortReviews from './sort-reviews.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 2,
      modalOpen: false,
      reviewSum: '',
      reviewBody: '',
      nickname: '',
    };
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
    this.handleChangeReviewSum = this.handleChangeReviewSum.bind(this);
    this.handleChangeReviewBody = this.handleChangeReviewBody.bind(this);
    this.handleChangeNickname = this.handleChangeNickname.bind(this);
    this.handleReviewFormSubmit = this.handleReviewFormSubmit.bind(this);
  }

  handleClickIncrement() {
    this.setState((prevState) => (
      { index: prevState.index + 2 }
    ));
    console.log(this.state.index);
  }

  handleChangeReviewSum(e) {
    this.setState({
      reviewSum: e.target.value,
    });
  }

  handleChangeReviewBody(e) {
    this.setState({
      reviewBody: e.target.value,
    });
  }

  handleChangeNickname(e) {
    this.setState({
      nickname: e.target.value,
    });
  }

  handleReviewFormSubmit() {
    console.log(
      'summary: ', this.state.reviewSum,
      ' body: ', this.state.reviewBody,
      ' nickname: ', this.state.nickname
    );
  }

  render() {
    const { reviews } = this.props;
    const { sortSelect } = this.props;
    const { index } = this.state;
    return (
      <div className="review-list">
        <div className="sort-btn">
          <SortReviews reviews={reviews} sortSelect={sortSelect} />
          sort drop down menu?
        </div>
        <ul>
          {reviews.slice(0, index).map((review) => <Reviews review={review} />)}
        </ul>

        {/* Modal below */}

        <button type="button" className="loadReviews" onClick={this.handleClickIncrement}>
          Load more reviews
        </button>
        <button type="button" onClick={() => this.setState({ modalOpen: true })}>
          Write a review
        </button>
        <WriteReview open={this.state.modalOpen} closeModal={() => this.setState({ modalOpen: false })}>
          <h4 className>Write Your Review</h4>
          <h6>[Product Name Here]</h6>
          <div>star rating</div>
          <div>
            Do you recommend this product?
            {' '}
            <button type="button">Yes</button> <button type="button">No</button>
          </div>
          <div>Characteristics</div>
          <div>
            <input
              className="review-sum-box" placeholder="Example: Best purchase ever!" onChange={this.handleChangeReviewSum}>
            </input>
          </div>
          <div>
            <textarea
              className="review-body-box" placeholder="Why did you like the product or not?" onChange={this.handleChangeReviewBody}>
            </textarea>
          </div>
            <button type="button" onClick={() => console.log('upload from pc')}>
              Upload your photos
            </button>
          <div>
            <input
            className="review-nickname-box" placeholder="What is your nickname" onChange={this.handleChangeNickname}>
          </input>
          </div>
          <div>
            <button type="submit" onClick={this.handleReviewFormSubmit}>
              Submit review
            </button>
          </div>
        </WriteReview>
      </div>
    );
  }
}

export default ReviewList;
