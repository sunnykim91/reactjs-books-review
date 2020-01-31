import { GET_BOOK_LIST } from '../actions';

const initialState = [];

const books = (state = initialState, action) => {
  console.log('book reducer', action);
  if (action.type === GET_BOOK_LIST) {
    console.log('getbooklist', [...action.books]);
    return [...action.books];
  }

  return state;
};

export default books;
