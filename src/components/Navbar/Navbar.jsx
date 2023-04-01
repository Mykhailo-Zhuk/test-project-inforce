import React from 'react';
import { Link } from 'react-router-dom';
import { BsBagCheck } from 'react-icons/bs';
import classes from './Navbar.module.css';
import { sortProductAlphabeticallyAction, sortProductByCountAction } from '../../actions/actions';
import { connect } from 'react-redux';

function mapDispatch(dispatch) {
  return {
    sortAlphabetically: () => dispatch(sortProductAlphabeticallyAction()),
    sortByCount: () => dispatch(sortProductByCountAction()),
  };
}

export const Navbar = (props) => {
  const { sortAlphabetically, sortByCount } = props;

  const onChangeHandler = (e) => {
    if (e.target.value === 'Alphabetically') return sortAlphabetically();
    if (e.target.value === 'By Count') return sortByCount();
  };

  return (
    <div className={classes.navbar}>
      <div>
        <select className={classes.select} onChange={onChangeHandler}>
          <option value="Alphabetically">Alphabetically</option>
          <option value="By Count">By count</option>
        </select>
      </div>
      <div className={classes.links}>
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">{<BsBagCheck size={32} />}</Link>
      </div>
    </div>
  );
};

export default connect(null, mapDispatch)(Navbar);
