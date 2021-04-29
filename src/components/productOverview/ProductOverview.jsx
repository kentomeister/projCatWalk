/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

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
      isImageGalleryExpand: false,
    };

    this.handleImageContainerExpandClick = this.handleImageContainerExpandClick.bind(this);
    this.handleAddToBagSubmit = this.handleAddToBagSubmit.bind(this);
  }

  handleImageContainerExpandClick(e) {
    e.stopPropagation();
    const { isImageGalleryExpand } = this.state;
    this.setState({
      isImageGalleryExpand: !isImageGalleryExpand,
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
      loading,
      features,
      pinterestImageUrl,
    } = this.props.productInfo;

    const { handleStyleSelectClick, setPinterestImageUrl } = this.props;

    const { isImageGalleryExpand } = this.state;
    return (

      <div>
        <div className="container-vert">
          <div className="container-horz">
            {selectedStyle.photos
              && (
                <ImageGallery
                  images={selectedStyle.photos}
                  handleImageContainerExpandClick={this.handleImageContainerExpandClick}
                  setPinterestImageUrl={setPinterestImageUrl}
                />
              )}
            {
              !isImageGalleryExpand
              && (
                <div className="container-vert infos">
                  <ProductInformation
                    productData={this.props.productInfo}
                    price={selectedStyle.original_price || default_price}
                    salePrice={selectedStyle.sale_price}
                  />
                  <ShareOnSocials
                    currentImage={pinterestImageUrl}
                  />
                  <StyleSelect
                    styles={styles}
                    selectedStyle={selectedStyle}
                    handleStyleSelectClick={handleStyleSelectClick}
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
          <ProductDetails
            slogan={slogan}
            description={description}
            features={features}
          />
        </div>
      </div>
    );
  }
}

ProductOverview.propTypes = {
  setAlert: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default ProductOverview;
