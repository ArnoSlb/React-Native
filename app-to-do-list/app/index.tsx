import { Text, View, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";

import { Header } from "@/components/Header/Header";
import { CardToDo } from "@/components/CardToDo/CardToDo";
import { TabBottomMenu } from "@/components/TabBottomMenu/TabBottomMenu";

import { s } from "./index.style";

export default function Index() {

  const [selectedTabName, setSelectedTabName] = useState("all")
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Sortir le chien", isCompleted: true },
    { id: 2, title: "Aller chez le garagiste", isCompleted: false },
    { id: 3, title: "Faire les courses", isCompleted: true },
    { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
    { id: 5, title: "Aller chez le garagiste", isCompleted: false },
    { id: 6, title: "Faire les courses", isCompleted: true },
    { id: 7, title: "Appeler le vétérinaire", isCompleted: true },
  ]);

  function updateTodo(todo){
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted
    }

    const indexToUpdate = todoList.findIndex(
      (todo) => todo.id === updatedTodo.id
    )

    const updatedTodoList = [...todoList];
    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  function renderTodoList(){
    return todoList.map((todo)=>(
    <View style={s.cardItem} key={todo.id}>
      <CardToDo onPress={updateTodo} todo={todo}/>
    </View>
    ));
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <Header/>
          <View style={s.body}>
            <ScrollView>
              {renderTodoList()}
            </ScrollView>
          </View>  
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
            <TabBottomMenu selectedTabName={selectedTabName} onPress={setSelectedTabName}/>
      </View>
    </>
  );
}
