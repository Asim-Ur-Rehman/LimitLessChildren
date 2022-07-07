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

function FAQS({navigation, userInfo, userLogin}) {
  const [hidePass, setHidePass] = useState(true);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'#f8b293'}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.9}>
            <Image
              style={styles.backImg}
              source={require('../../assets/backIcon.png')}
            />
          </TouchableOpacity>
          <Text style={{color: '#4d585b', fontWeight: 'bold', paddingLeft: 14}}>
            FAQS
          </Text>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
            paddingVertical: 20,
          }}></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>
                Is Limitless Children mode for a specific age?
              </Text>
              <View
                style={{
                  width: '7%',
                  height: 6,
                  backgroundColor: '#ffffff',
                  borderRadius: 30,
                  marginTop: '3%',
                  marginLeft: '5%',
                }}></View>
            </View>
            <Text style={styles.decription}>
              Infants and toddlers are better equipped to calm down from
              tantrums, deal with big trnasition, and learn critical
              social-emotional skills by listening to Limitless Moments, Music
              and Stories
            </Text>
          </View>
          <View style={{paddingHorizontal: 20, flex: 1, flexGrow: 1}}>
            <View style={styles.row1}>
              <Text style={styles.rowText}>
                When Should I listen to Limitless?
              </Text>
              <Image
                style={styles.backImg}
                source={require('../../assets/plus.png')}
              />
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>
                Why are there no videos or animations?
              </Text>
              <Image
                style={styles.plus}
                source={require('../../assets/plus.png')}
              />
            </View>
            <View style={styles.row1}>
              <Text style={styles.rowText}>
                Why dont I read the stories or find the Lyrics?
              </Text>
              <Image
                style={styles.backImg}
                source={require('../../assets/plus.png')}
              />
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>
                How often is the content updated?
              </Text>
              <Image
                style={styles.plus}
                source={require('../../assets/plus.png')}
              />
            </View>
            <View style={styles.row1}>
              <Text style={styles.rowText}>
                How do I create a custom playlist?
              </Text>
              <Image
                style={styles.backImg}
                source={require('../../assets/plus.png')}
              />
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>
                How do I add a track to my favorites?
              </Text>
              <Image
                style={styles.plus}
                source={require('../../assets/plus.png')}
              />
            </View>
            <View style={styles.row1}>
              <Text style={styles.rowText}>
                How can I set a bedtime reminder?
              </Text>
              <Image
                style={styles.backImg}
                source={require('../../assets/plus.png')}
              />
            </View>
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

// export default connect(mapStateToProps, mapDispatchToProps)(FAQS);
export default FAQS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    marginTop: '12%',
    paddingVertical: 6,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backImg: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: '#f8b293',
  },
  row: {
    backgroundColor: '#bfcfc7',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
    lineHeight: 24,
    paddingBottom: 10,
    fontFamily: 'Poppins-Bold',
  },
  decription: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: '#f8b293',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 16,
  },
  plus: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: '#ffffff',
  },
  rowText: {
    color: '#f8b293',
    // fontWeight:"bold",
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});
