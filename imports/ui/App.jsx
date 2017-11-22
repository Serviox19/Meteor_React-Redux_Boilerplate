import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store.js';

export const App = ({content}) => (
  <Provider store={store}>
    <div id="main-container">
      {content}
    </div>
  </Provider>
);
