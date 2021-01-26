import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './app/App.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Hero1 from './hero1.svg'
// import Data from './data.xml';
// import Notes from './data.csv';

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('root')
  );




// import printMe from './print.js';

//  function component() {
//    const element = document.createElement('div');
//   const btn = document.createElement('button');

//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//    return element;
//  }

//  document.body.appendChild(component());