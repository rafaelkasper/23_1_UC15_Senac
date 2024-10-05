import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  const goToDetails = () => {
    navigation.navigate("Details", {
      nome: "Rafael",
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Home</Text>
      <TouchableOpacity onPress={goToDetails}>
        <Text style={{ fontSize: 32 }}>Ir para detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
