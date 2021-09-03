import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'http://3.109.28.106:9000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
