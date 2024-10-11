import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";
import { useUserContext } from "../contexts/UserContext";

const Routes = () => {
  // Importa as informações do contexto usando o hook criado no contexto
  const { token } = useUserContext();

  return (
    <NavigationContainer>
      {
        // Verifica se há um token salvo na memória. Se existe encaminha para a rota do app.
        // Se não tiver token, encaminha para o login
      }
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
