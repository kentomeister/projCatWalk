/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import Select from './Select.jsx';

const getSkuSizes = (skuObj) => {
  const skus = Object.keys(skuObj);
  const sizes = [];

  skus.forEach((sku) => {
    sizes.push({ name: skuObj[sku].size, value: sku });
  });
  return sizes;
};

const getAvailableStock = (skuObj, sku) => {
  const availableSkus = Object.keys(skuObj);
  if (availableSkus.indexOf(sku) !== -1) {
    return skuObj[sku].quantity;
  }
  return 0;
};

const createSizeOptions = (quantity) => {
  const quantityOption = quantity > 16 ? 15 : quantity;
  return [...new Array(quantityOption)].map((entry, i) => ({ name: i + 1, value: i + 1 }));
};

const AddToBag = ({ selectedStyle, handleAddToBagSubmit }) => {
  const sizes = getSkuSizes(selectedStyle.skus);
  const [selectedSizeSku, setSelectedSizeSku] = useState(null);
  const [isQuantitySelected, setIsQuantitySelected] = useState(false);
  useEffect(() => { setSelectedSizeSku(null); }, [selectedStyle]);

  const selectedSizeStock = selectedSizeSku
    ? getAvailableStock(selectedStyle.skus, selectedSizeSku) : 0;

  const sizeOptions = createSizeOptions(selectedSizeStock);

  return (
    <div className="add-to-bag">
      <form onSubmit={(e) => handleAddToBagSubmit(e)}>
        <Select
          name="skuSelect"
          label="Select Size"
          options={sizes}
          handleSelect={(sku) => setSelectedSizeSku(sku)}
        />
        <Select
          name="quantity"
          label="-"
          options={sizeOptions}
          disabled={!selectedSizeSku}
          handleSelect={() => setIsQuantitySelected(true)}
        />
        <br />
        <div className="container-horz">
          <button
            id="add-to-bag-btn"
            className="btn"
            type="submit"
            disabled={!isQuantitySelected}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            Add To Bag
            <FaPlus />
          </button>
          {/* <button
            className="btn"
            type="button"
          >
            <AiOutlineStar />
          </button> */}
        </div>
      </form>
    </div>
  );
};

AddToBag.propTypes = {
  selectedStyle: PropTypes.object.isRequired,
  handleAddToBagSubmit: PropTypes.func.isRequired,
};
export default AddToBag;
