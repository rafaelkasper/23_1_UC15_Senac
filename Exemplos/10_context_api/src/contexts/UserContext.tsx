import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Define quais propriedades e métodos o contexto vai prover para a aplicação
export type UserContextProps = {
  user: string;
  token: string;
  signIn: (username: string) => void;
  logout: () => void;
};

// Define que o Provider receberá como children (filho) um componente React
type UserContextProviderProps = {
  children: ReactNode;
};

// Cria o Contexto
export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

// Cria um hook personalizado para usar o Contexto na aplicação
export const useUserContext = () => useContext(UserContext);

// Cria a função principal do Contexto: o provider que vai ser o provedor de informações
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  // Nesta parte vai toda a lógica que será necessária para prover ao app as informações
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const signIn = (username: string) => {
    // Cria um id para ser usado como um token fictício
    const uuidToken = uuidv4();
    setToken(uuidToken);
    setUser(username);
  };

  const logout = () => {
    setUser("");
    setToken("");
  };

  // Retorna as propriedades que foram definidas lá no primeiro tipo
  // As propriedades e métodos ficarão acessíveis para toda a aplicação
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
