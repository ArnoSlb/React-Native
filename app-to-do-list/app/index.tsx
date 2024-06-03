import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { Header } from "@/components/Header/Header";

import { s } from "./index.style";
import { CardToDo } from "@/components/CardToDo/CardToDo";

const TODO_LIST = [
  { id: 1, title: "Sortir le chien", isCompleted: true },
  { id: 2, title: "Aller chez le garagiste", isCompleted: false },
  { id: 3, title: "Faire les courses", isCompleted: true },
  { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
]

export default function Index() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <Header/>
          <View style={s.body}>
            <CardToDo todo={TODO_LIST[0]}/>
          </View>  
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
            <Text>Footer</Text>
      </View>
    </>
  );
}
