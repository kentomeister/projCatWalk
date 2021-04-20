/* eslint-disable import/extensions */
import React from 'react';
import ProductDetails from './components/productOverview/productDetails.jsx';
import ProductQuestionManager from './components/q&a/ProductQuestionManager/main.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ProductDetails />
        <ProductQuestionManager />
      </div>
    );
  }
}

export default App;
