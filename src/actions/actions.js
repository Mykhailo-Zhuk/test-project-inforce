import { store } from '../store/store';

export const newProduct = (obj) => {
  const state = store.getState().products;
  const newID = state.length + 1;
  return {
    type: 'NEW_PRODUCT',
    id: newID,
    productName: obj.enteredName,
    price: obj.enterePriceNumber,
    productImage: obj.enteredImageUrl,
    amount: 0,
  };
};

export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    id,
  };
};

export const sortProductAlphabetically = () => {
  console.log('Case 1');
  return {
    type: 'SORT_PRODUCT_ALPHABETICALLY',
  };
};

export const sortProductByCount = () => {
  console.log('Case 1');
  return {
    type: 'SORT_PRODUCT_BY_COUNT',
  };
};
