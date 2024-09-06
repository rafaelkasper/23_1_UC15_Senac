import {
  FiraCode_400Regular,
  FiraCode_600SemiBold,
  FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IStorage {
  username: string;
  password: string;
}

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [teste, setTeste] = useState<string>("Não digitado");

  useFonts({
    FiraCode_400Regular,
    FiraCode_600SemiBold,
    FiraCode_700Bold,
  });

  const storeData = async (value: IStorage) => {
    const jsonValue = JSON.stringify(value);

    if (Platform.OS !== "web") {
      try {
        await AsyncStorage.setItem("@hooks-userInfo", jsonValue);
      } catch (e) {
        console.log(e);
      }
    } else {
      localStorage.setItem("@hooks-userInfo", jsonValue);
    }
  };

  const showLogedAlert = () => {
    storeData({ username: username, password: password });

    Alert.alert("Atenção!!!", `Nome: ${username}`, [
      { text: "Legal!!!", onPress: () => console.log("apertou o botão") },
    ]);
  };

  useEffect(() => {
    if (password && password.length > 0) setTeste("digitado");
  }, [password]);

  useEffect(() => {
    Alert.alert("Atenção!!!", "Bem vindo ao nosso super app", [
      { text: "Legal!!!", onPress: () => console.log("apertou o botão") },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          marginLeft: 10,
          fontFamily: "FiraCode_400Regular",
        }}
      >
        Nome de usuário
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <Text
        style={{
          fontSize: 26,
          marginLeft: 10,
          fontFamily: "FiraCode_600SemiBold",
        }}
      >
        Senha
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <Text
        style={{ fontSize: 26, marginLeft: 10, fontFamily: "FiraCode_700Bold" }}
      >
        {teste}
      </Text>
      <TouchableOpacity onPress={showLogedAlert}>
        <Text>Logar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
