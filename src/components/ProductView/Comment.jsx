import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/asyncActions';
import classes from './Comment.module.css';

function mapDispatch(dispatch) {
  return {
    deleteComment: (id) => dispatch(deleteComment(id)),
  };
}

const Comment = (props) => {
  const {
    data: { id, description, date },
    deleteComment,
  } = props;

  const onDeleteComment = () => {
    deleteComment(id);
  };
  return (
    <div className={classes.comments_item}>
      <div className={classes.comments_description}>
        <p>{description}</p>
      </div>
      <div className={classes.comments_date}>
        <p>{date}</p>
      </div>
      <div className={classes.comment_delete}>
        <button className={classes.comment_deleteBtn} onClick={onDeleteComment}>
          <BsFillXCircleFill size={18} />
        </button>
      </div>
    </div>
  );
};

export default connect(null, mapDispatch)(Comment);
