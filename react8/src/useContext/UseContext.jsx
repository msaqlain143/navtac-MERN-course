// src/context/UserContext.jsx
import { createContext, useContext, useState } from "react";

// Create context
const UserContext = createContext();

// Provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Muhammad Saqlain", age: 30 });

  const updateUser = (newUser) => {
    setUser((prev) => ({ ...prev, ...newUser }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Optional custom hook
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
