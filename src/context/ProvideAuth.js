import { createContext, useState } from 'react';

const authContext = createContext();

function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);
}
