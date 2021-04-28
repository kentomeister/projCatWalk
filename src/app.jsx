/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import RatingsReviews from './components/ratings-review/ratings-reviews.jsx';
import ProductQuestionManager from './components/q&a/ProductQuestionManager/main.jsx'
import ProductOverview from './components/productOverview/ProductOverview.jsx';
import Alert from './components/shared/Alert.jsx';
import RelatedItem from './components/related-items-comparison/RelatedItem.jsx';
import Header from './components/header/Header.jsx';

import ClickTracker from './components/shared/click-tracker/ClickTracker.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: '19092',
      alert: {
        message: '',
        type: '',
      },
      loading: true,
    };
    this.setAlert = this.setAlert.bind(this);
    this.getCart = this.getCart.bind(this);
  }

  componentDidMount() {
    this.getCart()
      .then(() => this.setState({ loading: false }));
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

  getCart() {
    return axios.get('/cart')
      .then(({ data: cartContents }) => this.setState({ cart: cartContents }))
      .then(() => this.calculateNumOfItemsInCart())
      .catch(() => this.setAlert('There was an error getting the cart', 'danger'));
  }

  calculateNumOfItemsInCart() {
    const { cart } = this.state;
    const numOfItems = _.reduce(cart, (memo, item) => memo + Number(item.count), 0);
    this.setState({ cartNumOfItems: numOfItems.toString() });
  }

  render() {
    const {
      alert: { message, type },
      productId,
      loading,
      cartNumOfItems,
    } = this.state;

    if (loading) {
      return (
        <div>
          LOADING;
        </div>
      );
    }
    return (
      <div className="container">
        <Header
          itemsInCart={cartNumOfItems}
        />
        {
          alert
          && <Alert message={message} type={type} />
        }
        <ClickTracker>
          <ProductOverview
            setAlert={this.setAlert}
            productId={productId}
            updateCart={this.getCart}
          />
        </ClickTracker>
        <ClickTracker>
          <RelatedItem />
        </ClickTracker>
        <ProductQuestionManager
          productId={productId}
          setAlert={this.setAlert}

        />
        <RatingsReviews
          productId={productId}
        />
        <div className="footer">
          This is the footer
        </div>
      </div>
    );
  }
}

export default App;
