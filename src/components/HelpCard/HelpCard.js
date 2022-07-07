import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

export const HelpCard = ({
    onPress = () => { },
    image = "",
    title = "FAQ",
    decription = "Lorem ipsum dolor sit amet"
}) => {

    return (

        <TouchableOpacity 
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.btn}>
            <Image style={styles.helpIcon} source={image} />
            <View style={{paddingLeft:10}}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.decription}>{decription}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    helpIcon:{
        width:50,
        height:50,
        resizeMode:"contain",
        marginRight:10
    },
    btn:{
        backgroundColor:"#efeeef",
        flexDirection:"row",
        width:310,
        height:70,
        alignItems:"center",
        paddingHorizontal:10,
        borderRadius:12,
        marginVertical:10,
        
    },
    titleText:{
        color:"#4d585b",
        fontWeight:"bold",
        fontFamily:"Poppins-Bold",
    },
    decription:{
        color:"#4d585b",
        fontFamily:"Poppins-Regular",
    }
})