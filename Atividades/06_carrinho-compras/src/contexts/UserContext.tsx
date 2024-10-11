import { ReactNode, createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showError, showSuccess } from "../utils/Toast";
import axios from "axios";
import { UserDTO } from "../types/User";

type UserContextProps = {
  token: string;
  getToken: () => void;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
  userData: UserDTO | undefined;
  getUserData: () => Promise<void>;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState<UserDTO | undefined>(undefined);

  const URL = "https://www.melivecode.com/api/login";

  const saveToken = async (value: string) => {
    try {
      await AsyncStorage.setItem("@cart-app-token", value);
      setToken(value);
    } catch (e) {
      showError("Não foi possível salvar o token");
    }
  };

  const storeUserData = async (value: UserDTO) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@cart-app-user", jsonValue);
    } catch (e) {
      showError("Não foi possível salvar os dados do login");
    }
  };

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@cart-app-token");
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      showError("Não foi possível recuperar o token");
    }
  };

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@cart-app-user");
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserData(data);
    } catch (e) {
      showError("Não foi possível recuperar os dados de login");
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post<UserDTO>(URL, {
        username: email,
        password,
      });

      setUserData(response.data);
      storeUserData(response.data);
      saveToken(response.data.accessToken);
      showSuccess(`Bem vindo(a) ${response.data.user.fname}`);
    } catch (error: any) {
      showError(error);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("@cart-app-token");
    await AsyncStorage.removeItem("@cart-app-user");
    setUserData(undefined);
    setToken("");
    showSuccess("Dados de acesso removidos");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        getToken,
        handleLogin,
        handleLogout,
        userData,
        getUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
