import { View, Text, TouchableOpacity } from "react-native";
import { Post } from "../types/response";
import { FC } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackList } from "../types/navigation";

// const PostCard = ({ id, userId, title, body }: Post) => {
const PostCard: FC<Post> = ({ id, title, body }) => {
  const navigation = useNavigation<NavigationProp<StackList>>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("FeedDetails", {
          id,
        })
      }
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#252525",
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
          {title}
        </Text>
        <Text
          style={{
            color: "#fff",
          }}
        >
          {body}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
