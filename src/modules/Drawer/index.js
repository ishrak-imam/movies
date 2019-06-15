
import React, { Component } from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'
import Screen from '../../components/screen'

export default class Drawer extends Component {
  render () {
    return (
      <Screen>

        <View style={ss.container}>
          <Text style={{ color: 'white' }} >Drawer</Text>
        </View>

      </Screen>
    )
  }
}

const ss = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
