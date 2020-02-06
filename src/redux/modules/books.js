import BookService from '../../services/BookRequest';
// import { put, delay, call, takeEvery } from 'redux-saga/effects';

const PENDING = 'reactjs-books-review/books/PENDING';
const SUCCESS = 'reactjs-books-review/books/SUCCESS';
const FAIL = 'reactjs-books-review/books/FAIL';

const pending = () => ({ type: PENDING });
const success = books => ({ type: SUCCESS, books });
const fail = error => ({ type: FAIL, error });

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export const getBooks = token => async (dispatch, getState) => {
  const state = getState();
  const token = state.auth.token;
  try {
    dispatch(pending());
    await sleep(2000);
    const res = await BookService.getBooks(token);
    dispatch(success(res.data));
  } catch (error) {
    dispatch(fail(error));
  }
};

// saga
// const START_BOOK_SAGA = 'START_BOOK_SAGA';

// export const START_BOOK_SAGA =

// function* getBooksSaga(action) {
//   // 비동기 로직
//   const token = action.payload.token;
//   try {
//     yield put(pending);
//     yield delay(2000);
//     const res = yield call(BookService.getBooks, token);
//     yield put(success(res.data));
//   } catch (error) {
//     yield put(fail(error));
//   }
// }

// function* booksSaga() {
//   yield takeEvery();
// }

const initialState = {
  books: [],
  loading: false,
  error: null
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return {
        books: [],
        loading: true,
        error: null
      };
    case SUCCESS:
      return {
        books: action.books,
        loading: false,
        error: null
      };
    case FAIL:
      return {
        books: [],
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default books;
