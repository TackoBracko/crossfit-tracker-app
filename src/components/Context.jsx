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

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return <Context.Provider value={{ user, handleUserData }}>{children}</Context.Provider>;
};
