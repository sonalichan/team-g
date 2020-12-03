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

const firebaseConfig = {
    apiKey: "AIzaSyD6RLknXuvyvCfpnC5YZkUwrwLfVjbSQ_k",
    authDomain: "gerbil-78696.firebaseapp.com",
    databaseURL: "https://gerbil-78696.firebaseio.com",
    projectId: "gerbil-78696",
    storageBucket: "gerbil-78696.appspot.com",
    messagingSenderId: "189617310635",
    appId: "1:189617310635:web:a6e5bc45370d7dff28a0ee",
    measurementId: "G-C9CXPD0SZJ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAppAuth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider()



ReactDOM.render(<BrowserRouter><App firebaseAppAuth={firebaseAppAuth} googleProvider={googleProvider}/></BrowserRouter>, document.getElementById('root'));
