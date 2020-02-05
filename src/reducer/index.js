import { combineReducers } from 'redux';
import token from './token';
import loading from './loading';
import books from './books';
import error from './error';
import book from './book';
const reducer = combineReducers({
  token,
  loading,
  books,
  error,
  book
});

export default reducer;
