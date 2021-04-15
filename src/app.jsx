/* eslint-disable import/extensions */
import React from 'react';
import ProductDetails from './components/productOverview/productDetails.jsx';
import QuestionsAnswers from './components/q&a/questionsAnswers.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ProductDetails />
        <QuestionsAnswers />
      </div>
    );
  }
}

export default App;
