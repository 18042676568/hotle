import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const history = createMemoryHistory('/');
const store = configureStore(history);
const wrapperHistory = syncHistoryWithStore(history, store);

render(
  <AppContainer>
    <Root store={store} history={wrapperHistory} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const DevRoot = require('./containers/Root');

    render(
      <AppContainer>
        <DevRoot store={store} history={wrapperHistory} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
