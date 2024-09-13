import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Repository from "./src/screens/Repository";

export default function App() {
  return (
    <View style={styles.container}>
      <Repository />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
