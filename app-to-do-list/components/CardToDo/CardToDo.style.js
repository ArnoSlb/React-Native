import { StyleSheet } from "react-native-web";

const s = StyleSheet.create({
    card:{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        height: 100,
        borderRadius: 13,
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
        borderColor: "black",
        borderWidth: 1,
    },
    txt: {
        fontSize: 25,
    },
    img: {
        height: 25,
        width: 25,
    },
});

export { s };