import PersonCard from "../components/PersonCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Person } from "../types/response";
import { Text, View } from "react-native";

const User = () => {
  const URL = "https://jsonplaceholder.typicode.com/users/1";

  const [user, setUser] = useState<Person | undefined>(undefined);

  const getFriends = async () => {
    try {
      const response = await axios.get<Person>(URL);

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  return !!user ? (
    <PersonCard
      id={user?.id}
      name={user?.name}
      username={user?.username}
      email={user?.email}
      address={user.address}
      phone={user?.phone}
      website={user?.website}
    />
  ) : (
    <View>
      <Text>Não há dados</Text>
    </View>
  );
};

export default User;
