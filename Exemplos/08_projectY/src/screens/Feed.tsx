import { View, Text, FlatList } from "react-native";
import { Post } from "../types/response";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const Feed = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      const response = await axios.get<Post[]>(URL);

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#aaa",
      }}
    >
      <Text>Feed</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostCard
            id={item.id}
            userId={item.userId}
            title={item.title}
            body={item.body}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Feed;
