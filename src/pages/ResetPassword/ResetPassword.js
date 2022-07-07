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
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

import {connect, useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';
// import { ButtonView } from '../../components';
import {ToastMessage} from '../../components/ToastMessage/ToastMessage';
import {
  SignInAction,
  ResetPasswordAction,
} from '../../stores/actions/user.action';
import Entypo from 'react-native-vector-icons/Entypo';
function ResetPassword({route}) {
  const resetData = route?.params?.resetData;
  // console.log('resetData', resetData);
  const [eye, setEye] = useState(false);
  const [eye1, setEye1] = useState(false);
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.userReducer.isLoading);
  const ConfirmPassFunc = async () => {
    if (!password || !ConfirmPassword) {
      ToastMessage('Please fill all the fields', null, 'error');
    } else if (password.length < 9) {
      ToastMessage(
        'Password should be  greater then 8 characters',
        null,
        'info',
      );
    } else if (password !== ConfirmPassword) {
      ToastMessage('confirm Password does not match', null, 'info');
    } else {
      //   alert('done');
      // navigation.navigate('Login');
      let data = {
        _id: resetData?._id,
        resetToken: resetData?.resetToken,
        password: password,
      };
      dispatch(ResetPasswordAction(data, navigation));
    }
  };
  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor={'transparent'}/> */}
      <KeyboardAvoidingView style={styles.MainContainer}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('../../assets/loginbg.jpg')}>
          <View style={styles.container}>
            <View style={{height: '20%'}}>
              <Image
                style={styles.logoImage}
                source={require('../../assets/login-logo.png')}
              />
            </View>

            <View style={styles.passwordView}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#a7b0b6"
                keyboardType="default"
                secureTextEntry={eye == false ? false : true}
                style={styles.inputPassword}
                onChangeText={text => setPassword(text)}
                value={password}
              />
              <TouchableOpacity onPress={() => setEye(!eye)}>
                <Entypo
                  name={eye == false ? 'eye' : 'eye-with-line'}
                  style={styles.passwordIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.passwordView}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#a7b0b6"
                keyboardType="default"
                secureTextEntry={eye1 == false ? false : true}
                style={styles.inputPassword}
                onChangeText={text => setConfirmPassword(text)}
                value={ConfirmPassword}
              />
              <TouchableOpacity onPress={() => setEye1(!eye1)}>
                <Entypo
                  name={eye1 == false ? 'eye' : 'eye-with-line'}
                  style={styles.passwordIcon}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              // onPress={() => navigation.navigate('MainDrawer')}
              onPress={() => {
                ConfirmPassFunc();
              }}
              style={styles.btn}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={{color: '#ffffff', fontFamily: 'Poppins-Bold'}}>
                  DONE
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
}

export default ResetPassword;

const styles = StyleSheet.create({
  input: {
    height: 56,
    margin: 12,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingLeft: '8%',
    // fontWeight: 'bold',
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: '#e6aea1',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 14,
    marginVertical: 20,
  },
  forgot: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#699494',
    fontFamily: 'Poppins-Bold',
  },
  orLoginText: {
    color: '#4d585b',
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: 'Poppins-Medium',
  },
  accountText: {
    textAlign: 'center',
    color: '#4d585b',
    paddingVertical: 10,
    fontWeight: 'bold',
    marginTop: 15,
    fontFamily: 'Poppins-Bold',
  },
  logoImage: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logoImageFG: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  logoRow: {
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  inputPassword: {
    backgroundColor: '#ffffff',

    // fontWeight: 'bold',
    width: '80%',
    color: 'black',
  },
  passwordView: {
    flexDirection: 'row',

    backgroundColor: '#ffffff',
    alignSelf: 'center',
    alignItems: 'center',
    width: '93%',
    height: 56,
    borderRadius: 30,
    paddingLeft: '8%',

    backgroundColor: '#ffffff',
    borderRadius: 30,
    margin: 12,
  },

  passwordTextInput: {
    color: 'white',
    width: '90%',
    height: 40,
  },

  passwordIcon: {
    // alignItems: 'flex-end',
    // height: 25,
    color: '#a7b0b6',
    fontSize: 20,
    // width: 50,
  },
});
