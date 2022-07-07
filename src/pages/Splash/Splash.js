import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Video from 'react-native-video';
const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* require('../../assets/gif.gif')  */}
      <Image
        // source={{uri: 'https://laybulldxb.com/gif.gif'}}
        source={require('../../assets/gif.gif')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      />

      {/* <Video
        source={{
          uri: 'https://laybulldxb.com/ezgif-4-78cc24d12f.mp4',
        }} // Can be a URL or a local file.
        // Callback when video cannot be loaded
        style={{width: '100%', height: '100%'}}
        // controls
        fullscreen
        resizeMode={'cover'} // Store reference
        onBuffer={e => {
          console.log('BUFFFER', e);
        }} // Callback when remote video is buffering
        onError={e => {
          console.log('onError', e);
        }} // Callback when video cannot be loaded
        // style={styles.backgroundVideo}
        onLoadStart={() => console.log('ONLOAD START')}
        onVideoEnd={status => {
          console.log('sttuy', status);
          // this.setState({ progress: 0, buttons: true })
        }}
      /> */}
    </View>
  );
};

export default Splash;
