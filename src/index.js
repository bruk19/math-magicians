import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/calculator';
import Apps from './components/nav';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home"
import Quote from "../src/pages/Quote"
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Apps />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/Quote" element={<Quote />} />
      </Routes>
      <App />
      <Footer />
    </BrowserRouter>
);

