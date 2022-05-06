import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUserContext();

  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    </>
  );
}
