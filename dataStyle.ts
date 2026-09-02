import { StyleSheet } from "react-native";

export const dataStyle = StyleSheet.create ({
    headerTxt : {
        color : "#ffffff",
        fontWeight : 'bold',
        fontSize : 30,
        textAlign : "center",
        marginVertical : 5
    },

    card : {
        backgroundColor : "#c8e1ffff",
        borderRadius : 10,
        marginVertical : 5,
        paddingVertical : 5,
        paddingHorizontal : 10,
        flex : 1,
        alignItems : 'center'
    },

    desc : {
        fontStyle : 'italic',
        fontSize : 15
    }
})