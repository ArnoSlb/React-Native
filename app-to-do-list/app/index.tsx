import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { s } from "./index.style";

export default function Index() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Text>Header</Text>
          </View>
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
