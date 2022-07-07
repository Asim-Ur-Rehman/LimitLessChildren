import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';
import { CardView } from '../../components';



export default function search({ navigation }) {
    const [search, setSearch] = useState("");
    return (
        <View style={styles.container}>
            {/* <View style={styles.searchbar}>
                <Text style={styles.serc}>Search</Text>
            </View> */}
            <View>
                <SearchBar
                    platform="ios"
                    placeholder="Search"
                    placeholderTextColor="#000"
                    searchIcon={{ iconStyle: { color: "#000" } }}
                    inputStyle={{ color: "#000", fontSize: 12 }}
                    containerStyle={{ backgroundColor: "#ffffff" }}
                    inputContainerStyle={{
                      shadowColor: "#aeaeae",
                        shadowOffset: {
                            width: 0.5,
                            height: 0.5,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 1.12,
                        elevation: 6
                    }}
                    onChangeText={setSearch}
                    value={search}
                />
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
    searchbar: {
        paddingHorizontal: 8,
        paddingVertical: 25,
    },
    serc: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "600",
    },

})
