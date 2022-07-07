import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Input, Button, Card, SearchBar} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogout} from '../../redux/actions';
import {ListItem} from 'react-native-elements/dist/list/ListItem';

function profile({navigation, state, route}) {
  console.log('NAVIGTION', navigation, 'ROUTE', route, 'STATE', state);
  const [toggle, setToggle] = useState();

  const [click, setClick] = useState('');
  // useEffect(() => {
  //     getFocused()
  // }, [state?.index])
  // const getFocused = () => {
  //     state?.routes?.map((route, index) => {

  //         const isFocused = state.index === index;
  //         if(isFocused) {
  //             setToggle(route?.name)

  //         }
  //     })
  // }

  return (
    <View>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('../../assets/sidemenu.png')}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={styles.rowCross}>
            <Image
              style={styles.croos}
              source={require('../../assets/sidemenuCross.png')}
            />
          </TouchableOpacity>
          <View
            style={{
              marginTop: '24%',
              flexDirection: 'row',
              marginBottom: '8%',
            }}>
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain',
                marginLeft: '14%',
              }}
              source={require('../../assets/user.png')}
            />
            <Text style={styles.profileText}>Oliver Hudson</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('About'), setClick('About');
            }}
            activeOpacity={0.8}
            isRound={0}
            style={styles.row}>
            <Image
              style={styles.imageLogo}
              source={
                click == 'About'
                  ? require('../../assets/sidemenu-ab-active.png')
                  : require('../../assets/sidemenu-ab-disable.png')
              }
            />
            <Text
              style={click == 'About' ? styles.titleTextEN : styles.titleText}>
              About App
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Like'), setClick('Like');
            }}
            activeOpacity={0.8}
            isRound={0}
            style={styles.row}>
            <View
              style={
                click == 'Like'
                  ? {backgroundColor: '#699494', borderRadius: 30, padding: 10}
                  : {backgroundColor: '#ffffff', borderRadius: 30, padding: 10}
              }>
              <Image
                style={click == 'Like' ? styles.imageLogoEN : styles.imageLogo1}
                source={require('../../assets/fav-ative.png')}
              />
            </View>
            <Text
              style={click == 'Like' ? styles.titleTextEN : styles.titleText}>
              Favorites
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}>
            <Image
              style={styles.imageLogo}
              source={require('../../assets/share-disable.png')}
            />
            <Text style={styles.titleText}>Share App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting'), setClick('Setting');
            }}
            activeOpacity={0.8}
            isRound={0}
            style={styles.row}>
            <Image
              style={styles.imageLogo}
              source={
                click == 'Setting'
                  ? require('../../assets/sidemenu-setings-active.png')
                  : require('../../assets/sidemenu-setings-disable.png')
              }
            />
            <Text
              style={
                click == 'Setting' ? styles.titleTextEN : styles.titleText
              }>
              Settings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login'), setClick('Login');
            }}
            style={styles.row}>
            <Image
              style={styles.imageLogo}
              source={
                click == 'Login'
                  ? require('../../assets/sidemenu-logout-active.png')
                  : require('../../assets/sidemenu-logout-disable.png')
              }
            />
            <Text
              style={click == 'Login' ? styles.titleTextEN : styles.titleText}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '16%',
  },
  profileText: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: '6%',
    paddingLeft: '3%',
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 15,
    color: '#ffffff',
  },
  croos: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  rowCross: {
    top: Platform.OS === 'ios' ? '12%' : '8%',
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  // user:{
  //     width:"10%",
  //     height:"10%",
  //     resizeMode:"contain",
  //     marginRight:10,
  // },
  imageLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  row: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '16%',
  },
  imageLogo1: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#699494',
  },
  imageLogoEN: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#ffffff',
  },
  titleTextEN: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 15,
    color: '#699494',
  },
});
// const mapStateToProps = state => {
//     return { userInfo: state?.userInfo };
//   };

//   const mapDispatchToProps = dispatch =>
//     bindActionCreators({ userLogout }, dispatch);

//     export default connect(mapStateToProps, mapDispatchToProps)(profile);

export default profile;
