import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";
import { DrawerRoutes } from "./drawer.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
};

export default Routes;
