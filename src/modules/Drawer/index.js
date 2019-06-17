
import React, { Component } from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'
import Screen from '../../components/screen'
import { Colors } from '../../theme'

export default class Drawer extends Component {
  render () {
    return (
      <Screen style={ss.screen}>

        <View style={ss.container}>
          <Text style={{ color: 'white' }} >Drawer</Text>
        </View>

      </Screen>
    )
  }
}

const ss = StyleSheet.create({
  screen: {
    backgroundColor: Colors.blue
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
