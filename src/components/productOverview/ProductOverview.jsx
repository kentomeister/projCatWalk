import React from 'react';
import axios from 'axios';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/productOverview/19092')
      .then((res) => this.setState(res.data))
      .catch((err) => throw New Error(err));
  }

  render() {
    return (
      <div>
        <h1> I am the top level product overview</h1>
      </div>
    );
  }
}

export default ProductOverview;
