import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/calculator';
import Apps from './components/nav';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Apps />
    </BrowserRouter>
  </React.StrictMode>
);

