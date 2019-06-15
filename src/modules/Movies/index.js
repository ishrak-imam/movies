
import React, { Component } from 'react'
import Screen from '../../components/screen'
import Header from '../../components/header'

export default class Movies extends Component {
  render () {
    const { navigation } = this.props
    return (
      <Screen>
        <Header icon='menu' title='Movies' navigation={navigation} />
      </Screen>
    )
  }
}
