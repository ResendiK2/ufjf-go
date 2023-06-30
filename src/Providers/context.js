/* eslint-disable prefer-destructuring */
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isDriver, setIsDriver] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsDriver(true);
      setInitializing(false);
    }, 3000);
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        isDriver,
        setIsDriver,
        isLogged,
        setIsLogged,
        isConnected,
        setIsConnected,
        initializing,
        setInitializing,
      }}
    >
      {children}
    </Context.Provider>
  );
};
