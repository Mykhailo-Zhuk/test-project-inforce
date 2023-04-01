import React, { useRef, useState } from 'react';
import Modal from './Modal';
import classes from './EditingForm.module.css';
import Input from './Input';
import { connect } from 'react-redux';
import { updateProduct } from '../../actions/asyncActions';

function mapToProps(state) {
  const productsCopy = state.products;
  return { productsCopy };
}

function mapDispatch(dispatch) {
  return {
    editedProduct: (payload) => dispatch(updateProduct(payload)),
  };
}

const EditingForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const { productsCopy, onClose, editedProduct } = props;

  const currentProduct = productsCopy.filter((product) => product.id === +props.id);
  const { id, name, weight, size, imageUrl, count } = currentProduct[0];

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
    const payload = {
      id,
      name: enteredName,
      imageUrl: enteredImageUrl,
      count: enteredCountNumber,
      size: {
        width: enteredWidthNumber,
        height: enteredHeightNumber,
      },
      weight: enteredWeight,
    };
    editedProduct(payload);
    onClose();
  };

  const mathRandom = () => Math.random().toFixed(4) * 10000;
  return (
    <Modal onClose={onClose}>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <p className={classes.header}>Editing Product</p>
        <Input
          ref={nameProductRef}
          label="Product name:"
          input={{ id: mathRandom(), type: 'text', defaultValue: name }}
        />
        <Input
          ref={imageUrlProductRef}
          label="Product image url:"
          input={{ id: mathRandom(), type: 'text', defaultValue: imageUrl }}
        />
        <Input
          ref={countProductRef}
          label="Product count:"
          input={{ id: mathRandom(), type: 'number', defaultValue: count }}
        />
        <Input
          ref={widthProductRef}
          label="Product width:"
          input={{ id: mathRandom(), type: 'number', defaultValue: size.width }}
        />
        <Input
          ref={heightProductRef}
          label="Product height:"
          input={{ id: mathRandom(), type: 'number', defaultValue: size.height }}
        />
        <Input
          ref={weightProductRef}
          label="Product weight:"
          input={{ id: mathRandom(), type: 'text', defaultValue: weight }}
        />
        <div className={classes.actions}>
          <button onClick={onClose}>Close</button>
          <button type="submit">Edit</button>
          {!formIsValid && <p className={classes.error}>Please enter valid name or price</p>}
        </div>
      </form>
    </Modal>
  );
};

export default connect(mapToProps, mapDispatch)(EditingForm);
