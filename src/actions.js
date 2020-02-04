import axios from 'axios';

export const SET_TOKEN = 'SET_TOKEN';

export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const setToken = token => ({ type: SET_TOKEN, token });

export const removeToken = () => ({
  type: REMOVE_TOKEN
});

export const SET_ERROR = 'SET_ERROR';

export const setError = error => ({
  type: SET_ERROR,
  error
});

export const CLEAR_ERROR = 'CLEAR_ERROR';

export const clearError = () => ({
  type: CLEAR_ERROR
});

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const startLoading = () => ({
  type: START_LOADING
});

export const endLoading = () => ({
  type: END_LOADING
});

export const SET_BOOKS = 'SET_BOOKS';

export const setBooks = books => ({
  type: SET_BOOKS,
  books
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
    dispatch(setError(error));
    dispatch(endLoading());

    throw error;
  }
};

export const setBooksThunk = token => async dispatch => {
  try {
    const res = await Book;
  } catch {}
};
