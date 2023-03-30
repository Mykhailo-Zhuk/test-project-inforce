import React from 'react';
import { store } from '../../store/store.js';
import AddProduct from './AddProduct';
import { Product } from './Product';
// import { addProductsAction } from '../../actions/actions';
// import { fetchJSONData } from '../../Helpers/Helpers.js';
import './shop.css';

export const ProductList = (props) => {
  // useEffect(() => {
  //   fetchJSONData().then((data) => {
  //     store.dispatch(addProductsAction(data));
  //   });
  // }, []);

  const { products } = store.getState();
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Tech Shop</h1>
      </div>
      <div className="products">
        {products?.map((product) => (
          <Product
            data={product}
            key={product.id}
            onShowConfirmation={props.onShowConfirmation}
            idSubmitDelete={props.idSubmitDelete}
          />
        ))}
        <AddProduct onShowForm={props.onShowForm} />
      </div>
    </div>
  );
};
