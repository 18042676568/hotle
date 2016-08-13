import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import clientMiddleware from '../middlewares/clientMiddleware';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export default function configureStore(history, initialState) {
  const enhancer = compose(
    applyMiddleware(clientMiddleware(), thunk),
    applyMiddleware(routerMiddleware(history))
  );

  return enhancer(createStore)(rootReducer, initialState);
}
