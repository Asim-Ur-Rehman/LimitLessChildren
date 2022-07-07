// @flow
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical:5
    },
    moviepng: {
        height:110,
        width:155,
        borderRadius:18,
        marginVertical: 8,
    },
    title:{
        color:"#4d585b",
        fontWeight:"bold",
        fontFamily:"Poppins-Bold",
    },
    description:{
        color:"#4d585b",
        fontSize:13,
        fontFamily:"Poppins-Regular",
    },
    playIcon:{
        width:"30%",
        height:"30%",
        position:"absolute",
        zIndex:30,
        top:"30%",
        resizeMode:"contain",
        alignSelf:"center"
    }
});
