import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";
import { useUserContext } from "../contexts/UserContext";

const Routes = () => {
  const { token } = useUserContext();

  return (
    <NavigationContainer>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
