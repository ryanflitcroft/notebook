import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from '../../App.css';
import { useUserContext } from '../../hooks/useUserContext';

export default function Login() {
  const { user, newUser, setNewUser, authorizeUser } = useUserContext();
  const location = useLocation();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    user.email && history.replace('/');
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await authorizeUser(email, password);
      setEmail('');
      setPassword('');

      history.replace(from.pathname);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form
        aria-label="sign in or sign up to continue"
        className={styles.authForm}
        onSubmit={handleSubmit}
      >
        <div aria-label="container for sign in and sign up toggles">
          <span
            aria-label="toggle sign in for existing users"
            onClick={() => setNewUser(false)}
            className={newUser ? styles.clickable : undefined}
          >
            Sign In
          </span>
          <span
            aria-label="toggle sign up for new users"
            onClick={() => setNewUser(true)}
            className={!newUser ? styles.clickable : undefined}
          >
            Sign Up
          </span>
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          minLength="6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>{!newUser ? 'Sign in' : 'Sign up'}</button>
      </form>
    </>
  );
}
