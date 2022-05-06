import React from 'react';
import { useUserContext } from '../../hooks/useUserContext';
import Logout from '../Logout/Logout';

export default function Header() {
  const { user } = useUserContext();
  return (
    <>
      <header>
        {user.email && <Logout />}
        <h1>NoteBook</h1>
        <p>Signed in as: {user.email}</p>
      </header>
    </>
  );
}
