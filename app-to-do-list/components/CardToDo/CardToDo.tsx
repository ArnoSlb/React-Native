import { TouchableOpacity, Text, Image } from "react-native"

import { s } from "../../components/CardToDo/CardToDo.style";

import check from "../../assets/images/check.png";

export function CardToDo({ todo }){
    return(
        <TouchableOpacity style={s.card}>
            <Text style={[s.txt,  todo.isCompleted && {textDecorationLine: "line-through"}]}>{todo.title}</Text>
            {todo.isCompleted && <Image style={s.img} source={check} ></Image> }
        </TouchableOpacity>
    )
}