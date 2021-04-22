import React, { useState } from 'react';
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

const getSizeStock = (skuObj, sku) => skuObj[sku].quantity;

const createSizeOptions = (quantity) => {
  const quantityOption = quantity > 16 ? 15 : quantity;
  return [...new Array(quantityOption)].map((entry, i) => ({ name: i + 1, value: i + 1 }));
};

const AddToBag = ({ skus, handleAddToBagSubmit }) => {
  const sizes = getSkuSizes(skus);
  const [selectedSizeSku, setSelectedSizeSku] = useState(null);
  const [isQuantitySelected, setIsQuantitySelected] = useState(false);
  const selectedSizeStock = selectedSizeSku ? getSizeStock(skus, selectedSizeSku) : 0;
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
        <button
          className="btn"
          type="submit"
          disabled={!isQuantitySelected}
        >
          Add To Bag
          <FaPlus />
        </button>
        <button
          className="btn"
          type="button"
        >
          <AiOutlineStar />
        </button>
      </form>

    </div>
  );
};
export default AddToBag;
