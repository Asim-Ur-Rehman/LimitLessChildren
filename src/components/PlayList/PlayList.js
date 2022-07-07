import React from "react";
import { TouchableOpacity, StyleSheet, View, Platform,Image,Text } from "react-native";

export default function PlayList ({
    title="Snail Riding",
    description="Rhymes Collection",
    color="#fff",
    image= require('../../assets/home01.png'),
    play=require('../../assets/playbtn-big.png'),
    time="02:38",
    fav=''
}){
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row"}}>
            <Image style={styles.playIcon} source={play} />
             <Image style={styles.moviepng} source={image} />
             <View style={{paddingLeft:15}}>
             <Text style={styles.title}>{title}</Text>
             <Text style={styles.description}>{description}</Text>
             <Text style={{color:"#4e595c",fontSize:12}}>{time}</Text>
             </View>
             </View>
             <Image style={styles.playIcon1} source={fav} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical:5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    moviepng: {
        height:70,
        width:80,
        borderRadius:12,
        marginVertical: 8
    },
    title:{
        color:"#4d585b",
        fontWeight:"bold",
        paddingTop:8
    },
    description:{
        color:"#4e595c",
        fontSize:12,
        paddingBottom:10,
        paddingTop:6
    },
    playIcon:{
        width:"30%",
        height:"30%",
        position:"absolute",
        zIndex:30,
        top:"50%",
        resizeMode:"contain",
        alignSelf:"center",
        left:"14%"
    },
    playIcon1:{
        width:30,
        height:30,
        resizeMode:"contain"
    }
})