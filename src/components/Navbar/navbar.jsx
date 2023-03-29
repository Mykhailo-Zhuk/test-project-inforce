import React from 'react';
import { Link } from 'react-router-dom';
import { BsBagCheck } from 'react-icons/bs';
import './navbar.css';
import { store } from '../../store/store';
import { sortProductAlphabetically, sortProductByCount } from '../../actions/actions';

export const Navbar = () => {
  const onChangeHandler = (e) => {
    if (e.target.value === 'Alphabetically') return store.dispatch(sortProductAlphabetically());
    if (e.target.value === 'By Count') return store.dispatch(sortProductByCount());
  };
  return (
    <div className="navbar">
      <div>
        <select className="select" onChange={onChangeHandler}>
          <option value="Alphabetically">Alphabetically</option>
          <option value="By Count">By count</option>
        </select>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">{<BsBagCheck size={32} />}</Link>
      </div>
    </div>
  );
};
