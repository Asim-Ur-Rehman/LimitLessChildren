import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const {width, height} = Dimensions.get('window');
import {theme} from '../../utils/theme';
export const InputField = ({
  onPress = () => {},
  placeholder = null,
  secureTextEntry,
  Icon = null,
  container = {},
  inputStyle = {},
  placeholderTextColor = {},
  iconStyle = {},
  numberOfLines = null,
  multiline = false,
  keyboardType = null,
  onChange = text => {},
  value = '',
  textAlignVertical = null,
  eye = null,
  editable = true,
}) => {
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [hideEye, setHideEye] = useState();

  const onChangeText = e => {
    onChange(e);
    setInputValue(e);
  };

  // console.log('secureTextEntry secureTextEntry ', secureTextEntry)
  return (
    <View style={[styles.input, container]}>
      <TextInput
        editable={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[styles.inputStyle, inputStyle, {width: Icon ? '85%' : '95%'}]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        textAlignVertical={textAlignVertical}
        autoCapitalize={false}
      />

      <View
        style={styles.logoImg}
        // activeOpacity={1}
      >
        {/* <Image
          style={[{ height: 18, width: 18, tintColor: '#474747' }, iconStyle]}
          source={Icon}
        /> */}
        {Icon ? (
          <Feather
            name={secureTextEntry ? 'eye-off' : 'eye'}
            size={16}
            color="#474747"
            onPress={onPress}
            // style={{ backgroundColor: theme.textColor.LightGray }}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#F3F7FA',
    borderWidth: 1,
    height: 58,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  logoImg: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 22 : 22,
    right: 15,
    height: 18,
    width: 18,
    resizeMode: 'contain',
    tintColor: '#474747',
    // backgroundColor: theme.textColor.LightGray
    // alignSelf: 'flex-end'
  },
  inputStyle: {
    width: '95%',
    marginLeft: 6,
    fontSize: 15,
    color: '#474747',
    borderColor: '#474747',
  },
});
