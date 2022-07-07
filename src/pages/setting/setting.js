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
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../../redux/actions';
import Icon from 'react-native-vector-icons/Feather';
import Slider from 'react-native-slider';
import ToggleSwich from '../../components/ToggleSwich/ToggleSwich';
function Setting({navigation, userInfo, userLogin}) {
  const [hidePass, setHidePass] = useState(true);
  const [untilToday, setUntilToday] = useState();
  const [state, setState] = useState({
    value: 0.2,
  });
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'#f8b293'}
      />
      <View style={styles.container}>
        <View style={{width: '100%', height: '33%'}}>
          <View
            style={{
              position: 'absolute',
              zIndex: 30,
              top: '18%',
              left: '5%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.goBack()}>
              <Image
                style={styles.back}
                source={require('../../assets/backIcon.png')}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.platText}>SETTINGS</Text>
            </View>
          </View>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            source={require('../../assets/settingsTitle.png')}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.row}>
            <Text style={styles.text}>Pause Stop/Timer</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ToggleSwich
                selectionMode={1}
                onSelectSwitch={e => {
                  setUntilToday(e);
                }}
              />
              <View style={styles.btn}>
                <Text style={{color: '#fff'}}>60 Min</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#efeeef',
              width: '92%',
              height: 1,
              alignSelf: 'center',
            }}></View>
          <View style={styles.row}>
            <Text style={styles.text}>Voice</Text>
            <View style={styles.dropDown}>
              <Text style={{color: '#bfcfc7', fontWeight: 'bold'}}>
                Girl/Boy
              </Text>
              <Image
                style={styles.back1}
                source={require('../../assets/drop-down.png')}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#efeeef',
              width: '92%',
              height: 1,
              alignSelf: 'center',
            }}></View>
          <View style={styles.row}>
            <Text style={styles.text}>Idle Mode</Text>
            <ToggleSwich
              selectionMode={1}
              onSelectSwitch={e => {
                setUntilToday(e);
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#efeeef',
              width: '92%',
              height: 1,
              alignSelf: 'center',
            }}></View>
          <View style={styles.row}>
            <Text style={styles.text}>Sound</Text>
            <ToggleSwich
              selectionMode={1}
              onSelectSwitch={e => {
                setUntilToday(e);
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#efeeef',
              width: '92%',
              height: 1,
              alignSelf: 'center',
            }}></View>
          <View style={styles.row}>
            <Text style={styles.text}>Text</Text>
            <View style={styles.textSize}>
              <Text style={{color: '#a7b0b6', fontSize: 13}}>A</Text>
              <Slider
                style={{width: '75%'}}
                thumbStyle={{
                  width: '10%',
                  height: '30%',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}
                minimumTrackTintColor={'#a7b0b6'}
                maximumTrackTintColor={'#a7b0b6'}
                thumbTintColor={'#f8b293'}
                trackStyle={{height: 3}}
                thumbTouchSize={{width: 10, height: 10}}
                value={state.value}
                onValueChange={e => setState({e})}
              />
              <Text style={{color: '#a7b0b6', fontSize: 16}}>A</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#efeeef',
              width: '92%',
              height: 1,
              alignSelf: 'center',
            }}></View>
          <View style={styles.row}>
            <Text style={styles.text}>Background Music</Text>
            <ToggleSwich
              selectionMode={1}
              onSelectSwitch={e => {
                setUntilToday(e);
              }}
            />
          </View>
          <View style={styles.footer}>
            <Text>Version 5.4.8</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

// const mapStateToProps = state => {
//   return { userInfo: state?.userInfo };
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ userLogin }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Setting);

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  platText: {
    color: '#ffffff',
    fontSize: 16,
    paddingLeft: 15,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 1.5,
  },
  back: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#bfcfc7',
    paddingHorizontal: 11,
    paddingVertical: 4,
    borderRadius: 30,
    marginLeft: 14,
  },
  dropDown: {
    flexDirection: 'row',
    borderColor: '#efeeef',
    borderWidth: 2,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 30,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  back1: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    tintColor: '#f8b293',
    marginTop: 4,
    marginHorizontal: 4,
  },
  text: {
    color: '#4d585b',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '12%',
  },
  textSize: {
    flexDirection: 'row',
    backgroundColor: '#efeeef',
    width: '45%',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
