import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware1 = store => {
  console.log(store);
  return next => {
    console.log('middleware1', 1);
    return action => {
      console.log('middleware1', 2);
      const returnValue = next(action);
      console.log('middleware1', 3);
      return returnValue;
    };
  };
};

const middleware2 = store => {
  console.log(store);
  return next => {
    console.log('middleware2', 1);
    return action => {
      console.log('middleware2', 2);
      const returnValue = next(action);
      console.log('middleware2', 3);
      return returnValue;
    };
  };
};

export default function create(initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(middleware1, middleware2))
  );
}
