import React from 'react';
import ReactDOM from 'react-dom'; // Importez ReactDOM directement depuis 'react-dom'
import App from './App.jsx';
import '../src/assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
