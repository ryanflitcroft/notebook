import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';

export default function PrivateRoute({ children, ...rest }) {
  const auth = useUserContext();
  console.log('auth', auth);
  console.log('rest', { ...rest });
  console.log('location', { location });
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          auth.user.email ? (
            children
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    </>
  );
}
