import React from 'react';
import PropTypes from 'prop-types';
import { IoStorefrontOutline, IoCartOutline } from 'react-icons/io5';

const Header = ({ itemsInCart }) => (
  <div className="header">
    <IoStorefrontOutline
      color="white"
      size="100"
      style={{ paddingLeft: '10px' }}
    />
    <span
      style={{ float: 'none', paddingTop: '30px', fontSize: '2rem' }}
    >
      Kentomeister Inc.
    </span>
    <div className="cart-container">
      <IoCartOutline
        color="white"
        size="75"
      />
      <span id="num-items-cart">{itemsInCart}</span>
    </div>
  </div>
);

Header.propTypes = {
  itemsInCart: PropTypes.string.isRequired,
};
export default Header;
