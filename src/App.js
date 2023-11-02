import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import CardProduct from './page/cardProduct';
import Cart from './page/cart';
import Category from './page/category';
import Contact from './page/contact';
import DeliveryPayment from './page/deliveryPayment';
import Card from './page/card'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cardProduct" element={<CardProduct/>}/>
        <Route path="/cart/:id" element={<Cart/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/deliveryPayment" element={<DeliveryPayment/>}/>
        <Route path="/card" element={<Card/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
