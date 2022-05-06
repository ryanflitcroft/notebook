import { createContext, useContext, useState } from 'react';
import { getUser, signIn, signUp } from '../services/fetch-utils';

const userContext = createContext();

export default function UserProvider({ children }) {
  const currentUser = getUser();
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState(currentUser || { email: null });

  const authorizeUser = async (email, password) => {
    if (!newUser) {
      const authenticatedUser = await signIn(email, password);
      setUser(authenticatedUser);
    } else {
      const authenticatedUser = await signUp(email, password);
      setUser(authenticatedUser);
    }
  };

  return (
    <userContext.Provider value={{ newUser, setNewUser, user, authorizeUser }}>
      {children}
    </userContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error('useUser must be user within UserProvider');
  }

  return context;
};
