import Books from '../components/Books';
import { connect } from 'react-redux';
import { setBooksThunk, setBooksPromise } from '../actions';

export default connect(
  state => ({
    books: state.books,
    token: state.token,
    loading: state.loading,
    error: state.error
  }),
  dispatch => ({
    setBooks: token => {
      dispatch(setBooksThunk(token));
    },
    setBooksPromise: token => {
      dispatch(setBooksPromise(token));
    }
  })
)(Books);
