import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);

  const login = () => {
    setIsUserLogged(true);
  };

  const logout = () => {
    setIsUserLogged(false);
  };

  return <AuthContext.Provider value={{ isUserLogged, login, logout }}>{children}</AuthContext.Provider>;
};
