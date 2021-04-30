import React from 'react';
import PropTypes from 'prop-types';
import { FcCheckmark } from 'react-icons/fc';

const ProductDetails = ({ slogan, description, features }) => (
  <div className="product-details">
    <div className="slogan-description">
      <h4 className="bold">{slogan && slogan}</h4>
      {description && description}
    </div>
    {features.length > 0 ? (
      <div className="product-features">
        <h4>Features: </h4>
        <ul>
          {features.map((feature) => (
            <li key={feature.value}>
              <FcCheckmark
                size="25"
              />
              {feature.feature}
              {' '}
              {feature.value}
            </li>
          ))}
        </ul>
      </div>
    )
      : ''}
  </div>
);

ProductDetails.propTypes = {
  slogan: PropTypes.string,
  description: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  features: PropTypes.array,
};

ProductDetails.defaultProps = {
  slogan: 'Best Clothes Ever',
  description: 'Seriously they\'re the best',
  features: [],
};
export default ProductDetails;
