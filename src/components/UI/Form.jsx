import React, { useRef, useState } from 'react';
import Modal from './Modal.js';
import './Modal.css';
import Input from './Input.jsx';
import { store } from '../../store/store.js';
import { newProductAction } from '../../actions/actions.js';

const Form = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
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
      setFormIsValid(false);
      setTimeout(() => {
        setFormIsValid(true);
      }, 5000);
      return;
    }
    const product = {
      enteredName,
      enterePriceNumber,
      enteredImageUrl,
    };
    store.dispatch(newProductAction(product));
    props.onClose();
  };
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={onSubmitHandler} className="form">
        <p style={{ padding: '10px 0 15px 0' }}>New Product</p>
        <Input
          ref={nameProductRef}
          label="Product name:"
          input={{ id: Math.random().toFixed(6), type: 'text' }}
        />
        <Input
          ref={priceProductRef}
          label="Product price:"
          input={{ id: Math.random().toFixed(6), type: 'number' }}
        />
        <Input
          ref={imageUrlProductRef}
          label="Image url:"
          input={{ id: Math.random().toFixed(6), type: 'text' }}
        />
        <div className="actions">
          <button onClick={props.onClose}>Close</button>
          <button type="submit">Add</button>
          {!formIsValid && <p className="error">Please enter valid name or price</p>}
        </div>
      </form>
    </Modal>
  );
};

export default Form;
