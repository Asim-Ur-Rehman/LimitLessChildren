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
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Input} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect, useDispatch} from 'react-redux';
import {userLogin} from '../../redux/actions';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
// import { ButtonView } from '../../components';
import {ToastMessage} from '../../components/ToastMessage/ToastMessage';
import {
  SignInAction,
  OtpVerifyAction,
  ForgotPasswordAction,
} from '../../stores/actions/user.action';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CountDown from 'react-native-countdown-component';
function Otp({route}) {
  const [hidePass, setHidePass] = useState(true);
  const [buttonClick, setButtonClicked] = useState(false);
  const inputRef = useRef('codeInputRef2');
  const [counter, setCounter] = useState(120);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const emailFromParam = route?.params?.emailFromParam;
  console.log('emailFromParam', emailFromParam);
  const _timer = () => {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          // flexDirection: 'row',
          // justifyContent: 'space-between'
        }}>
        {buttonClick ? null : (
          <>
            <Text style={styles.otpTimeText}>OTP will expire in</Text>
            <CountDown
              until={counter}
              onFinish={() => setButtonClicked(!buttonClick)}
              digitStyle={{backgroundColor: 'transparent'}}
              digitTxtStyle={[styles.otpTimeText, {fontSize: 19}]}
              timeToShow={['M', 'S']}
              timeLabels={false}
              showSeparator
              separatorStyle={[styles.otpTimeText, {fontSize: 19}]}
              size={10}
            />
          </>
        )}
      </View>
    );
  };

  const VerifyOtp = code => {
    console.log('code ===', code);
    let data = {
      otp: parseInt(code),
      email: emailFromParam,
    };
    dispatch(OtpVerifyAction(data, navigation));
    // navigation.navigate('ResetPassword');
  };
  const _resendOtp = async () => {
    // console.log('Resend Click');
    setCounter(120);
    setButtonClicked(false);

    let data = {
      email: emailFromParam,
    };
    console.log('data', data);
    dispatch(ForgotPasswordAction(data, navigation));
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
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 25,
              }}>
              <Text style={styles.mainText}>Enter 4 digit code here</Text>
              <OTPInputView
                style={{width: '70%', height: 100}}
                pinCount={4}
                autoFocusOnLoad
                onCodeFilled={code => VerifyOtp(code)}
                codeInputHighlightStyle={{borderColor: '#F5882B'}}
                codeInputFieldStyle={styles.OtpInputStyle}
                ref={inputRef}
                keyboardType="number-pad"
              />
              {_timer()}
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => {
              //   navigation.navigate('ForgotPassword');
              // }}
            ></TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              disabled={!buttonClick}
              onPress={() => {
                _resendOtp();
              }}
              style={styles.btn}>
              <Text style={{color: '#ffffff', fontFamily: 'Poppins-Bold'}}>
                Resent
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
}

export default Otp;

const styles = StyleSheet.create({
  input: {
    height: 56,
    margin: 12,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingLeft: '8%',
    fontWeight: 'bold',
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

  otpTimeText: {
    color: 'black',
    fontSize: 16,
    // fontFamily: 'Roboto-Medium'
  },
  OtpInputStyle: {
    height: 50,
    width: 50,
    fontSize: 15,
    color: '#474747',
    // fontFamily: 'LemonMilk-Medium',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  mainText: {
    fontSize: 20,
  },
});
