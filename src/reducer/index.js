import { combineReducers } from 'redux';
import token from './token';
import loading from './loading';
import books from './books';

const reducer = combineReducers({
  token,
  loading,
  books
});

export default reducer;
