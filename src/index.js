import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'nprogress/nprogress.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { enableES5 } from 'immer';
import './index.scss';
import { store } from 'src/store';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

enableES5();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
