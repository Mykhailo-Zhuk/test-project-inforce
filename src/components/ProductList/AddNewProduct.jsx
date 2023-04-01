import React from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';
import classes from './Product.module.css';

const AddNewProduct = (props) => {
  return (
    <div className={classes.product}>
      <button className={classes.addNewProduct_btn} onClick={props.onShowForm}>
        <BsPlusCircleDotted size={80} />
      </button>
    </div>
  );
};

export default AddNewProduct;
