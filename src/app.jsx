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
        <ProductOverview />
      </div>
    );
  }
}

export default App;
