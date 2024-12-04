import { createContext, useState } from 'react';

export const Context = createContext();

export const UserDataContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    weight: '',
    height: '',
    gender: '',
    birthday: '',
    age: '',
  });

  const handleUserData = (data) => {
    console.log(data);
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
  };

  return <Context.Provider value={{ user, handleUserData }}>{children}</Context.Provider>;
};
