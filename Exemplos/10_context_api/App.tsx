import "react-native-get-random-values";
import Routes from "./src/routes";
import { UserContextProvider } from "./src/contexts/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}
