import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import PasswordGenerator from './components/PasswordGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PasswordGenerator />
  </React.StrictMode>
);
