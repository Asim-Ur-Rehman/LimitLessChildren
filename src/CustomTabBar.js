import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { BlurView } from "@react-native-community/blur";

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <>
        <SafeAreaView style={{flexDirection: 'row', flex: 0, backgroundColor: '#ffffff'}}>
            {/* <BlurView style={styles.blurView}
                blurType="dark"
                blurAmount={15}
            /> */}
            <View style={styles.TabBar}>
                {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
        
                const isFocused = state.index === index;
        
                const onPress = () => {
                    const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                    });
        
                    if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                    }
                };
        
                const onLongPress = () => {
                    navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                    });
                };
                let nestedComponent = null;
                switch (route.name) {
                    case 'Home':
                        nestedComponent = <View style={isFocused ? styles.selectionContainer : styles.notFocusedTab}><Image style={isFocused ? styles.TabIcon : styles.TabIcon1} source={require('./assets/homeicon.png')} /></View>
                        break;
                    case 'Search':
                        nestedComponent = <View style={isFocused ? styles.selectionContainer : styles.notFocusedTab}><Image style={isFocused ? styles.TabIcon : styles.TabIcon1} source={require('./assets/search.png')} /></View>
                        break;
                    case 'List':
                        nestedComponent = <View style={isFocused ? styles.selectionContainer : styles.notFocusedTab}><Image style={isFocused ? styles.TabIcon : styles.TabIcon1} source={require('./assets/playlisticon.png')} /></View>
                        break;
                    case 'Like':
                        nestedComponent = <View style={isFocused ? styles.selectionContainer : styles.notFocusedTab}><Image style={isFocused ? styles.TabIcon : styles.TabIcon1} source={require('./assets/fav-ative.png')} /></View>
                        break;
                    default:
                        break;
                }
                return (
                    <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={isFocused ? styles.focusedTab : styles.notFocusedTab}
                    >
                        {nestedComponent}
                    </TouchableOpacity>
                );
                })}
            </View>
        </SafeAreaView>
        </>
    );
}

export default MyTabBar

const styles = StyleSheet.create({
    TabBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        // top:0
    },
    blurView: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor:"#0e101f70"
    },
    focusedTab: {
        flex: 1,
        marginVertical: 7,
        justifyContent: "center",
        alignItems: "center",
    },
    notFocusedTab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    selectionContainer: {
        width: 50,
        height: 38,
        justifyContent: "center",
        alignItems: "center",
    },
    TabIcon:{
        width:22,
        height:22,
        resizeMode:"contain",
        tintColor:"#f8b293"
    },
    TabIcon1:{
        width:22,
        height:22,
        resizeMode:"contain",
        tintColor:"#a7b0b6"
    }
});