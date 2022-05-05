import { createContext, useState } from 'react';
import { getUser, signIn } from '../services/fetch-utils';

const userContext = createContext();

function UserProvider({ children }) {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });
}
