import React from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';
import './shop.css';

const AddProduct = (props) => {
  return (
    <div className="product">
      <button className="add-product-btn" onClick={props.onShowForm}>
        <BsPlusCircleDotted size={80} />
      </button>
    </div>
  );
};

export default AddProduct;
