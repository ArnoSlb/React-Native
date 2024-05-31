import { Text, View } from "react-native";
import { Human } from "@/components/Human/Human";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { style } from "./index.style";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={style.square}>
          <Text>Edit app/index.tsx to edit this screen.</Text>
        </View>
        <Human firstName={"Peter"} name={"Peter"} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
