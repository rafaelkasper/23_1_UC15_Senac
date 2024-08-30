import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const Footer = () => {
  return (
    <View>
      <Text style={styles.text}>Footer</Text>

      <TouchableOpacity onPress={() => console.log("clicou")}>
        <Feather name="user" size={24} color="#252525" />
      </TouchableOpacity>

      <Feather name="users" size={24} color="#252525" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#f1f1f1",
    fontSize: 22,
  },
});

export default Footer;
