import React from 'react';

class SortReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sortSelect } = this.props;
    return (
      <div>
        Filter:
        {' '}
        <select onChange={sortSelect}>
          <option value="Relevant">Relevant</option>
          <option value="Newest">Newest</option>
          <option value="Helpful">Helpful</option>
        </select>
      </div>
    );
  }
}

export default SortReviews;
