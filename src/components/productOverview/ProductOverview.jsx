/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ProductInformation from './ProductInformation.jsx';
import ProductDetails from './ProductDetails.jsx';
import StyleSelect from './StyleSelect.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddToBag from './AddToBag.jsx';
import ShareOnSocials from './ShareOnSocials.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      avgRating: '0',
      name: '',
      category: '',
      default_price: '',
      description: '',
      slogan: '',
      styles: [],
      selectedStyle: {},
      isImageGalleryExpand: false,
      loading: true,
    };
    this.handleStyleSelectClick = this.handleStyleSelectClick.bind(this);
    this.handleImageContainerExpandClick = this.handleImageContainerExpandClick.bind(this);
    this.handleAddToBagSubmit = this.handleAddToBagSubmit.bind(this);
  }

  componentDidMount() {
    const { setAlert, productId } = this.props;
    axios.get(`/productOverview/${productId}`)
      .then(({ data }) => this.setState(
        {
          ...data,
          selectedStyle: data.styles[0],
          loading: false,
        },
      ))
      .catch(() => setAlert('There was an error loading from the API', 'danger'));
  }

  handleStyleSelectClick(selectedStyleId) {
    const { styles } = this.state;
    const [selectedStyle] = _.filter(styles, { style_id: Number(selectedStyleId) });
    this.setState({ selectedStyle });
  }

  handleImageContainerExpandClick() {
    this.setState({
      isImageGalleryExpand: !this.state.isImageGalleryExpand,
    });
  }

  handleAddToBagSubmit(e) {
    e.preventDefault();
    const { setAlert, updateCart } = this.props;
    const quantity = e.target.quantity.value;
    const sku = e.target.skuSelect.value;
    Promise.all([...new Array(Number(quantity))].map((apiCall) => axios.post('/productOverview/cart', {
      sku,
    })))
      .then(() => updateCart())
      .then(() => setAlert(`You've added ${quantity} items to your cart`, 'success'))
      .catch(() => setAlert('There was an error adding items to your card', 'danger'));
  }

  render() {
    const {
      slogan,
      description,
      styles,
      selectedStyle,
      default_price,
      isImageGalleryExpand,
      loading,
      features,
    } = this.state;
    return (
      <div>
        <div className="container-vert">
          <div className="container-horz">
            <ImageGallery
              images={selectedStyle.photos}
              handleImageContainerExpandClick={this.handleImageContainerExpandClick}
            />
            {
              !isImageGalleryExpand
              && (
                <div className="container-vert infos">
                  <ProductInformation
                    productData={this.state}
                    price={selectedStyle.original_price || default_price}
                    salePrice={selectedStyle.sale_price}
                  />
                  <ShareOnSocials />
                  <StyleSelect
                    styles={styles}
                    selectedStyle={selectedStyle}
                    handleStyleSelectClick={this.handleStyleSelectClick}
                  />
                  {
                    !loading
                    && (
                      <AddToBag
                        handleAddToBagSubmit={this.handleAddToBagSubmit}
                        selectedStyle={selectedStyle}
                      />
                    )
                  }

                </div>
              )
            }
          </div>
          {
            (slogan && description)
            && (
              <ProductDetails
                slogan={slogan}
                description={description}
                features={features}
              />
            )
          }
        </div>
      </div>
    );
  }
}

ProductOverview.propTypes = {
  setAlert: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default ProductOverview;
