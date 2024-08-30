import { Text, StyleSheet } from "react-native";
import Post from "../components/Post";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";

const Home = () => {
  // Lógica
  //npx expo install react-native-safe-area-context
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meu título</Text>
      <Post title="Texto 1" />
      <Post title="Texto 2" />
      <Post title="Texto 3" />
      <Post title="Texto 4" />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252525",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "#f1f1f1",
    fontSize: 34,
    marginBottom: 8,
  },
});

export default Home;
