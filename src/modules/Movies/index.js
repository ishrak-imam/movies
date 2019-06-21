
import React, { Component } from 'react'
import Screen from '../../components/screen'
import Header from '../../components/header'
import MovieList from './movieList'

export default class Movies extends Component {
  render () {
    const { navigation } = this.props
    return (
      <Screen>
        <Header icon='menu' title='Movies' navigation={navigation} />
        <MovieList type='popular' />
      </Screen>
    )
  }
}
