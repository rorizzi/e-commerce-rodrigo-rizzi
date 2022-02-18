import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDoT64-rmt8B6aFRfIjZIRAdzx0sRux8xQ",
  authDomain: "ecommerce-rizzi.firebaseapp.com",
  projectId: "ecommerce-rizzi",
  storageBucket: "ecommerce-rizzi.appspot.com",
  messagingSenderId: "623507720481",
  appId: "1:623507720481:web:a32dde61483cb8df051660"
};

initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
