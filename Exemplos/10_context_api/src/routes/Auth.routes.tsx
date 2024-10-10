import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";

type AuthProps = {
  Login: undefined;
};

const Stack = createNativeStackNavigator<AuthProps>();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
