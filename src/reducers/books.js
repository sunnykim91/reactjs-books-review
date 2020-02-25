import { SET_BOOKS, ADD_BOOK, DELETE_BOOK } from "../actions/index";

const initialState = [];

const books = (state = initialState, action) => {
  if (action.type === SET_BOOKS) {
    return [...action.books];
  } else if (action.type === ADD_BOOK) {
    return [...state, action.book];
  } else if (action.type === DELETE_BOOK) {
    return state.filter(book => book.bookId !== action.bookId);
  }

  return state;
};

export default books;
