/* eslint-disable import/extensions */
import React from 'react';
import RatingsReviews from './components/ratings-review/ratings-reviews.jsx';
import ProductQuestionManager from './components/q&a/ProductQuestionManager/main.jsx'
import ProductOverview from './components/productOverview/ProductOverview.jsx';
import Alert from './components/shared/Alert.jsx';
import RenderComponent from './components/related-items-comparison/RelatedItem.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: '19093',
      alert: {
        message: '',
        type: '',
      },
    };
    this.setAlert = this.setAlert.bind(this);
  }

  setAlert(message, type) {
    this.setState({
      ...this.state,
      alert: {
        message,
        type,
      },
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        alert: {},
      });
    }, 2000);
  }

  render() {
    const { alert: { message, type }, productId } = this.state;
    return (
      <div>
        <h1>This will be the front end!</h1>
        <div>
          <div><RatingsReviews /></div>
        </div>
        <div className="container">
          {
            alert
              && <Alert message={message} type={type} />
          }
          <ProductOverview
            setAlert={this.setAlert}
            productId={productId}
          />
        <ProductQuestionManager productId={19093} />
        </div>
      </div>
    );
  }
}

export default App;
