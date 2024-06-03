import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { Header } from "@/components/Header/Header";

import { s } from "./index.style";

export default function Index() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <Header/>
          <View style={s.body}>
            <Text>Body</Text>
          </View>  
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
            <Text>Footer</Text>
      </View>
    </>
  );
}
