import React, {useState, useCallback, useRef} from 'react';
import {StyleSheet, View, Dimensions, Button} from 'react-native';
// Load the module
import Video from 'react-native-video';
import {Vimeo} from 'react-native-vimeo-iframe';
// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

export const VideoPlayer = ({navigation, route}) => {
  const vedioData = route?.params?.vedioData;
  let vedioURL = vedioData?.url?.substring(18, 28);
  // console.log('vedioData', vedioURL);
  const [orientation, setOrientation] = React.useState('landscape');
  // const [videoUrl, setVideoUrl] = React.useState(route.params ? route.params.url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" )
  // console.log('urlurlurlurl',url)
  React.useEffect(() => {
    detectOrientation();
    Dimensions.addEventListener('change', detectOrientation);
    return () => {
      Dimensions.removeEventListener('change', detectOrientation);
    };
  }, []);

  // React.useEffect(() => {
  //     detectOrientation()
  //     console.log('[dim.width', dim.width)
  // }, [dim.width])

  const isPortrait = () => {
    const dim = Dimensions.get('window');
    return dim.height >= dim.width;
  };

  const detectOrientation = () => {
    let orientation = isPortrait() ? 'portrait' : 'landscape';
    setOrientation(orientation);
  };

  const videoCallbacks = {
    timeupdate: data => console.log('timeupdate: ', data),
    play: data => console.log('play: ', data),
    pause: data => console.log('pause: ', data),
    fullscreenchange: data => console.log('fullscreenchange: ', data),
    ended: data => console.log('ended: ', data),
    controlschange: data => console.log('controlschange: ', data),
  };

  return (
    <Vimeo
      videoId={vedioURL ? vedioURL : '726774831'}
      // params={'api=1&autoplay=0'}
      handlers={videoCallbacks}
    />

    // <Video
    //   source={{
    //     uri: vedioData?.url
    //       ? vedioData?.url
    //       : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    //   }} // Can be a URL or a local file.
    //   ref={ref => {
    //     // this.player = ref
    //   }} // Store reference
    //   // onBuffer={this.onBuffer}                // Callback when remote video is buffering
    //   // onError={this.videoError}               // Callback when video cannot be loaded
    //   style={styles.backgroundVideo}
    //   controls
    //   fullscreen
    //   fullscreenOrientation="landscape"
    //   resizeMode={orientation == 'landscape' ? 'cover' : 'contain'} // Store reference
    //   onBuffer={e => {
    //     console.log('BUFFFER', e);
    //   }} // Callback when remote video is buffering
    //   onError={e => {
    //     console.log('onError', e);
    //   }} // Callback when video cannot be loaded
    //   // style={styles.backgroundVideo}
    //   onLoadStart={() => console.log('ONLOAD START')}
    //   onVideoEnd={status => {
    //     // this.setState({ progress: 0, buttons: true })
    //   }}
    // />
  );
};

// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 60,
    right: 0,
  },
});
