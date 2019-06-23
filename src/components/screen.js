
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Colors } from '../theme'

export default class Screen extends Component {
  render () {
    const { style } = this.props
    return (
      <SafeAreaView style={{ ...ss.screen, ...style }}>
        {this.props.children}
      </SafeAreaView>
    )
  }
}

const ss = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.steel
  }
})
