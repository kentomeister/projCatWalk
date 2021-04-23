import React from 'react';
import RenderComponent from './components/related-items-comparison/RelatedItem.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This will be the front end!</h1>
      <RenderComponent />
      </div>
    );
  }
}

export default App;
