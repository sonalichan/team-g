import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// css files
import './index.css';
import './style.css';

import firebase from 'firebase/app'; //firebase for authentification
import 'firebase/auth';
import 'firebase/database'; // acceess active database

import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
