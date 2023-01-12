import React from 'react';
import { Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Reducer from './reducers/Reducer';

import {createStore,applyMiddleware} from "redux";

import logger from 'redux-logger';


const store = createStore(Reducer,applyMiddleware(logger));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();