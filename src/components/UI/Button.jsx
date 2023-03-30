import React from 'react';

const Button = (props) => {
  return (
    <div className={`product-${props.className}`}>
      <button
        type={'button' && `${props.Submit}`}
        className={`product-${props.className}_btn`}
        onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
