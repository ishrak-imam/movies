
import React, { Component } from 'react'
import {
  View, Text, StyleSheet,
  Keyboard, TouchableOpacity
} from 'react-native'
import { Colors, Icon } from '../theme'
import isIOS from '../utils/isIOS'

export default class Header extends Component {
  _renderLeft = icon => {
    return (
      <View style={ss.left}>
        <TouchableOpacity style={ss.leftIcon} onPress={this._onLeftPress(icon)}>
          <Icon name={icon} color={Colors.green} size={27} />
        </TouchableOpacity>
      </View>
    )
  }

  _onLeftPress = type => {
    const { navigation } = this.props
    return () => {
      Keyboard.dismiss()
      switch (type) {
        case 'menu':
          navigation.openDrawer()
          break
        case 'back':
          navigation.goBack()
          break
      }
    }
  }

  _renderMiddle = title => {
    const alignItems = isIOS ? 'center' : 'flex-start'
    return (
      <View style={[ss.middle, { alignItems }]}>
        <Text numberOfLines={1} style={ss.title}>{title}</Text>
      </View>
    )
  }

  _renderRight = () => {
    return (
      <View style={ss.right} />
    )
  }

  render () {
    const { icon, title } = this.props
    return (
      <View>
        <View style={ss.container}>
          {this._renderLeft(icon)}
          {this._renderMiddle(title)}
          {this._renderRight()}
        </View>
      </View>
    )
  }
}

const ss = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: Colors.black
  },
  left: {
    flex: 1,
    justifyContent: 'center'
  },
  leftIcon: {
    marginHorizontal: 15
  },
  middle: {
    flex: 3,
    justifyContent: 'center',
    paddingBottom: 3
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.green
  }
})
