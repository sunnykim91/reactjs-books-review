import { ADD_BOOK } from '../actions';

const initialState = [];

const book = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_BOOK:
      return action.book;
    default:
      return state;
  }
};

export default book;
