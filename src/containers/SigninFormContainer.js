// import SigninForm from '../components/SigninForm';
// import { connect } from 'react-redux';
// import { setToken, startLoading, endLoading, setError } from '../actions';

// export default connect(
//   state => ({
//     loading: state.loading,
//     error: state.error
//   }),
//   dispatch => ({
//     setToken: token => {
//       dispatch(setToken(token));
//     },
//     setError: error => {
//       dispatch(setError(error));
//     },
//     startLoading: () => {
//       dispatch(startLoading());
//     },
//     endLoading: () => {
//       dispatch(endLoading());
//     }
//   })
// )(SigninForm);

import SigninForm from '../components/SigninForm';
import { connect } from 'react-redux';
import {
  setToken,
  startLoading,
  endLoading,
  setError,
  clearError,
  loginThunk
} from '../actions';
import axios from 'axios';

export default connect(
  state => ({
    loading: state.loading,
    error: state.error
  }),
  dispatch => ({
    loginThunk: (email, password) => {
      dispatch(loginThunk(email, password));
    }
  })
)(SigninForm);
