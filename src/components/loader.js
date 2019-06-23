
import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { Colors } from '../theme'

const Loader = ({ size, color }) => {
  return (
    <View style={ss.wrapper}>
      <ActivityIndicator size={size || 'small'} color={color || Colors.ember} />
    </View>
  )
}

export default Loader

const ss = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
