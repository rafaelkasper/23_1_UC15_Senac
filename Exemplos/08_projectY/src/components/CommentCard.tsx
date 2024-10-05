import { View, Text } from "react-native";
import { Comment } from "../types/response";
import { FC } from "react";

const CommentCard: FC<Comment> = ({ name, email, body }) => {
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
        {name} @ {email}
      </Text>
      <Text
        style={{
          color: "#fff",
        }}
      >
        {body}
      </Text>
    </View>
  );
};

export default CommentCard;
