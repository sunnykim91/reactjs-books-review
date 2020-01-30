import SigninForm from '../components/SigninForm';
import { connect } from 'react-redux';
import { setToken, startLoading, endLoading } from '../actions';

export default connect(
  state => ({
    loading: state.loading
  }),
  dispatch => ({
    setToken: token => {
      dispatch(setToken(token));
    },
    startLoading: () => {
      dispatch(startLoading());
    },
    endLoading: () => {
      dispatch(endLoading());
    }
  })
)(SigninForm);
