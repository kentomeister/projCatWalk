/* eslint-disable import/extensions */
import React from 'react';
import StarRating from './components/shared/StarRating.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleRatingClick = this.handleRatingClick.bind(this);
  }

  handleRatingClick(rating) {
   console.log(rating);
  }

  render() {
    return (
      <div>
        <StarRating
          rating="2.5"
          size="20"
          handleRatingClick={this.handleRatingClick}
        />
      </div>
    );
  }
}

export default App;
