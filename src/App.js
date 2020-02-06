import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import BookList from './pages/BookList';
import ErrorBoundary from 'react-error-boundary';
import { ConnectedRouter } from 'connected-react-router';

const ErrorFallbackComponent = ({ error }) => <div>{error.message}</div>;

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
    <ConnectedRouter>
      <Switch>
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/bookList' component={BookList} />
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </ErrorBoundary>
);

export default App;
