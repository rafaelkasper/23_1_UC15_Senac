import { View, Text, StyleSheet, Image } from "react-native";
import Footer from "./Footer";

interface PostProps {
  title: string;
}

const Post = ({ title }: PostProps) => {
  return (
    <View
      style={{
        marginVertical: 15,
        alignItems: "center",
        borderColor: "#fff",
        borderWidth: 2,
        width: "90%",
        paddingVertical: 8,
      }}
    >
      <Text style={styles.title}>{title}</Text>
      <Image
        style={{ width: 100, height: 50, resizeMode: "contain" }}
        source={require("../../assets/icon.png")}
      />
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#f1f1f1",
  },
});

export default Post;
