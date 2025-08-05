
import { createContext, useState, useEffect } from 'react';
import API from '../api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  // Restore user from token (optional)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      API.get('/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => setUser(res.data.user))
        .catch(() => setUser(null));
    }
  }, []);

  const login = (userData, accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    setUser(userData);
    console.log('User logged in:', userData);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    console.log('User logged out');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
