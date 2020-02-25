import { connect } from "react-redux";
import { addBooks, setError, clearError } from "../actions/index";
import RequestService from "../service/RequestService";
import AddBook from "../components/AddBook";

const mapStateToProps = state => ({
  books: state.books,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  addBooks: (token, book) => {
    dispatch(clearError());
    try {
      RequestService.addBook(token, book).then(res => {
        console.log(res);
        dispatch(addBooks(book));
      });
    } catch (error) {
      dispatch(setError(error));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
