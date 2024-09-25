import { createStore, compose } from 'redux';
import authReducer from './reducers/userReducer';

// Setup for Redux DevTools
const composeEnhancers = 
  typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

// Create the store
const store = createStore(
  authReducer,
  composeEnhancers() 
);

export default store;
