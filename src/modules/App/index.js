import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { setNavigator } from '../../navigation/service'
import { setCurrentScreen } from '../../navigation/action'
import RootNavigator from '../../navigation'
import { actionDispatcher } from '../../utils/actionDispatcher'

export default class App extends Component {
  _handleNavigationStateChange = (prevState, currentState, action) => {
    // console.log(prevState, currentState, action)
    const lev1 = currentState.routes[currentState.index]
    let lev3 = lev1.routes[lev1.index]
    if (lev3.routes) {
      lev3 = lev3.routes[lev3.index]
      if (lev3.routes) {
        lev3 = lev3.routes[lev3.index]
      }
    }
    actionDispatcher(setCurrentScreen(lev3))
  }

  render () {
    return (
      <View style={ss.container}>
        <RootNavigator
          ref={navigatorRef => setNavigator(navigatorRef)}
          onNavigationStateChange={this._handleNavigationStateChange}
        />
      </View>
    )
  }
}

const ss = StyleSheet.create({
  container: {
    flex: 1
  }
})
