import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../types/navigation";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

/*
const Details = ({ navigation, route }: Props) => {
  const name = route.params.nome;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Details</Text>
      <Text style={{ fontSize: 24 }}>{name}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 32 }}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};
*/

const Details = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Details">>();

  const route = useRoute<any>();

  const { nome } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Details</Text>
      <Text style={{ fontSize: 40 }}>{nome}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ fontSize: 32 }}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
