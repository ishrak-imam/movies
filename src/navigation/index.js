
import React from 'react'

import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation'

import MoviesScreen from '../modules/Movies'
import Drawer from '../modules/Drawer'

const AppNavigator = createStackNavigator(
  {
    Movies: MoviesScreen
  },
  {
    initialRouteName: 'Movies',
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    App: AppNavigator
  },
  {
    contentComponent: props => <Drawer {...props} />
  }
)

export default createAppContainer(DrawerNavigator)
