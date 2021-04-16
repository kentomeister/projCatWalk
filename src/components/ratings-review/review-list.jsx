import React from 'react';
import Review from './review';

class ReviewList extends React.Components {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        This is my review list component
        <ul>
          <li>
            <Review />
          </li>
        </ul>
      </div>
    );
  }
}

export default ReviewList;
