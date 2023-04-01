import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Form from './components/UI/Form';
import EditingForm from './components/UI/EditingForm';
import classes from './App.module.css';
import Confirmation from './components/UI/Confirmation';
import ProductView from './components/ProductView/ProductView';

function App() {
  const [formIsShown, setFormIsShown] = useState(false);
  const [confirmationIsShown, setConfirmationIsShown] = useState(false);
  const [idOfDeleteProduct, setIdOfDeleteProduct] = useState();
  const [editingFromIsShown, setEditingFromIsShown] = useState(false);
  const [idOfCurProd, setIdOfCurProd] = useState();

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const showEditingFormHandler = (id) => {
    setIdOfCurProd(id);
    setEditingFromIsShown(true);
  };

  const hideEditingFormHandler = () => {
    setEditingFromIsShown(false);
  };

  const showConfirmationHandler = () => {
    setConfirmationIsShown(true);
  };

  const hideConfirmationHandler = () => {
    setConfirmationIsShown(false);
  };

  const submitDeleteHandler = (id) => {
    setIdOfDeleteProduct(id);
  };

  return (
    <div className={classes.App}>
      <Router>
        {formIsShown && <Form onClose={hideFormHandler} />}
        {confirmationIsShown && (
          <Confirmation onClose={hideConfirmationHandler} idOfDeleteProduct={idOfDeleteProduct} />
        )}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                onShowForm={showFormHandler}
                onShowConfirmation={showConfirmationHandler}
                idSubmitDelete={submitDeleteHandler}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/products/:id"
            element={
              <ProductView
                onShowForm={showFormHandler}
                onShowEditingForm={(id) => showEditingFormHandler(id)}
              />
            }
          />
        </Routes>
        {editingFromIsShown && <EditingForm onClose={hideEditingFormHandler} id={idOfCurProd} />}
      </Router>
    </div>
  );
}

export default App;
