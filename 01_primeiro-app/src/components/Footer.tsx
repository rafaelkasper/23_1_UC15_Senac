import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View>
      <Text style={styles.text}>Footer</Text>
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
