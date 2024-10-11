import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";

type AuthProps = {
  Login: undefined;
};

// Cria a rota stack com tela de autenticação
const Stack = createNativeStackNavigator<AuthProps>();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
