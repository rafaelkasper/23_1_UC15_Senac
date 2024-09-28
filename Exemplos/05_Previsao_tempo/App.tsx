import { StatusBar } from "expo-status-bar";

import WeatherSearch from "./src/screens/WeatherSearch";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WeatherSearch />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
