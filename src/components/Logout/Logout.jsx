import React from 'react';
import { useUserContext } from '../../hooks/useUserContext';

export default function Logout() {
  const { signOutUser } = useUserContext();

  const handleSignOut = async () => {
    await signOutUser();
    history.replace('/');
  };

  return (
    <>
      <button onClick={handleSignOut}>SignOut</button>
    </>
  );
}
