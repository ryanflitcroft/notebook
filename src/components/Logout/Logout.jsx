import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';

export default function Logout() {
  const { signOutUser, setUser } = useUserContext();

  const handleSignOut = async () => {
    await signOutUser();
    setUser({ email: null });
  };

  return (
    <>
      <button onClick={handleSignOut}>SignOut</button>
    </>
  );
}
