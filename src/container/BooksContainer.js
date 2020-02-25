import { connect } from "react-redux";
import {
  setBooks,
  startLoading,
  endLoading,
  setError,
  clearError,
  deleteBook
} from "../actions/index";
import RequestService from "../service/RequestService";
import Book from "../components/Book";

const mapStateToProps = state => ({
  books: state.books,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  requestBooks: token => {
    dispatch(startLoading());
    dispatch(clearError());
    try {
      RequestService.getBooks(token).then(res => {
        dispatch(setBooks(res.data));
        dispatch(endLoading());
      });
    } catch (error) {
      dispatch(setError(error));
      dispatch(endLoading());
    }
  },
  deleteBook: (token, bookId) => {
    RequestService.deleteBook(token, bookId).then(res => {
      console.log(res);
      dispatch(deleteBook(bookId));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
