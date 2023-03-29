import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/navbar';
import { ProductList } from './components/shop/ProductList';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Form from './components/UI/Form';
import './App.css';
import Confirmation from './components/UI/Confirmation';
import ProductView from './components/ProductView/ProductView';

function App() {
  const [formIsShown, setFormIsShown] = useState(false);
  const [confirmationIsShown, setConfirmationIsShown] = useState(false);
  const [idOfDeleteProduct, setIdOfDeleteProduct] = useState();

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
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
    <div className="App">
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
          <Route path="/products/:id" element={<ProductView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
