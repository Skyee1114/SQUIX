import React, { createContext, useState } from 'react';

// Create a new context
const UserContext = createContext();

// Create a provider component to provide the context value to its children
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Export the context and provider
export { UserContext, UserContextProvider };