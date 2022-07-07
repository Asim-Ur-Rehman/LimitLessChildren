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
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect, useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {ToastMessage} from '../../components/ToastMessage/ToastMessage';
// import { ButtonView } from '../../components';
import {SignUpAction} from '../../stores/actions/user.action';
import {Patch, Post} from '../../utils/apicalls/apicalls';
import Entypo from 'react-native-vector-icons/Entypo';
function SignUp({navigation}) {
  const dispatch = useDispatch();
  const [eye, setEye] = useState(false);
  const [eye1, setEye1] = useState(false);
  const isLoading = useSelector(state => state.userReducer.isLoading);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const SignUpFunc = async () => {
    let value =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      );
    // console.log('value value', value);
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      ToastMessage('Please fill all fields', null, 'error');
    } else if (!value) {
      ToastMessage('Please enter a valid email address', null, 'info');
    } else if (password.length < 9) {
      ToastMessage(
        'Password should be  greater then 8 characters',
        null,
        'info',
      );
    } else if (password !== confirmPassword) {
      ToastMessage('confirm Password does not match', null, 'info');
    } else {
      let data = {
        name: firstName + ' ' + lastName,
        email: email,
        password: password,
      };
      console.log('data', data);

      dispatch(SignUpAction(data, navigation));

      // ToastMessage('done he ', null, 'success');
    }

    // alert('start now');
    // const res = await Patch(
    //   'https://limitless-children-backend.herokuapp.com/v1/user',
    //   {
    //     name: 'Mustafa Jawed',
    //   },
    // );
    // console.log({res});
  };
  return (
    <KeyboardAvoidingView style={styles.MainContainer}>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('../../assets/loginbg.jpg')}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{height: '20%', marginTop: '20%', marginBottom: '10%'}}>
              <Image
                style={styles.logoImage}
                source={require('../../assets/login-logo.png')}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#a7b0b6"
              onChangeText={text => setFirstName(text)}
              value={firstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#a7b0b6"
              onChangeText={text => setLastName(text)}
              value={lastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email Id"
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
                value={confirmPassword}
              />
              <TouchableOpacity onPress={() => setEye1(!eye1)}>
                <Entypo
                  name={eye1 == false ? 'eye' : 'eye-with-line'}
                  style={styles.passwordIcon}
                />
              </TouchableOpacity>
            </View>
            {/* <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#a7b0b6"
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#a7b0b6"
              onChangeText={text => setConfirmPassword(text)}
              value={confirmPassword}
            /> */}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                // alert('done');
                SignUpFunc();
                // navigation.navigate('MainDrawer')
              }}
              style={styles.btn}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={{color: '#ffffff', fontFamily: 'Poppins-Bold'}}>
                  SIGNUP
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
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.accountText}>
                Don't have an account?{' '}
                <Text style={{color: '#699494', fontFamily: 'Poppins-Bold'}}>
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
            <View style={{paddingBottom: '50%'}}></View>
          </ScrollView>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

// const mapStateToProps = state => {
//   return {userInfo: state?.userInfo};
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({userLogin}, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default SignUp;
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
    fontWeight: 'bold',
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
    width: '75%',
    height: '75%',
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: '10%',
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
    // padding: 10,
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
