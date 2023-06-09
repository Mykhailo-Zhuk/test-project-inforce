import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import classes from './Modal.module.css';
import Input from './Input';
import { addNewProduct } from '../../actions/asyncActions';

function mapDispatch(dispatch) {
  return {
    addNewProduct: (payload) => dispatch(addNewProduct(payload)),
  };
}

const Form = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const { addNewProduct, onClose } = props;

  const nameProductRef = useRef();
  const imageUrlProductRef = useRef();
  const weightProductRef = useRef();
  const widthProductRef = useRef();
  const heightProductRef = useRef();
  const countProductRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameProductRef.current.value;
    const enteredWeight = weightProductRef.current.value;
    const enteredImageUrl = imageUrlProductRef.current.value;
    const enteredWidth = widthProductRef.current.value;
    const enteredWidthNumber = +enteredWidth;
    const enteredHeight = heightProductRef.current.value;
    const enteredHeightNumber = +enteredHeight;
    const enteredCount = countProductRef.current.value;
    const enteredCountNumber = +enteredCount;
    if (
      enteredName.trim().length === 0 ||
      enteredWeight.trim().length === 0 ||
      enteredImageUrl.trim().length === 0 ||
      enteredWidth.trim().length === 0 ||
      enteredHeight.trim().length === 0 ||
      enteredCount.trim().length === 0
    ) {
      setFormIsValid(false);
      setTimeout(() => {
        setFormIsValid(true);
      }, 5000);
      return;
    }
    const newID = Math.random().toFixed(6) * 100000;

    const payload = {
      id: newID,
      name: enteredName,
      imageUrl: enteredImageUrl,
      count: enteredCountNumber,
      size: {
        width: enteredWidthNumber,
        height: enteredHeightNumber,
      },
      weight: enteredWeight,
    };
    addNewProduct(payload);
    onClose();
  };

  const mathRandom = () => Math.random().toFixed(4) * 100000;
  return (
    <Modal onClose={onClose}>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <p className={classes.header}>New Product</p>
        <Input
          ref={nameProductRef}
          label="Product name:"
          input={{ id: mathRandom(), type: 'text' }}
        />
        <Input
          ref={imageUrlProductRef}
          label="Product image url:"
          input={{ id: mathRandom(), type: 'text' }}
        />
        <Input
          ref={countProductRef}
          label="Product count:"
          input={{
            id: mathRandom(),
            type: 'number',
          }}
        />
        <Input
          ref={widthProductRef}
          label="Product width:"
          input={{
            id: mathRandom(),
            type: 'number',
          }}
        />
        <Input
          ref={heightProductRef}
          label="Product height:"
          input={{
            id: mathRandom(),
            type: 'number',
          }}
        />
        <Input
          ref={weightProductRef}
          label="Product weight:"
          input={{ id: mathRandom(), type: 'text' }}
        />
        <div className={classes.actions}>
          <button onClick={onClose}>Close</button>
          <button type="submit">Add</button>
          {!formIsValid && <p className={classes.error}>Please enter valid input</p>}
        </div>
      </form>
    </Modal>
  );
};

export default connect(null, mapDispatch)(Form);
