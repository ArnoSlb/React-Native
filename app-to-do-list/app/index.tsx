import { Text, View, ScrollView, Alert } from "react-native";
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

  function getFilteredList(){
    switch(selectedTabName){
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "done":
        return todoList.filter((todo) => todo.isCompleted)
    }
  }

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

  function deleteTodo(todoToDelete){
    Alert.alert("Suppression", "Supprimer cette tâche ?", [
      {
        text: "Supprimer",
        style: "destructive",
        onPress: ()=>{
          setTodoList(todoList.filter((todo) => todo.id !==todoToDelete.id))
        },
      },
      {
        text: "Annuler",
        style: "cancel"
      }
    ])
  }

  function renderTodoList(){
    return getFilteredList().map((todo)=>(
    <View style={s.cardItem} key={todo.id}>
      <CardToDo onPress={updateTodo} onLongPress={deleteTodo} todo={todo}/>
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
      <TabBottomMenu 
        todoList={todoList}
        selectedTabName={selectedTabName} 
        onPress={setSelectedTabName}
      />
    </>
  );
}
