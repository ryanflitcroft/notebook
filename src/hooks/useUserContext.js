import { useContext } from 'react';
import { userContext } from '../context/UserProvider';

export const useUserContext = () => {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error('useUser must be user within UserProvider');
  }

  return context;
};
