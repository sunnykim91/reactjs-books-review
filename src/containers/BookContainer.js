import React, { useCallback } from 'react';

import Books from '../components/Books';
import { connect, useSelector, useDispatch } from 'react-redux';
import { deleteBookThunk } from '../actions';
import { getBooks as getBooksAction } from '../redux/modules/books';

// export default connect(
//   state => ({
//     books: state.books.books,
//     token: state.auth.token,
//     loading: state.books.loading,
//     error: state.books.error
//   }),
//   dispatch => ({
//     getBooks: token => {
//       dispatch(getBooks(token));
//     },
//     deleteBook: async (token, bookId) => {
//       dispatch(deleteBookThunk(token, bookId));
//     }
//   })
// )(Books);

const BookContainer = props => {
  const token = useSelector(state => state.auth.token);
  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch(getBooksAction(token));
  }, [token, dispatch]);

  return (
    <Books
      {...props}
      books={books}
      loading={loading}
      error={error}
      getBooks={getBooks}
    />
  );
};

export default BookContainer;
