import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const onSubmit = () => {
    props.idSubmitDelete(id);
    props.onShowConfirmation();
  };
  return (
    <div className="product">
      <div className="product-img">
        <Link to={`/products/${id}`}>
          <img src={productImage} alt="product" />
        </Link>
      </div>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <div className="product-btn">
        <button className="addToCartBttn">Add To Cart</button>
      </div>
      <div className="delete-product">
        <button className="delete-product-btn" onClick={onSubmit}>
          <BsFillXCircleFill size={50} />
        </button>
      </div>
    </div>
  );
};
