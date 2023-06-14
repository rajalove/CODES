import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'mdbootstrap/css/mdb.css';
import 'mdbootstrap/js/jquery.js';
import 'mdbootstrap/js/popper.js';

// import 'mdbootstrap/css/bootstrap.css';
// import '../node_modules/mdbootstrap/css/bootstrap.css';
// import '../node_modules/mdbootstrap/js/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
