import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Person } from "../types/response";
import axios from "axios";
import PersonCard from "../components/PersonCard";

const Friends = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const [friends, setFriends] = useState<Person[]>([]);

  const getFriends = async () => {
    try {
      const response = await axios.get<Person[]>(URL);

      setFriends(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFriends();
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
      <Text>Friends</Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <PersonCard
            id={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
            address={item.address}
            phone={item.phone}
            website={item.website}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Friends;
