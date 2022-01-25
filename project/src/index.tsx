import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers, Points, review, citys} from './mocks/offers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reduser';

const Setting = {
  ERROR_COUNT: 316,
};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        errorsCount = {Setting.ERROR_COUNT}
        answersCards = {offers}
        rooms = {offers}
        points = {Points}
        answersRevies = {review}
        city= {citys}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
