import axios from 'axios';
import {
  addProductsAction,
  addCommentsAction,
  newProductAction,
  deleteProductAction,
  deleteCommentAction,
  newCommentAction,
  editingProductAction,
} from './actions';

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:3000/products/', {
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:3001' },
      })
      .then(function (response) {
        // handle success
        dispatch(addProductsAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:3000/comments/', {
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:3001' },
      })
      .then(function (response) {
        // handle success
        dispatch(addCommentsAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export const addNewProduct = (payload) => {
  return (dispatch) => {
    axios
      .post('http://localhost:3000/products/', payload, {
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:3001' },
      })
      .then(function (response) {
        // handle success
        dispatch(newProductAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export const addNewComment = (payload) => {
  return (dispatch) => {
    axios
      .post('http://localhost:3000/comments/', payload, {
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:3001' },
      })
      .then(function (response) {
        // handle success
        dispatch(newCommentAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export const updateProduct = (payload) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3000/products/${payload.id}`, payload, {
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:3001' },
      })
      .then(function (response) {
        // handle success
        dispatch(editingProductAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/products/${id}`, {
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:3001' },
      })
      .then(function (response) {
        // handle success
        dispatch(deleteProductAction(id));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export const deleteComment = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/comments/${id}`, {
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:3001' },
      })
      .then(function (response) {
        // handle success
        dispatch(deleteCommentAction(id));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};
