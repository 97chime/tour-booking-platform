
import { createContext, useState, useEffect } from 'react';
import API from '../api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    setUser(userData);
    console.log('User logged in:', userData.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    console.log('User logged out');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
