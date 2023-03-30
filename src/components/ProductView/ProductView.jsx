import React, { useRef, useState } from 'react';
import { BsArrow90DegLeft, BsPencilSquare, BsFillSendPlusFill } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';
import { newCommentAction } from '../../actions/actions';
import { store } from '../../store/store';
import Button from '../UI/Button';
import './ProductView.css';

const ProductView = (props) => {
  const [commentIsValid, setCommentIsValid] = useState(true);
  const commentAddRef = useRef();
  const productId = useParams();
  const navigate = useNavigate();
  const productsCopy = store.getState().products;
  const currentProduct = productsCopy.filter((product) => product.id === +productId.id);

  const productsCommentsCopy = store.getState().comments;
  const currentProductComment = productsCommentsCopy.filter(
    (comment) => comment.productId === +productId.id,
  );

  const onAddingComment = (event) => {
    event.preventDefault();
    const enteredComment = commentAddRef.current.value;

    if (enteredComment.trim().length === 0) {
      setCommentIsValid(false);
      setTimeout(() => {
        setCommentIsValid(true);
      }, 5000);
      return;
    }
    const newComment = {
      enteredComment,
      productId,
    };
    commentAddRef.current.value = '';
    store.dispatch(newCommentAction(newComment));
  };
  console.log(currentProductComment);
  return (
    <div className="product-details">
      <div className="product-title">
        <h2>Tech Shop</h2>
      </div>
      {currentProduct.map((prod) => {
        const { id, name, weight, size, imageUrl, count } = prod;
        return (
          <div className="product-view" key={id}>
            <div className="product-img">
              <img src={imageUrl} alt="product-image" />
            </div>
            <div className="product-description">
              <div>
                <p>
                  <b>{name}</b>
                </p>
                <p>
                  Count: <span>{count}</span>
                </p>

                <p>
                  Weight: <span>{weight}</span>
                </p>
                <p>
                  Size: <br />- width: <span>{size.width}</span> <br />- height:{' '}
                  <span>{size.height}</span>
                </p>
              </div>
              <Button className="edit">
                <BsPencilSquare size={32} />
              </Button>
            </div>
          </div>
        );
      })}
      <Button className="continue-shopping" onClick={() => navigate('/')}>
        <BsArrow90DegLeft size={32} />
      </Button>
      <div className="product-comments">
        <h2 className="comments_header">Comments</h2>
        <div className="comments_items">
          {currentProductComment.map((comment) => {
            return (
              <div className="comments_item">
                <div className="comments_description">
                  <p>{comment.description}</p>
                </div>
                <div className="comments_date">
                  <p>{comment.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <form className="product-addingComments" onSubmit={onAddingComment}>
        <textarea
          ref={commentAddRef}
          className="adding-field"
          placeholder="Enter some comment"></textarea>
        <Button className="addingComment" Submit="submit">
          <BsFillSendPlusFill size={16} />
        </Button>
      </form>
      {!commentIsValid && <p className="comments-error">Please enter some text!</p>}
    </div>
  );
};

export default ProductView;
