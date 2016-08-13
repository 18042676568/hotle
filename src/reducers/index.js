import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as formReducer } from 'redux-form';
import homepage from './homepage';


const rootReducer = combineReducers({
  reduxAsyncConnect,
  routing,
  form: formReducer,
  homepage,
});

export default rootReducer;
