import Books from '../components/Books';
import { connect } from 'react-redux';
import { setBooksThunk } from '../actions';
import axios from 'axios';

export default connect(
  state => ({
    books: state.books,
    token: state.token
  }),
  dispatch => ({
    setBooks: token => {
      axios
        .get('https://api.marktube.tv/v1/book', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log(res);
          setBooks(res.data);
        });
    }
  })
)(Books);
