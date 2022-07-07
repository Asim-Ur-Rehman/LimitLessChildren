import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Switch} from 'react-native-elements';
import {userLogout} from './redux/actions';
import {bindActionCreators} from 'redux';
import {connect, useDispatch} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import {ThemeProvider} from '@react-navigation/native';
import {LogOutAction} from './stores/actions/user.action';

function CustomDrawer({navigation, userLogout, state, route}) {
  const [toggle, setToggle] = useState();
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(LogOutAction());
  };
  useEffect(() => {
    getFocused();
  }, [state?.index]);

  const getFocused = () => {
    state?.routes?.map((route, index) => {
      const isFocused = state?.index === index;
      if (isFocused) {
        setToggle(route?.name);
      }
    });
  };
  // console.log('toggle', toggle)
  const menuData = [
    {
      title: 'About App',
      navigateTo: 'About',
      image: require('./assets/sidemenu-ab-disable.png'),
      image1: require('./assets/sidemenu-ab-active.png'),
    },
    {
      title: 'My Profile',
      navigateTo: 'profile',
      image: require('./assets/sidemenu-profile-disable.png'),
      image1: require('./assets/04-sidemenu-profile-active.png'),
    },
    {
      title: 'Share App',
      image: require('./assets/share-disable.png'),
      image1: require('./assets/share-active.png'),
    },
    {
      title: 'Settings',
      navigateTo: 'Setting',
      image: require('./assets/sidemenu-setings-disable.png'),
      image1: require('./assets/sidemenu-setings-active.png'),
    },
    {
      title: 'Help',
      navigateTo: 'Help',
      image: require('./assets/sidemenu-help-disable.png'),
      image1: require('./assets/04-sidemenu-help-active.png'),
    },
    {
      title: 'Logout',
      navigateTo: 'Login',
      image: require('./assets/sidemenu-logout-disable.png'),
      image1: require('./assets/sidemenu-logout-active.png'),
    },
  ];

  return (
    <View>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('./assets/sidemenu.png')}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            activeOpacity={0.8}
            style={styles.rowCross}>
            <Image
              style={styles.croos}
              source={require('./assets/sidemenuCross.png')}
            />
          </TouchableOpacity>
          <View style={{paddingTop: '14%'}}>
            <Text style={styles.menu}>MENU</Text>
            {menuData.map((item, i) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (i === 5) {
                      LogOut();
                    } else {
                      item.navigateTo && navigation.navigate(item.navigateTo);
                    }
                  }}
                  style={styles.menuContainer}>
                  {item?.navigateTo == toggle ? (
                    <Image style={styles.imageLogo} source={item.image1} />
                  ) : (
                    <Image style={styles.imageLogo} source={item.image} />
                  )}

                  <Text
                    style={
                      item?.navigateTo == toggle
                        ? styles.logoText1
                        : styles.logoText
                    }>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: '16%',
    paddingVertical: 22,
    fontFamily: 'Poppins-Medium',
  },
  menuContainer: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '16%',
  },
  imageLogo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  logoText: {
    paddingLeft: 15,
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
  },
  croos: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  rowCross: {
    paddingTop: '11%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: 20,
    //backgroundColor:"red",
    padding: 10,
    //height:100
    //flex:1
  },
  logoText1: {
    paddingLeft: 15,
    fontSize: 20,
    color: '#699494',
    fontFamily: 'Poppins-Bold',
  },
});

// const mapStateToProps = state => {
//   return {userInfo: state?.userInfo};
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({userLogout}, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
export default CustomDrawer;
