import React, { useState } from 'react';
import styles from './Login.css';

export default function Login() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    {
      if (!newUser) {
        const user = await signInUser(email, password);
        setUser(user);
      } else {
        const user = await signUpUser(email, password);
        setUser(user);
      }
      setEmail('');
      setPassword('');
    }
  }

  return (
    <>
      <main>
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <div>
            <span
              onClick={() => setNewUser(false)}
              className={!newUser && styles.active}
            >
              Sign In
            </span>
            <span
              onClick={() => setNewUser(true)}
              className={newUser && styles.active}
            >
              Sign Up
            </span>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button>{!newUser ? 'Sign in' : 'Sign up'}</button>
        </form>
      </main>
    </>
  );
}
