import React from 'react';
import { deleteProduct } from '../../actions/actions';
import { store } from '../../store/store';
import Modal from './Modal';
import './Modal.css';

const Confirmation = (props) => {
  const onSubmit = () => {
    store.dispatch(deleteProduct(props.idOfDeleteProduct));
    props.onClose();
  };
  return (
    <Modal onClose={props.onClose}>
      <h2>Are you sure you want to remove this product?</h2>
      <div className="actions">
        <button onClick={onSubmit}>Agree</button>
        <button onClick={props.onClose}>Disagree</button>
      </div>
    </Modal>
  );
};

export default Confirmation;
