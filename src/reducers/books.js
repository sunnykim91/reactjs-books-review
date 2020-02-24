import { SET_BOOKS } from "../actions/index";

const initialState = [];

const books = (state = initialState, action) => {
  if (action.type === SET_BOOKS) {
    return [...action.books];
  }

  return state;
};

export default books;
