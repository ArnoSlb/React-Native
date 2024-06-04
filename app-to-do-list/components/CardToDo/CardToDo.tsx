import { TouchableOpacity, Text, Image } from "react-native"

import { s } from "../../components/CardToDo/CardToDo.style";

import check from "../../assets/images/check.png";

export function CardToDo({ todo, onPress }){

    return(
        <TouchableOpacity style={s.card} onPress={() => {onPress(todo)}}>
            <Text style={[s.txt,  todo.isCompleted && {textDecorationLine: "line-through"}]}>{todo.title}</Text>
            {todo.isCompleted && <Image style={s.img} source={check} ></Image> }
        </TouchableOpacity>
    )
}