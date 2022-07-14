import React, { Component, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform
} from 'react-native'
import { Input, Button, CheckBox } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { userLogout } from '../redux/actions'
import { CardView } from '../../components'
import { color } from 'react-native-reanimated'

function DetailScreen({ navigation, route }) {
  const vedioData = route?.params?.vedioData
  console.log('vedioData in detail', vedioData)
  const [reason, setReason] = useState([
    { title: 'Snail Riding', image: require('../../assets/home01.png') },
    { title: 'Friend, Me & Bus', image: require('../../assets/home02.png') },
    { title: 'Fantasy', image: require('../../assets/home03.png') },
    { title: 'Snail Riding', image: require('../../assets/home01.png') },
    { title: 'Snail Riding', image: require('../../assets/home02.png') },
    { title: 'Snail Riding', image: require('../../assets/home03.png') }
  ])
  const [data, setData] = useState()

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'#f8b293'}
      />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            // navigation.navigate('VideoPlayer', {
            //   vedioData: item
            // })

            navigation.navigate('VideoPlayer')
          }
          activeOpacity={0.9}
          style={{ width: '100%', height: '40%' }}>
          <View
            style={{
              position: 'absolute',
              zIndex: 30,
              top: '12%',
              flexDirection: 'row',
              left: '5%'
            }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.goBack()}>
              <Image
                style={styles.backImg}
                source={require('../../assets/backIcon.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.backImg1}
              source={require('../../assets/3-dots.png')}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              zIndex: 30,
              top: '35%',
              // left: "10%",
              flexDirection: 'row',
              alignSelf: 'center'
            }}>
            <Image
              style={styles.playIcon}
              source={require('../../assets/storydetail-play-icon.png')}
            />
          </View>
          <Image
            style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
            source={require('../../assets/storydetailTitle.png')}
          />
        </TouchableOpacity>
        <View style={{ paddingVertical: 10 }}>
          <View style={styles.row}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#4d585b', fontFamily: 'Poppins-Bold' }}>
                Friends, Me & Bus
              </Text>
              <View style={styles.btn}>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#ffffff',
                    fontWeight: 'bold'
                  }}>
                  New
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 6 }}>
              <Image
                style={styles.addPng}
                source={require('../../assets/addLogo.png')}
              />
              <Text style={styles.listText}>Add to list</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <Image
              style={{ width: 18, height: 18, resizeMode: 'contain' }}
              source={require('../../assets/eye-icon.png')}
            />
            <Text style={styles.view}>2456 View</Text>
            <View
              style={{
                width: 1,
                height: '80%',
                backgroundColor: '#4d585b',
                marginHorizontal: 10
              }}></View>
            <Text>04:30</Text>
          </View>
        </View>
        <Text style={styles.dec}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Text>
        <View style={styles.border}></View>
        <View>
          <Text style={styles.storiesText}>RELATED STORIES</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: '90%' }}>
            {reason.map(() => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <CardView imageStyle={styles.img} />
                  <CardView />
                </View>
              )
            })}
          </ScrollView>
          <View
            style={{ height: Platform.OS === 'ios' ? '78%' : '50%' }}></View>
        </View>
      </View>
    </>
  )
}

// const mapStateToProps = state => {
//     return { userInfo: state?.userInfo };
// };

// export default connect(mapStateToProps)(DetailScreen);

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  playIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addPng: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginRight: 8
  },
  btn: {
    backgroundColor: '#bfcfc7',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 30,
    marginHorizontal: 10
  },
  dec: {
    paddingHorizontal: 20,
    lineHeight: 20,
    paddingVertical: 10,
    fontSize: 13
  },
  border: {
    backgroundColor: '#efeeef',
    width: '90%',
    height: 2,
    alignSelf: 'center'
  },
  storiesText: {
    paddingLeft: 20,
    paddingVertical: 10,
    color: '#4d585b',
    fontWeight: 'bold'
  },
  row1: {
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  view: {
    paddingHorizontal: 10,
    color: '#4d585b'
  },
  listText: {
    color: '#f8b293',
    fontSize: 12,
    fontWeight: 'bold'
  },
  backImg: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  },
  backImg1: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginLeft: '82%',
    marginTop: '2%'
  }
})
