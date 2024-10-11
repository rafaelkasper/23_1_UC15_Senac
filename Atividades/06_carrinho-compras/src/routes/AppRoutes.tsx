import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import ProductList from "../screens/ProductList";
import ProductDetails from "../screens/ProductDetails";
import Cart from "../screens/Cart";
import Payment from "../screens/Payment";
import OrderStatus from "../screens/OrderStatus";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserDetails from "../screens/UserDetails";
import MenuHeader from "../components/MenuHeader";

const ProductStack = createNativeStackNavigator();

const ProductRoutes = () => {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="Product"
        component={ProductList}
        options={{
          headerRight: () => {
            return <MenuHeader />;
          },
          title: "Lista de produtos",
        }}
      />
      <ProductStack.Screen
        name="Details"
        component={ProductDetails}
        options={{
          headerRight: () => {
            return <MenuHeader />;
          },
          title: "Detalhes do produto",
        }}
      />
    </ProductStack.Navigator>
  );
};

const CartStack = createNativeStackNavigator();

const CartRoutes = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Meu Carrinho",
        }}
      />
      <CartStack.Screen
        name="Payment"
        component={Payment}
        options={{
          title: "Pagamento",
        }}
      />
      <CartStack.Screen
        name="OrderStatus"
        component={OrderStatus}
        options={{
          title: "Status do Pedido",
        }}
      />
    </CartStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ProductRoutes}
        options={{
          tabBarIcon: () => {
            return <Feather name="package" size={24} color="black" />;
          },
          headerShown: false,
          title: "Produtos",
        }}
      />
      <Tab.Screen
        name="CartDetail"
        component={CartRoutes}
        options={{
          tabBarIcon: () => {
            return <Feather name="shopping-bag" size={24} color="black" />;
          },
          headerShown: false,
          title: "Carrinho",
        }}
      />
      <Tab.Screen
        name="UserInfo"
        component={UserDetails}
        options={{
          tabBarIcon: () => {
            return <Feather name="user" size={24} color="black" />;
          },
          title: "Meus Dados",
        }}
      />
    </Tab.Navigator>
  );
};
