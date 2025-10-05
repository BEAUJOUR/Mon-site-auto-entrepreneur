import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@fontsource/montserrat/300.css"; // light
import "@fontsource/montserrat/400.css"; // regular
import "@fontsource/montserrat/500.css"; // medium
import "@fontsource/montserrat/700.css"; // bold


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


