import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Otp from './pages/Otp/Otp';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import search from './pages/search/search';
import profile from './pages/profile/profile';
import list from './pages/list/list';
import NotificationsScreen from './pages/notificationsScreen/notificationScreen';
import HomeScreen from './pages/home/HomeScreen';
import DetailScreen from './pages/home/DetailScreen';
import Setting from './pages/setting/setting';
import About from './pages/About/about';
import Help from './pages/help/help';
import CustomDrawer from './CustomDrawer';
import {connect, useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CustomTabBar from './CustomTabBar';
import Like from './pages/Like/Like';
import FAQS from './pages/FAQS/FAQS';
import {VideoPlayer} from './pages/PlayVideo/PlayVideo';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import OnboardingScreen from './pages/OnboardingScreen/OnboardingScreen';
import Splash from './pages/Splash/Splash';

const useInitialRender = () => {
  const [isInitialRender, setIsInitialRender] = useState(false);

  if (!isInitialRender) {
    setTimeout(() => setIsInitialRender(true), 1);
    return true;
  }
  return false;
};

const Stack =
  Platform.OS === 'ios' ? createStackNavigator() : createStackNavigator();
const Drawer = createDrawerNavigator();
const LoginStackNav = createStackNavigator();
const SplashStackNav = createStackNavigator();

const HomeTabAStackNav = createStackNavigator();
const HomeSearchStackNav = createStackNavigator();
const HomeListStackNav = createStackNavigator();
const HomeTabNav = createBottomTabNavigator();
const HomeLikeStackNav = createStackNavigator();
// const HomeDetailStackNav = createStackNavigator();

const RightArrow = navigation => {
  return (
    <TouchableOpacity
    // onPress={() => navigation.toggleDrawer()}
    >
      <Image
        source={require('./assets/backIcon.png')}
        style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
          marginLeft: 12,
          tintColor: '#f8b293',
        }}
      />
    </TouchableOpacity>
  );
};

const ListItem = navigation => {
  return (
    <TouchableOpacity onPress={() => toggleDrawer(navigation)}>
      <Image
        source={require('./assets/sortIcon.png')}
        style={{
          width: 22,
          height: 22,
          resizeMode: 'contain',
          tintColor: '#f8b293',
          marginRight: 12,
        }}
      />
    </TouchableOpacity>
  );
};

const drawerButton = navigation => {
  const hookNavigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        hookNavigation.toggleDrawer();
      }}>
      <Image
        source={require('./assets/menu-icon.png')}
        style={{width: 20, height: 20, resizeMode: 'contain', marginLeft: 12}}
      />
    </TouchableOpacity>
  );
};
const headerTitle = navigation => {
  return (
    <View>
      <Image
        source={require('./assets/home-top-logo.png')}
        style={{width: 45, height: 45, resizeMode: 'contain'}}
      />
    </View>
  );
};

const notificationIcon = navigation => {
  const hookNavigation = useNavigation();
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => hookNavigation.navigate('Notification')}
        style={{flex: 1}}>
        <Image
          source={require('./assets/notifcation03.png')}
          style={{
            width: 25,
            height: 25,
            resizeMode: 'contain',
            marginRight: 12,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
const profiletionIcon = navigation => {
  return (
    <TouchableOpacity>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{
            width: 13,
            height: 13,
            resizeMode: 'contain',
            marginRight: 14,
          }}
          source={require('./assets/edit03.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

function SplashStack() {
  return (
    <SplashStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      {/* <LoginStackNav.Screen name="Home" component={HomeTab} /> */}
      <SplashStackNav.Screen name="Splash" component={Splash} />
    </SplashStackNav.Navigator>
  );
}

function LoginStack() {
  const showOnboarding = useSelector(state => state.userReducer.showOnboarding);
  console.log('showOnboarding ====nav', showOnboarding);
  return (
    <LoginStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={showOnboarding ? 'Login' : 'OnboardingScreen'}>
      {/* <LoginStackNav.Screen name="Home" component={HomeTab} /> */}
      <LoginStackNav.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
      />

      <LoginStackNav.Screen name="Login" component={Login} />
      <LoginStackNav.Screen name="SignUp" component={SignUp} />
      <LoginStackNav.Screen name="ForgotPassword" component={ForgotPassword} />
      <LoginStackNav.Screen name="Otp" component={Otp} />
      <LoginStackNav.Screen name="ResetPassword" component={ResetPassword} />
    </LoginStackNav.Navigator>
  );
}

function HomeTabAStack({navigation, route}) {
  return (
    <HomeTabAStackNav.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <HomeTabAStackNav.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: () => headerTitle(navigation),
          headerLeft: () => drawerButton(navigation),
          headerRight: () => notificationIcon(navigation),
        })}
      />
      {/* <HomeTabAStackNav.Screen name="DetailScreen" component={DetailScreen} /> */}
    </HomeTabAStackNav.Navigator>
  );
}

function HomeSearchStack() {
  return (
    <HomeSearchStackNav.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#4d585b',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <HomeSearchStackNav.Screen
        name="SEARCH"
        component={search}
        options={({navigation}) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => notificationIcon(navigation),
        })}
      />
      {/* <HomeSearchStackNav.Screen name="TabBDetails" component={TabBDetails} /> */}
    </HomeSearchStackNav.Navigator>
  );
}

function HomeLikeStack() {
  return (
    <HomeLikeStackNav.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#4d585b',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <HomeLikeStackNav.Screen
        name="FAVORITES"
        component={Like}
        options={({navigation}) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => notificationIcon(navigation),
        })}
      />
      {/* <HomeSearchStackNav.Screen name="TabBDetails" component={TabBDetails} /> */}
    </HomeLikeStackNav.Navigator>
  );
}

function HomeListStack() {
  return (
    <HomeListStackNav.Navigator
      initialRouteName="MyList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#4d585b',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <HomeListStackNav.Screen
        name="PLAYLIST"
        component={list}
        options={({navigation}) => ({
          headerLeft: () => RightArrow(navigation),
          headerRight: () => ListItem(navigation),
        })}
      />
      {/* <HomeTabAStackNav.Screen name="VideoPlayer" component={VideoPlayer}
        options={({ navigation }) => ({
          headerShown: false,
        })}

      /> */}
    </HomeListStackNav.Navigator>
  );
}

function HomeTab() {
  return (
    <HomeTabNav.Navigator
      initialRouteName={'Home'}
      tabBar={props => {
        return (
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <CustomTabBar {...props} />
          </View>
        );
      }}>
      <HomeTabNav.Screen name="Home" component={HomeTabAStack} />
      <HomeTabNav.Screen name="Search" component={HomeSearchStack} />
      <HomeTabNav.Screen name="List" component={HomeListStack} />
      <HomeTabNav.Screen name="Like" component={HomeLikeStack} />
    </HomeTabNav.Navigator>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#aeaeae',
        activeBackgroundColor: '#5cbbff',
        itemStyle: {marginVertical: 8, marginHorizontal: 8},
      }}
      initialRouteName="DrawerHome"
      drawerStyle={{
        width: '100%',
        opacity: 1,
        backgroundColor: '#fff',
      }}
      drawerType="front">
      <Drawer.Screen name="DrawerHome" component={HomeTab} />
      <Drawer.Screen name="main" component={LoginStack} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="profile" component={profile} />
      <Drawer.Screen name="FAQS" component={FAQS} />
      <Drawer.Screen name="Home" component={HomeTab} />
      <Drawer.Screen name="Notification" component={NotificationsScreen} />
      <Drawer.Screen name="DetailScreen" component={DetailScreen} />
      <Drawer.Screen name="VideoPlayer" component={VideoPlayer} />
    </Drawer.Navigator>
  );
}

function RootContainer({user}) {
  const users = useSelector(state => state.userReducer.users);
  console.log('users++++++', users);

  return (
    // <Drawer.Navigator
    //   drawerContent={props => <CustomDrawer {...props} />}
    //   drawerContentOptions={{
    //     activeTintColor: '#fff',
    //     inactiveTintColor: '#aeaeae',
    //     itemStyle: { marginVertical: 8, marginHorizontal: 8 },
    //   }}
    //   initialRouteName="main"
    //   drawerStyle={{
    //     width: '100%',
    //     opacity: 1,
    //     backgroundColor: "#fff"
    //   }}
    //   drawerType="front"
    // >
    //   <Drawer.Screen name="main" component={LoginStack} />
    //   <Drawer.Screen name='About' component={About} />
    //   <Drawer.Screen name='Setting' component={Setting} />
    //   <Drawer.Screen name='Help' component={Help} />
    //   <Drawer.Screen name="profile" component={profile} />
    //   <Drawer.Screen name="FAQS" component={FAQS} />
    //   <Drawer.Screen name="Home" component={HomeTab} />
    //   <Drawer.Screen name="Notification" component={NotificationsScreen} />
    //   <Drawer.Screen name="DetailScreen" component={DetailScreen} />
    //   <Drawer.Screen name="VideoPlayer" component={VideoPlayer} />
    // </Drawer.Navigator>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      sdetachInactiveScreens={true}>
      {/* <Stack.Screen name="SplashStack" component={SplashStack} /> */}
      {users !== null ? (
        <Stack.Screen name="MainDrawer" component={MainDrawer} />
      ) : (
        <Stack.Screen name="Login" component={LoginStack} />
      )}
    </Stack.Navigator>
  );
}

// const mapStateToProps = state => {
//   return {user: state?.user};
// };
// export default connect(mapStateToProps)(RootContainer);

export default RootContainer;
