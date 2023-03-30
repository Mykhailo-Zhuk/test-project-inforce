import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './shop.css';

export const Product = (props) => {
  const { id, name, weight, size, imageUrl, count } = props.data;

  const onSubmit = () => {
    props.idSubmitDelete(id);
    props.onShowConfirmation();
  };
  return (
    <div className="product">
      <div className="product-img">
        <Link to={`/products/${id}`}>
          <img src={imageUrl} alt={`${name}`} />
        </Link>
      </div>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>
          Count: <span>{count}</span>
        </p>

        <p>
          Weight: <span>{weight}</span>
        </p>
        <p>
          Size: <br />- width: <span>{size.width}</span> <br />- height: <span>{size.height}</span>
        </p>
      </div>
      <div className="product-btn">
        <button className="addToCartBttn">Add To Cart</button>
      </div>
      <div className="product-delete">
        <button className="product-delete-btn" onClick={onSubmit}>
          <BsFillXCircleFill size={50} />
        </button>
      </div>
    </div>
  );
};
