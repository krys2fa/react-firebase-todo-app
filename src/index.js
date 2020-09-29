import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjjRNuythwzAKcEFIXjdv5P_fJjpDX6XE",
  authDomain: "todo-app-866f1.firebaseapp.com",
  databaseURL: "https://todo-app-866f1.firebaseio.com",
  projectId: "todo-app-866f1",
  storageBucket: "todo-app-866f1.appspot.com",
  messagingSenderId: "59244731493",
  appId: "1:59244731493:web:6b720360ef1ba55fc27a8c"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
