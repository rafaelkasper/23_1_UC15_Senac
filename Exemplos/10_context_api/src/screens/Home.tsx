import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <View>
      <Text>Home</Text>
      <Text>{user}</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
