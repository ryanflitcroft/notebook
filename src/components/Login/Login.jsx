import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Login.css';
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
  });

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
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div>
          <span
            onClick={() => setNewUser(false)}
            className={newUser ? styles.clickable : undefined}
          >
            Sign In
          </span>
          <span
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
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
