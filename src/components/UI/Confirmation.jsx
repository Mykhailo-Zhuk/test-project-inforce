import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../../actions/asyncActions';
import Modal from './Modal';
import classes from './Modal.module.css';

function mapDispatch(dispatch) {
  return {
    deleteProduct: (id) => dispatch(deleteProduct(id)),
  };
}

const Confirmation = (props) => {
  const { deleteProduct, onClose, idOfDeleteProduct } = props;

  const onSubmit = () => {
    deleteProduct(idOfDeleteProduct);
    onClose();
  };
  return (
    <Modal onClose={onClose}>
      <h2>Are you want to remove this product?</h2>
      <div className={classes.actions}>
        <button onClick={onSubmit}>Agree</button>
        <button onClick={props.onClose}>Disagree</button>
      </div>
    </Modal>
  );
};

export default connect(null, mapDispatch)(Confirmation);
