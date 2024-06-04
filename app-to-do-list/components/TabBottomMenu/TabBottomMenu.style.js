import { StyleSheet } from "react-native-web";

const s = StyleSheet.create({
    container:{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
            }
});

export { s };