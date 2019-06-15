
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './src/modules/App'
import { store } from './src/store'

console.disableYellowBox = true

export default class MoviesApp extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
