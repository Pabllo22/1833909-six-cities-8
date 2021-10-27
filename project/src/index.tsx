import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

const Setting = {
  ERROR_COUNT: 316,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      errorsCount = {Setting.ERROR_COUNT}
      answersCards = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
