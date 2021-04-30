/* eslint-disable import/extensions */
import React from 'react';
import Reviews from './review.jsx';
import WriteReview from './write-review.jsx';
import SortReviews from './sort-reviews.jsx';
import StarRating from '../shared/StarRating.jsx';

const axios = require('axios');

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 2,
      modalOpen: false,
      reviewSum: '',
      reviewBody: '',
      nickname: '',
      starRating: 1,
      photos: [],
      characteristics: {},
      recommend: false,
      email: '',
    };
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
    this.handleChangeReviewSum = this.handleChangeReviewSum.bind(this);
    this.handleChangeReviewBody = this.handleChangeReviewBody.bind(this);
    this.handleChangeNickname = this.handleChangeNickname.bind(this);
    this.handleChangeStarRating = this.handleChangeStarRating.bind(this);
    this.handleChangePhotos = this.handleChangePhotos.bind(this);
    this.handleChangeCharacteristics = this.handleChangeCharacteristics.bind(this);
    this.handleChangeRecommend = this.handleChangeRecommend.bind(this);
    this.handleReviewFormSubmit = this.handleReviewFormSubmit.bind(this);
    this.getStarsFeature = this.getStarsFeature.bind(this);
  }

  handleClickIncrement() {
    this.setState((prevState) => (
      { index: prevState.index + 2 }
    ));
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

  handleChangeStarRating(e) {
    this.setState({
      starRating: e.target.value,
    });
  }

  handleChangePhotos(e) {
    this.setState({
      photos: e.target.value,
    });
  }

  handleChangeCharacteristics(e) {
    this.setState({
      characteristics: e.target.value,
    });
  }

  handleChangeRecommend(bool) {
    this.setState({
      recommend: bool,
    });
  }

  handleReviewFormSubmit() {
    const { productId } = this.props;
    let submissionData = {
      product_id: Number(productId),
      rating: this.state.starRating,
      summary: this.state.reviewSum,
      body: this.state.reviewBody,
      recommend: this.state.recommend,
      name: this.state.nickname,
      email: this.state.email,
      photos: this.state.photos,
      characteristics: this.state.characteristics,
    };
    axios.post('/submitReviews', (submissionData))
      .then(() => console.log('success!'))
      .catch((err) => console.log(err));
  }
  getStarsFeature() {
    return StarRating({
      rating: '0', size: '18', isClickable: true, handleRatingClick: () => 'starrating',
    });
  }

  render() {
    const { reviews } = this.props;
    const { sortSelect } = this.props;
    const { index } = this.state;
    // const starsRating = starRating({
    //   rating: '0', size: '18', isClickable: true, handleRatingClick: () => 'starrating',
    // });
    return (
      <div className="review-list">
        <div className="sort-btn">
          <SortReviews reviews={reviews} sortSelect={sortSelect} />
        </div>
        <ul>
          {reviews.slice(0, index).map((review) => <Reviews review={review} />)}
        </ul>

        {/* Modal below */}


        <button type="button" className="load-reviews-btn" onClick={this.handleClickIncrement}>
          Load more reviews
        </button>
        <button type="button" className="write-review-btn" onClick={() => this.setState({ modalOpen: true })}>
          Write a review
        </button>
        <WriteReview open={this.state.modalOpen} closeModal={() => this.setState({ modalOpen: false })}>
          <div className="write-review-title">Write Your Review</div>
          <div className="write-review-productname">[Product Name Here]</div>
          <div className="write-rev-star-cont">star rating {this.getStarsFeature}</div>
          <div className="write-rev-recommend">
            Do you recommend this product?
            {' '}
            <button type="button" className="rec-yes-btn" onClick={() => this.handleChangeRecommend(true)}>
              Yes
            </button>
            <button type="button" className="rec-no-btn" onClick={() => this.handleChangeRecommend(false)}>
              No
            </button>
          </div>
          <div className="write-rev-charac-cont">
            <div className="write-rev-charac-title">Characteristics</div>
            <div className="size-cont">
              <div className="write-rev-charac-text">Size</div>
              <div className="radio-btn-cont">
                <label className="prod-charac-score">1
                  <input className="radio-btn" type="radio" id="1" name="score" value="1"></input>
                </label>
                <label className="prod-charac-score">2
                  <input className="radio-btn" type="radio" id="2" name="score" value="2"></input>
                </label>
                <label className="prod-charac-score">3
                  <input className="radio-btn" type="radio" id="3" name="score" value="3"></input>
                </label>
                <label className="prod-charac-score">4
                  <input className="radio-btn" type="radio" id="4" name="score" value="4"></input>
                </label>
                <label className="prod-charac-score">5
                  <input className="radio-btn" type="radio" id="5" name="score" value="5"></input>
                </label>
              </div>
            </div>
            <div className="width-cont">
              <div className="write-rev-charac-text">Width</div>
              <div className="radio-btn-cont">
                <label className="prod-charac-score">1
                  <input className="radio-btn" type="radio" id="1" name="score" value="1"></input>
                </label>
                <label className="prod-charac-score">2
                  <input className="radio-btn" type="radio" id="2" name="score" value="2"></input>
                </label>
                <label className="prod-charac-score">3
                  <input className="radio-btn" type="radio" id="3" name="score" value="3"></input>
                </label>
                <label className="prod-charac-score">4
                  <input className="radio-btn" type="radio" id="4" name="score" value="4"></input>
                </label>
                <label className="prod-charac-score">5
                  <input className="radio-btn" type="radio" id="5" name="score" value="5"></input>
                </label>
              </div>
            </div>
            <div className="comfort-cont">
              <div className="write-rev-charac-text">Comfort</div>
              <div className="radio-btn-cont">
                <label className="prod-charac-score">1
                  <input className="radio-btn" type="radio" id="1" name="score" value="1"></input>
                </label>
                <label className="prod-charac-score">2
                  <input className="radio-btn" type="radio" id="2" name="score" value="2"></input>
                </label>
                <label className="prod-charac-score">3
                  <input className="radio-btn" type="radio" id="3" name="score" value="3"></input>
                </label>
                <label className="prod-charac-score">4
                  <input className="radio-btn" type="radio" id="4" name="score" value="4"></input>
                </label>
                <label className="prod-charac-score">5
                  <input className="radio-btn" type="radio" id="5" name="score" value="5"></input>
                </label>
              </div>
            </div>
            <div className="quality-cont">
              <div className="write-rev-charac-text">Quality</div>
              <div className="radio-btn-cont">
                <label className="prod-charac-score">1
                  <input className="radio-btn" type="radio" id="1" name="score" value="1"></input>
                </label>
                <label className="prod-charac-score">2
                  <input className="radio-btn" type="radio" id="2" name="score" value="2"></input>
                </label>
                <label className="prod-charac-score">3
                  <input className="radio-btn" type="radio" id="3" name="score" value="3"></input>
                </label>
                <label className="prod-charac-score">4
                  <input className="radio-btn" type="radio" id="4" name="score" value="4"></input>
                </label>
                <label className="prod-charac-score">5
                  <input className="radio-btn" type="radio" id="5" name="score" value="5"></input>
                </label>
              </div>
            </div>
            <div className="length-cont">
              <div className="write-rev-charac-text">Length</div>
              <div className="radio-btn-cont">
                <label className="prod-charac-score">1
                  <input className="radio-btn" type="radio" id="1" name="score" value="1"></input>
                </label>
                <label className="prod-charac-score">2
                  <input className="radio-btn" type="radio" id="2" name="score" value="2"></input>
                </label>
                <label className="prod-charac-score">3
                  <input className="radio-btn" type="radio" id="3" name="score" value="3"></input>
                </label>
                <label className="prod-charac-score">4
                  <input className="radio-btn" type="radio" id="4" name="score" value="4"></input>
                </label>
                <label className="prod-charac-score">5
                  <input className="radio-btn" type="radio" id="5" name="score" value="5"></input>
                </label>
              </div>
            </div>
            <div className="fit-cont">
              <div className="write-rev-charac-text">Fit</div>
              <div className="radio-btn-cont">
                <label className="prod-charac-score">1
                  <input className="radio-btn" type="radio" id="1" name="score" value="1"></input>
                </label>
                <label className="prod-charac-score">2
                  <input className="radio-btn" type="radio" id="2" name="score" value="2"></input>
                </label>
                <label className="prod-charac-score">3
                  <input className="radio-btn" type="radio" id="3" name="score" value="3"></input>
                </label>
                <label className="prod-charac-score">4
                  <input className="radio-btn" type="radio" id="4" name="score" value="4"></input>
                </label>
                <label className="prod-charac-score">5
                  <input className="radio-btn" type="radio" id="5" name="score" value="5"></input>
                </label>
              </div>
            </div>
          </div>
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
