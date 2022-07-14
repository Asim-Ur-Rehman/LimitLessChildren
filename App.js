import 'react-native-gesture-handler'
import { Platform } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import Splash from './src/pages/Splash/Splash'
import { Provider } from 'react-redux'
import RootContainer from './src/navigators'
import { store } from './src/stores'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

const App = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      Platform.OS == 'android' ? SplashScreen.hide() : setShow(false)
    }, 7000)
  }, [])

  return Platform.OS == 'android' ? (
    <Provider store={store}>
      <NavigationContainer theme={{ ...DefaultTheme, dark: false }}>
        <RootContainer />
        <Toast />
      </NavigationContainer>
    </Provider>
  ) : show ? (
    <Splash />
  ) : (
    <Provider store={store}>
      <NavigationContainer theme={{ ...DefaultTheme, dark: false }}>
        <RootContainer />
        <Toast />
      </NavigationContainer>
    </Provider>
  )
}

export default App
