import React, { createContext, useState } from "react";

export const UserContext = createContext({});

type UserProviderProps = {
  children?: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
