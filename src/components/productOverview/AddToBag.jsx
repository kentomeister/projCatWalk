import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import Select from './Select.jsx';

const testOptions = [
  { name: 'option1', value: 'someValue1' },
  { name: 'option2', value: 'someValue2' },
  { name: 'option3', value: 'someValue3' },
];

const getSkuSizes = (skuObj) => {
  const skus = Object.keys(skuObj);
  const sizes = [];

  skus.forEach((sku) => {
    sizes.push({ name: skuObj[sku].size, value: sku });
  });
  return sizes;
};
const AddToBag = ({ skus, handleAddToBagSubmit }) => {
  const sizes = getSkuSizes(skus);
  const [selectedSizeSku, setSelectedSizeSku] = useState(null);
  return (
    <div className="add-to-bag">
      <form onSubmit={(e) => handleAddToBagSubmit(e)}>
        <Select
          name="sizeSelect"
          label="Select A Size"
          options={sizes}
          handleSizeSelect={(sku) => setSelectedSizeSku(sku)}
        />
        <Select
          name="quantity"
          label=""
          options={[1, 2, 3, 4, 5]}
          disabled={!selectedSizeSku}
        />
        <br />
        <button
          className="btn"
          type="submit"
        >
          Add To Bag
          <FaPlus />
        </button>
      </form>
      <button
        className="btn"
        type="button"
      >
        <AiOutlineStar />
      </button>
    </div>
  );
}
export default AddToBag;
