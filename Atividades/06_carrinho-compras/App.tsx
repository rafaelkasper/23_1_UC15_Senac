import { RootSiblingParent } from "react-native-root-siblings";
import Routes from "./src/routes";
import React from "react";
import { UserProvider } from "./src/contexts/UserContext";

export default function App() {
  return (
    <RootSiblingParent>
      <UserProvider>
        <Routes />
      </UserProvider>
    </RootSiblingParent>
  );
}
