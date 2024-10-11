import "react-native-get-random-values";
import Routes from "./src/routes";
import { UserContextProvider } from "./src/contexts/UserContext";

export default function App() {
  return (
    // Envolve a aplicação com o Provider do Context Api
    // O Provider é um container que vai envolver toda a aplicação
    // As informações estarão acessíveis a partir deste ponto
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}
