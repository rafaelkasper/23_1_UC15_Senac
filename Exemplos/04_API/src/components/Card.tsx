import { View, Text, StyleSheet } from "react-native";
import { RepositoryDTO } from "../types/repositories";

interface CardProps {
  item: RepositoryDTO;
}

const Card = ({ item }: CardProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.language ?? "Não definida"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ce17e2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 32,
    color: "#fff",
  },
});

export default Card;
