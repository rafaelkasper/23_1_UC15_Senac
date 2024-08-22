import { StatusBar } from "expo-status-bar";
import Home from "./src/pages/home";
// import styled from "styled-components/native";

/*
const Container = styled.View`
  flex: 1;
  background-color: #252525;
  align-items: center;
  justify-content: center;
`;
*/

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
