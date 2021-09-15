import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/App.css'
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer'
import Main from './components/Main';
import Styles from './components/Styles';



ReactDOM.render(
  <React.StrictMode>
    
    <Main />
    <Footer />
    <Styles/>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
