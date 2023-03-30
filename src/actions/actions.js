import { store } from '../store/store';

export const addProductsAction = (payload) => {
  return { type: 'ADD_PRODUCTS', payload };
};

export const newProductAction = (obj) => {
  const state = store.getState().products;
  const newID = state.length + 1;
  const payload = {
    id: newID,
    productName: obj.enteredName,
    price: obj.enterePriceNumber,
    productImage: obj.enteredImageUrl,
    amount: 0,
  };
  return {
    type: 'NEW_PRODUCT',
    payload,
  };
};

export const newCommentAction = ({ enteredComment, productId: { id } }) => {
  const state = store.getState().comments;
  const newID = state.length + 1;
  const commentId = newID;

  const currDate = new Date();
  const locateTime = currDate.toLocaleTimeString('uk-Uk', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const locateDate = currDate.toLocaleDateString('uk-Uk', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const date = `${locateTime} ${locateDate}`;
  const payload = {
    id: commentId,
    productId: +id,
    description: enteredComment,
    date,
  };
  return {
    type: 'NEW_COMMENT',
    payload,
  };
};

export const deleteProductAction = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    id,
  };
};

export const sortProductAlphabeticallyAction = () => {
  console.log('Case 1');
  return {
    type: 'SORT_PRODUCT_ALPHABETICALLY',
  };
};

export const sortProductByCountAction = () => {
  console.log('Case 1');
  return {
    type: 'SORT_PRODUCT_BY_COUNT',
  };
};
