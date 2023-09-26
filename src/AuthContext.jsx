// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    // Perform authentication logic (e.g., check user credentials)
    // Set authenticated to true if authentication is successful
    setAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic (e.g., clear authentication tokens)
    // Set authenticated to false to log the user out
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
