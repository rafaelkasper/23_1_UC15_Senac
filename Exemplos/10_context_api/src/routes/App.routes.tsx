import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

type AppProps = {
  Home: undefined;
};

// Cria rota stack com a tela inicial
const Stack = createNativeStackNavigator<AppProps>();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
