import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// HoC는 3가지 형태가 존재
// withRouter(Component)
// createFragment(Component, option)
// connect(option)(C)

function withAuth(Component, loggedin = true) {
  function WrappedComponent(props) {
    const token = useSelector(state => state.auth.token);

    if (loggedin) {
      if (token === null) {
        return <Redirect to='/signin' />;
      }
      return <Component {...props} token={token} />;
    } else {
      if (token !== null) {
        return <Redirect to='/' />;
      }
      return <Component {...props} />;
    }
  }
  WrappedComponent.displayName = `withAuth(${Component.name})`;
  return WrappedComponent;
}

// function withAuth(Component) {
//   function WrappedComponent(props) {
//     const token = localStorage.getItem('token');
//     if (token === null) {
//       return <Redirect to='/signin' />;
//     }
//     return <Component {...props} token={token} />;
//   }
//   WrappedComponent.displayName = `withAuth(${Component.name})`;
//   return WrappedComponent;
// }

export default withAuth;
