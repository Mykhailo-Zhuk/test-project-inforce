import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import classes from './Product.module.css';

export const Product = (props) => {
  const {
    data: {
      id,
      name,
      weight,
      size: { width, height },
      imageUrl,
      count,
    },
    idSubmitDelete,
    onShowConfirmation,
  } = props;

  const onSubmit = () => {
    idSubmitDelete(id);
    onShowConfirmation();
  };
  return (
    <div className={classes.product}>
      <div className={classes.product_imgContainer}>
        <Link to={`/products/${id}`}>
          <div className={classes.product_img}>
            <img src={imageUrl} alt={`${name}`} />
          </div>
        </Link>
      </div>
      <h2>{name}</h2>
      <div className={classes.product_description}>
        <p>
          Count: <span>{count}</span>
        </p>

        <p>
          Weight: <span>{weight}</span>
        </p>
        <p>
          Size: <br />- width: <span>{width}</span> <br />- height: <span>{height}</span>
        </p>
      </div>
      <div className={classes.product_btn}>
        <button className={classes.addToCart_btn}>Add To Cart</button>
      </div>
      <div className={classes.product_delete}>
        <button className={classes.product_deleteBtn} onClick={onSubmit}>
          <BsFillXCircleFill size={30} />
        </button>
      </div>
    </div>
  );
};

export default Product;
