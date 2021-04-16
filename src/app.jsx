/* eslint-disable import/extensions */
import React from 'react';
import ProductCard from './components/related-items-comparison/ProductCard.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This will be the front end!</h1>
        <ProductCard />
      </div>
    );
  }
}

export default App;
