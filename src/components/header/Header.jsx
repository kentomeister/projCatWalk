import React from 'react';
import PropTypes from 'prop-types';
import { IoStorefrontOutline, IoCartOutline } from 'react-icons/io5';

const Header = ({ itemsInCart }) => (
  <div className="header">
    <IoStorefrontOutline
      color="white"
      size="100"
    />
    <div className="cart-Container">
      <IoCartOutline
        color="white"
        size="50"
      />
      <span id="num-items-cart">{itemsInCart}</span>
    </div>
  </div>
);

Header.propTypes = {
  itemsInCart: PropTypes.string.isRequired,
};
export default Header;
