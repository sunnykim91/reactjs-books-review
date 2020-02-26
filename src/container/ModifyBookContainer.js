import { connect } from "react-redux";
import { modifyBook, setError, clearError } from "../actions/index";
import RequestService from "../service/RequestService";
import ModifyBook from "../components/ModifyBook";

const mapStateToProps = state => ({
  books: state.books,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  modifyBook: (token, bookId, book) => {
    dispatch(clearError());
    try {
      RequestService.editBook(token, bookId, book).then(res => {
        console.log(res);
        dispatch(modifyBook(bookId, book));
      });
    } catch (error) {
      dispatch(setError(error));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyBook);
