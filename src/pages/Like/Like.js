import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';
import PlayList from '../../components/PlayList/PlayList';



export default function Like({ navigation }) {
    const[reason,setReason ] = useState ([
        {},
        {
            image:require("../../assets/home02.png"),
            title:"Friends Me & Bus",
            description:"Child Collection"
        },
        {
            image:require("../../assets/home03.png"),
            description:"Sleep Collection"
         
        },
        {
            image:require("../../assets/home01.png"),
            title:"Friends Me & Bus",
            description:"Fantasy Collection"
        },
        {
            image:require("../../assets/home02.png"),
        
        },
        {
            image:require("../../assets/home03.png"),
            title:"Friends Me & Bus",
            description:"Child Collection"
        },
        {
            image:require("../../assets/home02.png"),
            title:"Friends Me & Bus",
            description:"Sleep Collection"
        },
        {
            image:require("../../assets/home03.png"),
            description:"Fantasy Collection"
         
        },
        {
            image:require("../../assets/home01.png"),
            title:"Friends Me & Bus",
            description:"Child Collection"
        },
        {
            image:require("../../assets/home02.png"),
            description:"Sleep Collection"
        
        },
        {
            image:require("../../assets/home03.png"),
            title:"Friends Me & Bus",
            description:"Fantasy Collection"
        },
    ])
    return (
        <View style={styles.container}>
            <View>
            <FlatList
                  data={reason}
                  keyExtractor={(item, index) => index}
                  showsVerticalScrollIndicator={false} 
                  vertical={true}
                  renderItem={({item}) => {
                      return(
                          <View>
                              <PlayList 
                              image={item.image}
                              title={item.title}
                              description={item.description}
                              />
                          </View>
                      )
                  }}
                  >
                  </FlatList>
                  {/* <View style={{paddingBottom:"60%",backgroundColor:"red"}}></View> */}
            </View>
        </View>
    );
}

// export function TabBDetails() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Tab B Details</Text>
//     </View>
//   );
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 10
    },
})
