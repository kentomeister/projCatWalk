import React from 'react';
import ProductQuestionManager from './components/q&a/ProductQuestionManager/main.jsx'
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This will be the front end!</h1>
      <ProductQuestionManager productId={19093} />
      </div>
    );
  }
}

export default App;
