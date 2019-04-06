import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import {firebase} from './firebase';
import {history} from './Router';

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(<Router/>, document.getElementById('root'));
        hasRendered = true;
    }
}


firebase.auth().onAuthStateChanged((user) => {
    if(user){
      console.log('logged in');
      history.push('/dashboard');
      renderApp();
    } else {
      console.log('logged out');
      history.push('/');
      renderApp();
    }
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
