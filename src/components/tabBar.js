
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import isIOS from '../utils/isIOS'
import { Colors } from '../theme'
import { BottomTabBar, MaterialTopTabBar } from 'react-navigation-tabs'

export default class TabBar extends Component {
  render () {
    const TabBar = isIOS ? BottomTabBar : MaterialTopTabBar
    const { navigation, ...options } = this.props

    return (
      <TabBar
        navigation={navigation}
        {...options}
        // showLabel={showLabel}
        labelStyle={ss.labelStyle}
        upperCaseLabel={false}
        showIcon
        style={{ backgroundColor: Colors.black }}
        activeTintColor={Colors.green}
        inactiveTintColor={Colors.charcoal}
        indicatorStyle={{ backgroundColor: Colors.green }}
      />
    )
  }
}

const ss = StyleSheet.create({
  labelStyle: {
    fontSize: 10,
    marginTop: 0
  }
})
