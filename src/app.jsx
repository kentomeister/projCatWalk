/* eslint-disable import/extensions */
import React from 'react';
import ProductOverview from './components/productOverview/ProductOverview.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This will be the front end!</h1>
        <ProductOverview />
      </div>
    );
  }
}

export default App;
