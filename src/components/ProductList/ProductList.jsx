import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AddNewProduct from './AddNewProduct';
import { Product } from './Product.jsx';
import classes from './ProductList.module.css';
import { fetchComments, fetchProducts } from '../../actions/asyncActions.js';

function mapToProps(state) {
  const { products } = state;
  return {
    products,
  };
}
function mapDispatch(dispatch) {
  return {
    addProducts: () => dispatch(fetchProducts()),
    addComments: () => dispatch(fetchComments()),
  };
}
export const ProductList = (props) => {
  const { addProducts, addComments, onShowConfirmation, idSubmitDelete, onShowForm } = props;
  useEffect(() => {
    addProducts();
    addComments();
  }, [addProducts, addComments]);

  const { products } = props;

  return (
    <div className={classes.products_wrapper}>
      <div className={classes.products_title}>
        <h1>Tech Shop</h1>
      </div>
      <div className={classes.products_list}>
        {products?.map((product) => (
          <Product
            data={product}
            key={product.id}
            onShowConfirmation={onShowConfirmation}
            idSubmitDelete={idSubmitDelete}
          />
        ))}
        <AddNewProduct onShowForm={onShowForm} />
      </div>
    </div>
  );
};

export default connect(mapToProps, mapDispatch)(ProductList);
