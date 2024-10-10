import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const { signIn } = useContext(UserContext);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    signIn(username);
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput onChangeText={(u) => setUsername(u)} value={username} />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
