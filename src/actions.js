import axios from 'axios';
import BookService from './services/BookRequest';

export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const setToken = token => ({ type: SET_TOKEN, token });

export const removeToken = () => ({
  type: REMOVE_TOKEN
});

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const startLoading = () => ({
  type: START_LOADING
});

export const endLoading = () => ({
  type: END_LOADING
});

export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const setError = error => ({
  type: SET_ERROR,
  error
});

export const clearError = () => ({
  type: CLEAR_ERROR
});

export const loginThunk = (email, password) => async dispatch => {
  try {
    dispatch(clearError());
    dispatch(startLoading());
    const response = await axios.post('https://api.marktube.tv/v1/me', {
      email,
      password
    });
    const { token } = response.data;
    dispatch(endLoading());
    localStorage.setItem('token', token);
    dispatch(setToken(token));
  } catch (error) {
    dispatch(endLoading());
    dispatch(setError(error));

    throw error;
  }
};

export const logoutThunk = token => async dispatch => {
  // 서버에 알려주기
  try {
    await axios.delete('https://api.marktube.tv/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    console.log(error);
  }

  // 토큰 지우기
  localStorage.removeItem('token');

  // 리덕스 토큰 지우기
  dispatch(removeToken());
};

export const SET_BOOKS = 'SET_BOOKS';

export const setBooks = books => ({
  type: SET_BOOKS,
  books
});

export const setBooksThunk = token => async dispatch => {
  try {
    dispatch(startLoading());
    dispatch(clearError());
    await sleep(2000);
    const res = await BookService.getBooks(token);
    dispatch(endLoading());
    dispatch(setBooks(res.data));
  } catch (error) {
    dispatch(endLoading());
    dispatch(setError(error));
  }
};

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export const BOOKS = 'BOOKS';
export const BOOKS_PENDING = 'BOOKS_PENDING';
export const BOOKS_FULFILLED = 'BOOKS_FULFILLED';
export const BOOKS_REJECTED = 'BOOKS_REJECTED';

export const setBooksPromise = token => ({
  type: BOOKS,
  payload: new Promise(async resolve => {
    await sleep(1000);
    const res = await BookService.getBooks(token);
    resolve(res);
  })
});

export const ADD_BOOK = 'ADD_BOOK';

export const addBook = book => ({
  type: ADD_BOOK,
  book
});

export const addBookThunk = (token, book) => async dispatch => {
  try {
    const res = await BookService.addBook(token, book);
    console.log(res);
    dispatch(setBooksPromise(token));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const DELETE_BOOK = 'DELETE_BOOK';

export const deleteBook = bookId => ({
  type: DELETE_BOOK,
  bookId
});

export const deleteBookThunk = (token, bookId) => async dispatch => {
  try {
    const res = await BookService.deleteBook(token, bookId);
    console.log(res);
    dispatch(setBooksPromise(token));
  } catch (error) {
    dispatch(setError(error));
  }
};
