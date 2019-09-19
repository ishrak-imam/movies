
import React from 'react'
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

import isIOS from '../utils/isIOS'

import Drawer from '../modules/Drawer'
import TabBar from '../components/tabBar'

import MovieList from '../modules/Movies/movieList'

const createTabNavigator = isIOS ? createBottomTabNavigator : createMaterialTopTabNavigator

const MovieTabs = createTabNavigator(
  {
    NowPlaying: MovieList('nowPlaying'),
    Popular: MovieList('popular'),
    TopRated: MovieList('topRated'),
    Upcoming: MovieList('upcoming')
  },
  {
    initialRouteName: 'NowPlaying',
    headerMode: 'none',
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarComponent: props => <TabBar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Home: MovieTabs
  },
  {
    initialRouteName: 'Home',
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
