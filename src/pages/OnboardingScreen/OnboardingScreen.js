import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StatusBar,
  Dimensions,
  FlatList
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Input } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect, useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'
// import { ButtonView } from '../../components';
import {
  SkipOnboardingAction,
  isOnboarding_Show
} from '../../stores/actions/user.action'

function OnboardingScreen({ navigation, userInfo, userLogin }) {
  const [hidePass, setHidePass] = useState(true)
  // const showOnboarding = useSelector(state => state.userReducer.showOnboarding);
  // console.log('showOnboarding', showOnboarding);
  const onViewRef = React.useRef(({ viewableItems }) => {
    console.log('viewableItems', viewableItems)
    let currentIndex = viewableItems[0].index
    setCurrentIndex(currentIndex)
    // Use viewable items in state or as intended
  })
  const dispatch = useDispatch()
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
  const [currentIndex, setCurrentIndex] = useState()
  const [reason, setReason] = useState([
    {
      title: 'Imagination',
      image: require('../../assets/home-illustration-2.png')
    },
    {
      title: 'Manifestation',
      image: require('../../assets/sleep.png')
    },
    {
      title: 'Development',
      image: require('../../assets/mindful.png')
    },
    {
      title: 'Mind Empowerment',
      image: require('../../assets/flower.png')
    },
    {
      title: 'Dream Stories',
      image: require('../../assets/homeIllustration-1.png')
    }
  ])

  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height

  // const SkipOnboarding = () => {
  //   navigation.navigate('Login');
  //   dispatch(SkipOnboardingAction(true));
  // };

  return (
    <KeyboardAvoidingView style={styles.MainContainer}>
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            zIndex: 30,
            alignSelf: 'center',
            top: '25%'
          }}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/login-logo.png')}
          />
        </View>
        <Image
          style={{ height: '100%', width: '100%', resizeMode: 'stretch' }}
          source={require('../../assets/loginbg.jpg')}
        />
      </View>
      <View style={{ backgroundColor: '#ffffff', height: '45%' }}>
        <FlatList
          showsVerticalScrollIndicator="none"
          data={reason}
          keyExtractor={(item, index) => index}
          horizontal={true}
          pagingEnabled={true}
          // snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          // pagingEnabled
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  backgroundColor: '#ffffff',
                  paddingVertical: 5,
                  justifyContent: 'flex-end'
                }}>
                <Image
                  style={{
                    width: Dimensions.get('window').width,
                    height: Platform.OS == 'ios' ? 150 : 160,
                    resizeMode: 'contain',
                    marginHorizontal: 1,
                    marginBottom: 20,
                    marginVertical: 10
                  }}
                  source={item.image}
                />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            )
          }}></FlatList>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              lineHeight: 18,
              paddingHorizontal: '15%',
              color: '#4d585b',
              paddingBottom: 4
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. esse
            pariatur.
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {reason.map((val, index) => {
              if (index == currentIndex) {
                return (
                  <View
                    key={index}
                    style={{
                      width: 8,
                      height: 8,
                      backgroundColor: '#f8b293',
                      borderRadius: 10,
                      zIndex: 20,
                      margin: 4
                    }}
                  />
                )
              } else {
                return (
                  <View
                    key={index}
                    style={{
                      width: 8,
                      height: 8,
                      backgroundColor: '#c4c4c4',
                      borderRadius: 10,
                      zIndex: 20,
                      margin: 4
                    }}
                  />
                )
              }
            })}
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login')
          dispatch(isOnboarding_Show(true))
        }}
        activeOpacity={0.9}
        style={{
          alignItems: 'center',
          height: '15%',
          backgroundColor: '#ffffff',
          justifyContent: 'flex-end',
          paddingBottom: 20
        }}>
        <Text
          style={{
            color: '#a7b0b6',
            fontSize: 18,
            fontFamily: 'Poppins-Medium'
          }}>
          SKIP
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    height: '40%'
  },
  logoImage: {
    width: 150,
    height: 145,
    resizeMode: 'contain'
  },
  title: {
    textAlign: 'center',
    paddingVertical: 0,
    color: '#4d585b',
    fontFamily: 'Poppins-Medium',
    fontSize: 24
  }
})
