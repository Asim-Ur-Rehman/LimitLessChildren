import React from 'react';
import Toast from 'react-native-toast-message';

export const ToastMessage = (text1, text2, type, position) => {
  Toast.show({
    type: type,
    position: position ? position : 'top',
    text1: text1,
    text2: text2,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
  });
};
