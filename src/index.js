import React from 'react';

import { render } from 'react-dom';
import App from './app';

import store from './store';

window.store = store;

console.log(store, '<-store->');

render(
  // <view>text</view>,
  <App store={store} />,
  document.querySelector('#root')
);
