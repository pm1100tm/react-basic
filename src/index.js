/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './app.css';
import App from './app';
import SimpleHabit from '../src/component/simpleHabit';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);
