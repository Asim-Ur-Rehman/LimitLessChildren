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
  ActivityIndicator
} from 'react-native'
import React, { useState, useRef } from 'react'
import { Input } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect, useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/actions'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
// import { ButtonView } from '../../components';
import { ToastMessage } from '../../components/ToastMessage/ToastMessage'
import { SignInAction } from '../../stores/actions/user.action'
import { InputField } from '../../components/InputField/InputField'
import { Images } from '../../utils/Images'

function Login() {
  const [eye, setEye] = useState(false)
  const [eyeVisible, setEyeVisible] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.userReducer.isLoading)
  console.log('isLoading', isLoading)
  const SignInFunc = () => {
    if (!email || !password) {
      ToastMessage('Please fill all fields', null, 'error')
    } else {
      let data = {
        email: email,
        password: password
      }
      // console.log('data', data);

      dispatch(SignInAction(data, navigation))

      // ToastMessage('done he ', null, 'success');
    }
  }
  const toggleEye = () => {
    setEye(!eye)
  }
  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor={'transparent'}/> */}
      <KeyboardAvoidingView style={styles.MainContainer}>
        <ImageBackground
          style={{ height: '100%', width: '100%' }}
          source={require('../../assets/loginbg.jpg')}>
          <View style={styles.container}>
            <View style={{ height: '20%' }}>
              <Image
                style={styles.logoImage}
                source={require('../../assets/login-logo.png')}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              placeholderTextColor="#a7b0b6"
              onChangeText={text => setEmail(text)}
              value={email}
            />

            <View style={styles.passwordView}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#a7b0b6"
                keyboardType="default"
                secureTextEntry={eye == false ? false : true}
                style={styles.inputPassword}
                onChangeText={text => setPassword(text)}
                value={password}
                // ref={ref =>
                //   ref && ref.setNativeProps({style: {fontWeight: 'bold'}})
                // }
              />
              <TouchableOpacity onPress={() => toggleEye()}>
                <Entypo
                  name={eye == false ? 'eye' : 'eye-with-line'}
                  style={styles.passwordIcon}
                />
              </TouchableOpacity>
            </View>

            {/* <InputField
              container={styles.inputStyles}
              placeholder={'Password'}
              inputStyle={styles.placeholderstyle}
              placeholderTextColor={'gray'}
              Icon={eyeVisible ? Images.Pictures.Hide : Images.Pictures.eye}
              secureTextEntry={eyeVisible}
              // eye={true}
              // Icon={Images.Pictures.Hide}
              onChange={text => setPassword(text)}
              onPress={() => setEyeVisible(!eyeVisible)}
              value={password}
            /> */}
            <TouchableOpacity
              style={{
                // backgroundColor: 'red',
                width: '40%',
                alignSelf: 'center'
              }}
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('ForgotPassword')
              }}>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              // onPress={() => navigation.navigate('ResetPassword')}
              onPress={() => {
                SignInFunc()
              }}
              style={styles.btn}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={{ color: '#ffffff', fontFamily: 'Poppins-Bold' }}>
                  LOGIN
                </Text>
              )}
            </TouchableOpacity>
            <Text style={styles.orLoginText}>OR LOGIN WITH</Text>
            <View style={styles.logoRow}>
              <Image
                style={styles.logoImageFG}
                source={require('../../assets/loginFb.png')}
              />
              <Image
                style={styles.logoImageFG}
                source={require('../../assets/googleLogo.png')}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.accountText}>
                Don't have an account?{' '}
                <Text style={{ color: '#699494', fontFamily: 'Poppins-Bold' }}>
                  Signup
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  )
}

// const mapStateToProps = state => {
//   return {userInfo: state?.userInfo};
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({userLogin}, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login

const styles = StyleSheet.create({
  input: {
    height: 56,
    margin: 12,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingLeft: '8%',
    // fontWeight: 'bold',
    color: 'black'
    // width: '95%',
  },
  inputPassword: {
    backgroundColor: '#ffffff',
    // fontSize: 15,
    // fontWeight: 'bold',
    width: '80%',
    color: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  btn: {
    backgroundColor: '#e6aea1',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 14,
    marginVertical: 20
  },
  forgot: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#699494',
    fontFamily: 'Poppins-Bold'
  },
  orLoginText: {
    color: '#4d585b',
    textAlign: 'center',
    paddingVertical: 10
  },
  accountText: {
    textAlign: 'center',
    color: '#4d585b',
    paddingVertical: 10,
    fontWeight: 'bold',
    marginTop: 15,
    fontFamily: 'Poppins-Bold'
  },
  logoImage: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  logoImageFG: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginHorizontal: 10
  },
  logoRow: {
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20
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
    margin: 12
  },

  passwordTextInput: {
    color: 'white',
    width: '90%',
    height: 40
  },

  passwordIcon: {
    // alignItems: 'flex-end',
    // height: 25,
    color: '#a7b0b6',
    fontSize: 20
    // width: 50,
  }
})
