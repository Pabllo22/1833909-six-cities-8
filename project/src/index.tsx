import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers, Points} from './mocks/offers';

const Setting = {
  ERROR_COUNT: 316,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      errorsCount = {Setting.ERROR_COUNT}
      answersCards = {offers}
      rooms = {offers}
      points = {Points}
    />
  </React.StrictMode>,
  document.getElementById('root'));
