import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Home from "@/pages/Home/Home";

export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Home/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
