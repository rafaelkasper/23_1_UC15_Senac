import { createDrawerNavigator } from "@react-navigation/drawer";
import Feather from "@expo/vector-icons/Feather";
import { TabRoutes } from "./tab.routes";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="App"
        component={TabRoutes}
        options={{
          drawerIcon: () => <Feather name="home" size={24} color="black" />,
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
}
