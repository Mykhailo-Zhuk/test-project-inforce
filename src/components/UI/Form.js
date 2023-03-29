import React, { useRef, useState } from 'react';
import Modal from './Modal.js';
import './Modal.css';
import Input from './Input.js';
import { store } from '../../store/store.js';
import { newProduct } from '../../actions/actions.js';

const Form = (props) => {
  const [nameIsValid, setNameIsValid] = useState(true);
  const nameProductRef = useRef();
  const priceProductRef = useRef();
  const imageUrlProductRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameProductRef.current.value;
    const enteredPrice = priceProductRef.current.value;
    const enterePriceNumber = +enteredPrice;
    const enteredImageUrl = imageUrlProductRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredPrice.trim().length === 0 ||
      enteredImageUrl.trim().length === 0
    ) {
      setNameIsValid(false);
      return;
    }
    const product = {
      enteredName,
      enterePriceNumber,
      enteredImageUrl,
    };
    store.dispatch(newProduct(product));
    props.onClose();
  };
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={onSubmitHandler} className="form">
        <p>New Product</p>
        <Input ref={nameProductRef} label="Product name:" input={{ id: 'amount', type: 'text' }} />
        <Input
          ref={priceProductRef}
          label="Product price:"
          input={{ id: 'amount', type: 'number' }}
        />
        <Input ref={imageUrlProductRef} label="Image url:" input={{ id: 'amount', type: 'text' }} />
        <div className="actions">
          <button onClick={props.onClose}>Close</button>
          <button type="submit">Add</button>
          {!nameIsValid && <p className="error">Please enter valid name or price</p>}
        </div>
      </form>
    </Modal>
  );
};

export default Form;
