import React from 'react';
import ProductDetails from './components/productDetails/productDetails.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ProductDetails />
      </div>
    );
  }
}

export default App;
