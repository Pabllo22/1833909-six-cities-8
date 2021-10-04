import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  ERROR_COUNT: 316,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      errorsCount = {Setting.ERROR_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
