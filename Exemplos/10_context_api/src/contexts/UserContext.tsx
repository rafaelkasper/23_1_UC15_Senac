import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type UserContextProps = {
  user: string;
  token: string;
  signIn: (username: string) => void;
  logout: () => void;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  // Aqui vai toda a lógica
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const signIn = (username: string) => {
    const uuidToken = uuidv4();
    setToken(uuidToken);
    setUser(username);
    console.warn(uuidToken);
  };

  const logout = () => {
    setUser("");
    setToken("");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        signIn,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
