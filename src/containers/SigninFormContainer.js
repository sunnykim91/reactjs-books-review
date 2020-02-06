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

import { connect } from 'react-redux';
import SigninForm from '../components/SigninForm';
import { login } from '../redux/modules/auth';

export default connect(
  state => ({
    loading: state.auth.loading,
    error: state.auth.error
  }),
  dispatch => ({
    login: (email, password) => {
      dispatch(login(email, password));
    }
  })
)(SigninForm);
