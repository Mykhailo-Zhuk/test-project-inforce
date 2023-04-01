import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsArrow90DegLeft, BsPencilSquare, BsFillSendPlusFill } from 'react-icons/bs';
import Comment from './Comment';
import classes from './ProductView.module.css';
import { connect } from 'react-redux';
import { addNewComment } from '../../actions/asyncActions';

function mapToProps(state) {
  const productsCopy = state.products;
  const productsCommentsCopy = state.comments;
  return { productsCopy, productsCommentsCopy };
}

function mapDispatch(dispatch) {
  return {
    newComment: (payload) => dispatch(addNewComment(payload)),
  };
}

const ProductView = (props) => {
  const [commentIsValid, setCommentIsValid] = useState(true);
  const commentAddRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  const { productsCopy, productsCommentsCopy, newComment, onShowEditingForm } = props;
  const currentProduct = productsCopy?.filter((product) => product.id === +id);

  const currentProductComment = productsCommentsCopy?.filter(
    (comment) => comment.productId === +id,
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

    const idOfNewComment = productsCommentsCopy.length + 1;

    const curDate = new Date();

    const locateTime = curDate.toLocaleTimeString('uk-Uk', {
      hour: '2-digit',
      minute: '2-digit',
    });
    const locateDate = curDate.toLocaleDateString('uk-Uk', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const date = `${locateTime} ${locateDate}`;

    const payload = {
      id: idOfNewComment,
      productId: +id,
      description: enteredComment,
      date,
    };
    commentAddRef.current.value = '';
    newComment(payload);
  };

  return (
    <div className={classes.product_details}>
      <div className={classes.product_title}>
        <h2>Tech Shop</h2>
      </div>
      {currentProduct.map((prod) => {
        const { id, name, weight, size, imageUrl, count } = prod;
        return (
          <div className={classes.product_view} key={id}>
            <div className={classes.product_imgContainer}>
              <img src={imageUrl} alt="product" />
            </div>
            <h2 className={classes.product_name}>{name}</h2>
            <div className={classes.product_description}>
              <div>
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
              <div className={classes.product_edit}>
                <button
                  type="button"
                  className={classes.product_editBtn}
                  onClick={() => onShowEditingForm(+id)}>
                  <BsPencilSquare size={18} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className={classes.product_continueShopping}>
        <button
          type="button"
          className={classes.product_continueShoppingBtn}
          onClick={() => navigate('/')}>
          <BsArrow90DegLeft size={32} />
        </button>
      </div>
      <div className={classes.product_comments}>
        <h2 className={classes.comments_header}>Comments</h2>
        <div className={classes.comments_items}>
          {currentProductComment?.map((el) => {
            return <Comment data={el} key={Math.random().toFixed(6) * 10000} />;
          })}
        </div>
      </div>
      <form className={classes.product_addingComments} onSubmit={onAddingComment}>
        <textarea
          ref={commentAddRef}
          className={classes.product_addingField}
          placeholder="Enter some comment"></textarea>
        <div className={classes.product_addingComment}>
          <button type="submit" className={classes.product_addingCommentBtn}>
            <BsFillSendPlusFill size={18} />
          </button>
        </div>
      </form>
      {!commentIsValid && <p className={classes.comments_error}>Please enter some text!</p>}
    </div>
  );
};

export default connect(mapToProps, mapDispatch)(ProductView);
