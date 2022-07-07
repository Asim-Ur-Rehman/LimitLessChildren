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
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../../redux/actions';
import Icon from 'react-native-vector-icons/Feather';
// import { ButtonView } from '../../components';

function About({navigation, userInfo, userLogin}) {
  const [hidePass, setHidePass] = useState(true);

  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'#f8b293'}
      />

      <View>
        <ImageBackground
          style={styles.helpPng}
          source={require('../../assets/abt-title-img.png')}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.9}
            style={styles.back}>
            {/* <View style={styles.back}>  */}
            <Image
              style={styles.backImg}
              source={require('../../assets/backIcon.png')}
            />
            {/* </View> */}
          </TouchableOpacity>
        </ImageBackground>
        <ScrollView style={{height: 500}} showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, flexGrow: 1}}>
            <Text style={styles.about}>About App</Text>
            <Text style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. esse
              pariatur.{' '}
            </Text>
            <Text style={styles.para}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text style={styles.para1}>
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't
              look even slightly believable. If you are going to use a passage
              of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text.{' '}
            </Text>
          </View>
        </ScrollView>
        <View style={{height: 100}}></View>
        <View style={{height: Platform.OS === 'ios' ? '15%' : '40%'}}></View>
      </View>
    </View>
  );
}

// const mapStateToProps = state => {
//   return { userInfo: state?.userInfo };
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ userLogin }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(About);
export default About;

const styles = StyleSheet.create({
  helpPng: {
    width: '100%',
    height: 320,
  },
  backImg: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  back: {
    marginLeft: '8%',
    marginTop: '10%',
  },
  about: {
    paddingVertical: 20,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
    color: '#4d585b',
  },
  para: {
    textAlign: 'center',
    lineHeight: 25,
    paddingHorizontal: '10%',
    paddingVertical: 10,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  para1: {
    textAlign: 'center',
    lineHeight: 25,
    paddingHorizontal: '10%',
    paddingVertical: 10,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#00000080',
  },
});
