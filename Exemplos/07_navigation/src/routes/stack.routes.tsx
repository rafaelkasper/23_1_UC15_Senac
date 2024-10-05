import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicial",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
