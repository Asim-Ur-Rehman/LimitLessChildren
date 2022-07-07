import {
  Text,
  View,
  StyleSheet,
  Image,
  // TouchableOpacity ,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../../redux/actions';
import Icon from 'react-native-vector-icons/Feather';
// import { ButtonView } from '../../components';
import {HelpCard} from '../../components/HelpCard/HelpCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
function Help({navigation, userInfo, userLogin}) {
  const [hidePass, setHidePass] = useState(true);
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'#f8b293'}
      />
      <View style={styles.container}>
        <View style={{width: '100%', height: '43%'}}>
          <View style={styles.back}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.9}>
              <Image
                style={styles.backImg}
                source={require('../../assets/backIcon.png')}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.helpPng}
            source={require('../../assets/help-title-img.png')}
          />
        </View>
        <ScrollView style={{height: 500}} showsVerticalScrollIndicator={false}>
          <View style={styles.row}>
            <Text style={styles.helpText}>Help</Text>
            <Text style={styles.tell}>Tell us how we can help</Text>
            <View style={{paddingVertical: 20}}>
              <Text style={styles.lorem}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Text>
              <Text style={styles.lorem}>
                edit, sed do eiusmod tempor incidiunt ul labore
              </Text>
            </View>
            <HelpCard
              onPress={() => navigation.navigate('FAQS')}
              image={require('../../assets/help-icon.png')}
            />
            <HelpCard
              title="Contact us"
              decription="+1234 5678 987"
              image={require('../../assets/help-call-icon.png')}
            />
            <HelpCard
              title="Check Connection"
              decription="info@limitlesschildren.com"
              image={require('../../assets/help-email-icon.png')}
            />
          </View>
        </ScrollView>
        <View style={{height: '-32%', backgroundColor: 'yellow'}}></View>
      </View>
    </>
  );
}

// const mapStateToProps = state => {
//     return { userInfo: state?.userInfo };
// };

// const mapDispatchToProps = dispatch =>
//     bindActionCreators({ userLogin }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Help);
export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  helpPng: {
    // width: "100%",
    // height: "38%",
    // width: "100%",
    // height: 350,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  row: {
    flex: 1,
    alignItems: 'center',
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  lorem: {
    color: '#4d585b',
    lineHeight: 22,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  helpText: {
    color: '#4d585b',
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 10,
    fontFamily: 'Poppins-Bold',
  },
  backImg: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  back: {
    position: 'absolute',
    zIndex: 30,
    top: '18%',
    left: '6%',
  },
  tell: {
    color: '#4d585b',
    fontFamily: 'Poppins-Regular',
  },
});
