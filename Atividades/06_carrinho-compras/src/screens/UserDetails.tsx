import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import { useUserContext } from "../contexts/UserContext";
import Animated, {
  BounceInDown,
  BounceInLeft,
  BounceInRight,
  FlipInEasyX,
} from "react-native-reanimated";

const UserDetails = () => {
  const { userData, handleLogout } = useUserContext();

  return (
    <View>
      <Animated.View entering={FlipInEasyX.delay(150).duration(2000)}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: userData?.user.avatar,
          }}
        />
      </Animated.View>
      <Animated.View entering={BounceInDown.delay(150).duration(2000)}>
        <Text>
          {userData?.user.fname ?? ""} {userData?.user.lname ?? ""}
        </Text>
        <Text>{userData?.user.email ?? ""}</Text>
      </Animated.View>
      <Button onPress={handleLogout} title="Sair" />
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({});
