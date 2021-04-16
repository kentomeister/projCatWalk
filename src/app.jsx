/* eslint-disable import/extensions */
import React from 'react';
import RatingsReviews from './components/ratings-review/ratings-reviews.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This will be the front end!</h1>
        <div>
          <div><RatingsReviews /></div>
        </div>
      </div>
    );
  }
}

export default App;
