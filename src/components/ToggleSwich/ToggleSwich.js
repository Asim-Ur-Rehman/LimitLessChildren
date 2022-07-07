import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'

const ToggleSwich = ({
  navigation,
  selectionMode,
  onSelectSwitch
  //   selectionColor,
  //   roundCorner,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode)
  //   const [getRoundCorner, setRoundCorner] = useState(roundCorner)

  const updatedSwitchData = val => {
    setSelectionMode(val)
    onSelectSwitch(val)
  }

  return (
    <TouchableOpacity
      onPress={() => updatedSwitchData(getSelectionMode == 1 ? 2 : 1)}
      activeOpacity={.9}
    >
      <View
        style={{
          width: 38,
          height: 22,
          borderRadius: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 2,
          backgroundColor: getSelectionMode == 1 ? '#c7d2d7' : "#bfcfc7",
          borderRadius:20
        }}>
        <View
          style={{
            height: 15,
            width: 15,
            borderRadius: 7,
            backgroundColor: getSelectionMode == 1 ? '#fff' : 'transparent'
          }}
          // onPress={() => updatedSwitchData(1)}
          ></View>

        <View
          style={{
            height: 15,
            width: 15,
            borderRadius: 7,
            backgroundColor: getSelectionMode == 2 ? '#fff' : 'transparent'
          }}
          // onPress={() => updatedSwitchData(2)}
        ></View>
      </View>
    </TouchableOpacity>
  )
}
export default ToggleSwich