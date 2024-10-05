import { View, Text } from "react-native";
import { Person } from "../types/response";
import { FC } from "react";

const PersonCard: FC<Person> = ({ name, email }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1135",
        marginVertical: 8,
        padding: 12,
        marginHorizontal: 4,
      }}
    >
      <Text
        style={{
          color: "#fff",
          marginBottom: 8,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          color: "#fff",
        }}
      >
        {email}
      </Text>
    </View>
  );
};

export default PersonCard;
