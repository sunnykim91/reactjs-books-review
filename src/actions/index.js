export const SET_BOOKS = "SET_BOOKS";

export function setBooks(books) {
  return {
    type: SET_BOOKS,
    books
  };
}

export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export function startLoading() {
  return {
    type: START_LOADING
  };
}

export function endLoading() {
  return {
    type: END_LOADING
  };
}

export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export function setError(error) {
  return {
    type: SET_ERROR,
    error
  };
}
export function clearError() {
  return {
    type: CLEAR_ERROR
  };
}

export const ADD_BOOK = "ADD_BOOK";

export function addBooks(book) {
  return {
    type: ADD_BOOK,
    book
  };
}

export const DELETE_BOOK = "DELETE_BOOK";

export function deleteBook(bookId) {
  return {
    type: DELETE_BOOK,
    bookId
  };
}

export const MODIFY_BOOK = "MODIFY_BOOK";

export function modifyBook(bookId, book) {
  return {
    type: MODIFY_BOOK,
    bookId,
    book
  };
}
