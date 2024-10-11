import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import { useUserContext } from "../contexts/UserContext";

const UserDetails = () => {
  const { userData, handleLogout } = useUserContext();

  return (
    <View>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: userData?.user.avatar,
        }}
      />
      <Text>
        {userData?.user.fname ?? ""} {userData?.user.lname ?? ""}
      </Text>
      <Text>{userData?.user.email ?? ""}</Text>
      <Button onPress={handleLogout} title="Sair" />
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({});
