import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import reportWebVitals from './reportWebVitals';
import Home from "./components/homePage/home";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
