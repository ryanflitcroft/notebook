import { createContext, useContext, useState } from 'react';
import { getUser, signIn, signUp } from '../services/fetch-utils';

export const userContext = createContext();

export default function UserProvider({ children }) {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });
  const [newUser, setNewUser] = useState(false);

  const authorizeUser = async (email, password) => {
    if (!newUser) {
      const authenticatedUser = await signIn(email, password);
      console.log('authuser', authenticatedUser);
      setUser(authenticatedUser);
    } else {
      const authenticatedUser = await signUp(email, password);
      setUser(authenticatedUser);
    }
  };

  const userContextState = {
    user,
    setUser,
    newUser,
    setNewUser,
    authorizeUser,
  };

  return (
    <userContext.Provider value={userContextState}>
      {children}
    </userContext.Provider>
  );
}
