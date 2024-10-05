import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Post, Comment } from "../types/response";
import axios from "axios";
import CommentCard from "../components/CommentCard";

const FeedDetails = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();

  const postId = route.params.id;

  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState<Post | undefined>();
  const [comments, setComments] = useState<Comment[]>([]);

  const getPostDetails = async () => {
    try {
      const postResponse = await axios.get<Post>(`${BASE_URL}/${postId}`);
      setPost(postResponse.data);

      const commentsResponse = await axios.get<Comment[]>(
        `${BASE_URL}/${postId}/comments`
      );
      setComments(commentsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#252525",
        marginVertical: 8,
        padding: 12,
        marginHorizontal: 4,
      }}
    >
      <TouchableOpacity
        style={{
          marginBottom: 6,
        }}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      <Text
        style={{
          color: "#fff",
          marginBottom: 8,
        }}
      >
        {post?.title}
      </Text>
      <Text
        style={{
          color: "#fff",
        }}
      >
        {post?.body}
      </Text>

      <FlatList
        style={{
          marginVertical: 8,
        }}
        data={comments}
        renderItem={({ item }) => (
          <CommentCard
            name={item.name}
            email={item.email}
            body={item.body}
            postId={item.postId}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FeedDetails;
