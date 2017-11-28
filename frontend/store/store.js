// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const configureStore = (preloadedState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, logger))
  );
};

export default configureStore;
