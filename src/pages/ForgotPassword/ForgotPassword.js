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
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
// import { ButtonView } from '../../components';
import {ToastMessage} from '../../components/ToastMessage/ToastMessage';
import {ForgotPasswordAction} from '../../stores/actions/user.action';
function ForgotPassword() {
  const isLoading = useSelector(state => state.userReducer.isLoading);

  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const Next = () => {
    let value =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      );
    if (!email) {
      ToastMessage('Please enter email address', null, 'error');
    } else if (!value) {
      ToastMessage('Please enter a valid email address', null, 'info');
    } else {
      let data = {
        email: email,
      };
      console.log('data', data);
      dispatch(ForgotPasswordAction(data, navigation));
      // ToastMessage('done he ', null, 'success');
    }
    // navigation.navigate('Otp');
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
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              placeholderTextColor="#a7b0b6"
              onChangeText={text => setEmail(text)}
              value={email}
            />

            <TouchableOpacity
              activeOpacity={0.9}
              // onPress={() => navigation.navigate('MainDrawer')}
              onPress={() => {
                Next();
              }}
              style={styles.btn}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={{color: '#ffffff', fontFamily: 'Poppins-Bold'}}>
                  NEXT
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
}

export default ForgotPassword;

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
});
