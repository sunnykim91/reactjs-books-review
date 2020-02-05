import { connect } from 'react-redux';
import { addBookThunk } from '../actions';
import AddBook from '../components/AddBook';

export default connect(
  state => ({
    token: state.token
  }),
  dispatch => ({
    addBook: async (token, book) => {
      dispatch(addBookThunk(token, book));
    }
  })
)(AddBook);
