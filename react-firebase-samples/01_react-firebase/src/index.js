import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import './index.css';
import * as firebase from 'firebase'

// adding firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDq4YtXDQtQbY7EgySPTjBmq3QHMN8Fs8k",
    authDomain: "demotest-8c044.firebaseapp.com",
    databaseURL: "https://demotest-8c044.firebaseio.com"
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
