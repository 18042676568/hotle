import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import clientMiddleware from '../middlewares/clientMiddleware';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export default function configureStore(history, initialState) {
  const enhancer = compose(
    applyMiddleware(clientMiddleware(), thunk),
    applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = enhancer(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
