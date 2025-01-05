import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'; // Explicitly add the extension
import reportWebVitals from './reportWebVitals.js'; // Explicitly add the extension

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
