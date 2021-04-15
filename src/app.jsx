/* eslint-disable import/extensions */
import React from 'react';
import ProductDetails from './components/productOverview/productDetails.jsx';
import ProdcutCard from './components/related-items-comparison/ProductCard.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ProductDetails />
        <ProdcutCard />
      </div>
    );
  }
}

export default App;
