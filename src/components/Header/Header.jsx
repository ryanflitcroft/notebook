import React from 'react';
import { useUserContext } from '../../hooks/useUserContext';
import Logout from '../Logout/Logout';

export default function Header() {
  const { user } = useUserContext();
  return (
    <>
      <header>
        {user.email && (
          <p>
            hello <span>{user.email}</span>
          </p>
        )}

        <h1>NoteBook</h1>

        {user.email && <Logout />}
      </header>
    </>
  );
}
