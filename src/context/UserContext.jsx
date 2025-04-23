import React, { createContext, useState, useEffect } from 'react';

// Create context
export const UserContext = createContext();

// Provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage (if exists)
  useEffect(() => {
    const storedUser = localStorage.getItem('astroUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('astroUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('astroUser');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
