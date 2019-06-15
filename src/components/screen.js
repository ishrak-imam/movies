
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors } from '../theme'

export default class Screen extends Component {
  render () {
    return (
      <View style={ss.screen}>
        {this.props.children}
      </View>
    )
  }
}

const ss = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.black
  }
})
