import React, { Component } from 'react';
import { Provider } from 'react-redux';
import getRoutes from '../routes';
import { Router } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';
import apiClient from '../helpers/apiClient';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    const client = apiClient(store.dispatch);
    return (
      <Provider store={store}>
        <Router
          routes={getRoutes(store)}
          history={history}
          render={(props) => <ReduxAsyncConnect {...props} helpers={{ client }} />}
        />
      </Provider>
    );
  }
}
