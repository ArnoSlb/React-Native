import { Text, View, ScrollView, Alert } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";

import { Header } from "@/components/Header/Header";
import { CardToDo } from "@/components/CardToDo/CardToDo";
import { TabBottomMenu } from "@/components/TabBottomMenu/TabBottomMenu";
import { ButtonAdd } from "@/components/ButtonAdd/ButtonAdd";


import { s } from "./index.style";

export default function Index() {

  const [selectedTabName, setSelectedTabName] = useState("all")
  const [todoList, setTodoList] = useState([]);
  const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
        }
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

  function showAddDialog(){
    setIsAddDialogVisible(true)
  }

  function addTodo(){
    console.log(inputValue)
    const newTodo={
      id: uuid.v4(),
      title: inputValue,
      isCompleted: false,
    }
    setTodoList([...todoList, newTodo]);
    setIsAddDialogVisible(false);
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
          <ButtonAdd onPress={showAddDialog} />
        </SafeAreaView>
      </SafeAreaProvider>
      <TabBottomMenu 
        todoList={todoList}
        selectedTabName={selectedTabName} 
        onPress={setSelectedTabName}
      />
      <Dialog.Container visible={isAddDialogVisible} onBackdropPress={()=>setIsAddDialogVisible(false)}>
        <Dialog.Title>Créer une tache</Dialog.Title>
        <Dialog.Description>Choisi un nom pour la nouvelle tâche</Dialog.Description>
        <Dialog.Input onChangeText={setInputValue}/>
        <Dialog.Button disabled={inputValue.trim().length === 0} label="Creer" onPress={addTodo}/>
      </Dialog.Container>
    </>
  );
}
