import React, {Component, useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {bindActionCreators} from 'redux';
import {connect, useSelector, useDispatch} from 'react-redux';
import {userLogout} from '../../redux/actions';
import {CardView} from '../../components';
import {
  GetStoryCategoriesAction,
  GetStoryAction,
} from '../../stores/actions/user.action';
import {useIsFocused} from '@react-navigation/native';
function HomeScreen({navigation, user, userLogout}) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const users = useSelector(state => state.userReducer.users);
  // console.log('users++++++', users);
  const getStoryCategories = useSelector(
    state => state.userReducer.getStoryCategories,
  );
  // console.log('getStoryCategories++++++', getStoryCategories);

  const getStory = useSelector(state => state.userReducer.getStory);
  // console.log('getStory++++++', getStory);
  const [reason1, setReason1] = useState([
    {title: 'Snail Riding', image: require('../../assets/home01.png')},
    {
      title: 'Friend, Me & Bus',
      description: 'Child Collection',
      image: require('../../assets/home02.png'),
    },
    {
      title: 'Fantasy',
      description: 'Fantasy Collection',
      image: require('../../assets/home03.png'),
    },
    {
      title: 'Snail Riding',
      description: 'Sleep Collection',
      image: require('../../assets/home01.png'),
    },
    {title: 'Snail Riding', image: require('../../assets/home02.png')},
    {
      title: 'Snail Riding',
      description: 'Child Collection',
      image: require('../../assets/home03.png'),
    },
  ]);
  const [reason, setReason] = useState([
    {
      title: 'a',
      image: require('../../assets/home-top-image.png'),
    },
    {
      title: 'b',
      image: require('../../assets/home-top-image.png'),
    },
    {
      title: 'c',
      image: require('../../assets/home-top-image.png'),
    },
    {
      title: 'd',
      image: require('../../assets/home-top-image.png'),
    },
  ]);
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  const goNext = () => {
    navigation.navigate('About Motivation');
  };
  const onViewRef = React.useRef(({viewableItems}) => {
    console.log('viewableItems', viewableItems);
    let currentIndex = viewableItems[0].index;
    setCurrentIndex(currentIndex);
    // Use viewable items in state or as intended
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});
  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => {
    getStoryCategoriesFunc();
  }, []);

  useEffect(() => {
    isFocused && getStoryCategoriesFunc();
  }, [isFocused]);

  const getStoryCategoriesFunc = () => {
    let data = {
      token: users?.token,
    };
    // console.log('data==', data);
    dispatch(GetStoryAction(data, navigation));
    dispatch(GetStoryCategoriesAction(data, navigation));
  };

  return (
    <>
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor={'#f8b293'}
        />
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, paddingBottom: 50}}
            showsVerticalScrollIndicator={false}>
            <View>
              <FlatList
                showsVerticalScrollIndicator="none"
                data={getStory}
                keyExtractor={(item, index) => index}
                horizontal={true}
                // snapToInterval={width}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                pagingEnabled
                renderItem={({item, index}) => {
                  // console.log('getStory-====', item);
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        navigation.navigate('VideoPlayer', {
                          vedioData: item,
                        });
                      }}>
                      <View
                        style={{
                          position: 'absolute',
                          zIndex: 30,
                          top: '62%',
                          left: '10%',
                          flexDirection: 'row',
                        }}>
                        <View>
                          <Text style={styles.platText}>{item?.title}</Text>
                          <Text
                            style={{
                              color: '#ffffff',
                              fontFamily: 'Poppins-Regular',
                            }}>
                            {item?.duration}
                          </Text>
                        </View>
                        <Image
                          style={styles.playIcon}
                          source={require('../../assets/playbtn-big.png')}
                        />
                      </View>
                      <Image
                        style={{
                          width: Dimensions.get('window').width,
                          height: Platform.OS == 'ios' ? 290 : 280,
                          resizeMode: 'cover',
                        }}
                        source={
                          item?.thumbnail
                            ? {uri: item?.thumbnail}
                            : require('../../assets/home-top-image.png')
                        }
                      />
                    </TouchableOpacity>
                  );
                }}></FlatList>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                {reason.map((val, index) => {
                  if (index == currentIndex) {
                    return (
                      <View
                        key={index}
                        style={{
                          width: 14,
                          height: 7,
                          backgroundColor: '#f8b293',
                          borderRadius: 10,
                          zIndex: 20,
                          margin: 5,
                          marginTop: 10,
                        }}
                      />
                    );
                  } else {
                    return (
                      <View
                        key={index}
                        style={{
                          width: 8,
                          height: 8,
                          backgroundColor: '#c4c4c4',
                          borderRadius: 10,
                          zIndex: 20,
                          margin: 5,
                          marginTop: 10,
                        }}
                      />
                    );
                  }
                })}
              </View>

              {getStoryCategories?.map((item, i) => {
                return (
                  <View>
                    <View style={styles.row}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          style={styles.Illustration}
                          source={
                            item?.categoryData
                              ? {uri: item?.categoryData?.image}
                              : require('../../assets/homeIllustration-1.png')
                          }
                        />
                        <Text style={styles.mindfull}>
                          {item?.categoryData?.name}
                        </Text>
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.ViewAllBtn}>
                        <Text style={styles.viewText}>View All</Text>
                      </TouchableOpacity>
                    </View>
                    <FlatList
                      showsVerticalScrollIndicator="none"
                      data={item?.stories}
                      keyExtractor={(item, index) => index}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => {
                        // console.log('stires+++', item);
                        return (
                          <>
                            <CardView
                              onPress={() => {
                                navigation.navigate('VideoPlayer', {
                                  vedioData: item,
                                });
                              }}
                              image={item.thumbnail}
                              title={item.title}
                              // description={item.description}
                            />
                          </>
                        );
                      }}></FlatList>
                  </View>
                );
              })}

              {/* <View>
                <View style={styles.row}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.Illustration}
                      source={require('../../assets/home-illustration-2.png')}
                    />
                    <Text style={styles.mindfull}>IMAGIRATION</Text>
                  </View>
                  <View style={styles.ViewAllBtn}>
                    <Text style={styles.viewText}>View All</Text>
                  </View>
                </View>
                <FlatList
                  showsVerticalScrollIndicator="none"
                  data={reason1}
                  keyExtractor={(item, index) => index}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => {
                    return (
                      <>
                        <CardView
                          image={item.image}
                          title={item.title}
                          description={item.description}
                        />
                      </>
                    );
                  }}></FlatList>
              </View> */}
            </View>
            <View style={{paddingBottom: '10%'}}></View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

// const mapStateToProps = state => {
//   return { user: state?.user };
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ userLogout }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 18,
  },
  Illustration: {
    width: 45,
    height: 30,
    resizeMode: 'contain',
  },
  ViewAllBtn: {
    backgroundColor: '#f8b293',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 20,
  },
  platText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  viewText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  playIcon: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
    marginLeft: '60%',
  },
  mindfull: {
    color: '#4d585b',
    paddingLeft: 10,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 2,
  },
  carddv: {
    flex: 1,
    backgroundColor: '#181a33',
    marginLeft: 10,
    marginTop: 10,
  },
  trending: {
    paddingLeft: 9,
    color: '#fffffd',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    paddingTop: 8,
  },
  tile: {
    width: 80,
    height: 90,
    resizeMode: 'cover',
  },
  play01: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 1,
    left: 28,
    top: 35,
  },
  mark: {
    width: 12,
    height: 12,
    paddingLeft: 6,
  },
  worddv: {
    color: '#fffffd',
    paddingRight: 6,
    fontSize: 10,
  },
  live: {
    width: 65,
    height: 65,
    position: 'absolute',
    zIndex: 10,
    resizeMode: 'contain',
    left: 18,
  },
  untitled: {
    width: 230,
    height: 130,
    marginLeft: 10,
  },
  recomend: {
    color: '#fffffd',
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 14,
    marginBottom: 15,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  homelist: {
    textAlign: 'center',
    color: '#d7d7d9',
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 20,
    fontFamily: 'Poppins-Regular',
  },
  firstHeading: {
    textAlign: 'center',
    color: '#d7d7d9',
    fontWeight: 'bold',
    paddingVertical: 20,
    fontSize: 12.5,
    opacity: 0.5,
    fontFamily: 'Poppins-Regular',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#0e101f70',
  },
});
