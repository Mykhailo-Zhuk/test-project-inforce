import React from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';
import { store } from '../../store/store';
import './ProductView.css';

const ProductView = (props) => {
  const productId = useParams();
  const navigate = useNavigate();
  const productsCopy = store.getState().products;
  const currentProduct = productsCopy.filter((el) => el.id === +productId.id);

  return (
    <div className="product-details">
      <div className="product-title">
        <h2>Tech Shop</h2>
      </div>
      {currentProduct.map((prod) => {
        const { id, productName, productImage, price } = prod;
        return (
          <div className="product-view" key={id}>
            <div className="product-img">
              <img src={productImage} alt="product-image" />
            </div>
            <div className="description">
              <p>
                {productName}
                <span> ${price}</span>
              </p>
            </div>
            <div className="continue-shopping">
              <button onClick={() => navigate('/')}>
                <BsArrow90DegLeft size={32} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductView;
