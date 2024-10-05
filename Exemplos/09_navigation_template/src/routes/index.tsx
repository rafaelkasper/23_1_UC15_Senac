import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feather from "@expo/vector-icons/Feather";
import { StackList } from "../types/navigation";
import Feed from "../screens/Feed";
import FeedDetails from "../screens/FeedDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Friends from "../screens/Friends";
import User from "../screens/User";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "../screens/Settings";

const Stack = createNativeStackNavigator<StackList>();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="FeedDetails" component={FeedDetails} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: () => <Feather name="users" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: () => <Feather name="box" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="App"
        component={TabRoutes}
        options={{
          drawerIcon: () => (
            <Feather name="smartphone" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: () => <Feather name="settings" size={24} color="black" />,
        }}
      />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
};

export default Routes;
