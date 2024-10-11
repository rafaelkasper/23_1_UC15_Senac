import React, { useContext, useEffect, useState } from "react";
import { AppRoutes } from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { UserContext, useUserContext } from "../contexts/UserContext";

const Routes = () => {
  const { getToken, token, getUserData } = useUserContext();

  useEffect(() => {
    getToken();
    getUserData();
  });

  return (
    <NavigationContainer>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
