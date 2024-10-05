import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import { StackRoutes } from "./stack.routes";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "#252525",
        tabBarInactiveBackgroundColor: "#fafa",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Initial"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#fff" : "#252525"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#fff" : "#252525"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
