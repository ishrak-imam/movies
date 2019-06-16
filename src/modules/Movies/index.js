
import React, { Component } from 'react'
import Screen from '../../components/screen'
import Header from '../../components/header'
import { actionDispatcher } from '../../utils/actionDispatcher'
import { moviesReq } from './action'
import { getMovies } from '../../selectors'
import { connect } from 'react-redux'

class Movies extends Component {
  componentDidMount () {
    actionDispatcher(moviesReq({
      type: 'popular',
      page: 1
    }))
  }

  componentWillReceiveProps (nextProps) {
    const { popularMovies } = nextProps
    const loading = popularMovies.get('loading')
    const page = popularMovies.get('page')
    const totalPages = popularMovies.get('totalPages')

    // if (page < totalPages && !loading) {
    //   setTimeout(() => {
    //     actionDispatcher(moviesReq({
    //       type: 'popular',
    //       page: page + 1
    //     }))
    //   }, 1000)
    // }
  }

  render () {
    const { navigation } = this.props
    return (
      <Screen>
        <Header icon='menu' title='Movies' navigation={navigation} />
      </Screen>
    )
  }
}

const stateToProps = state => ({
  popularMovies: getMovies(state, 'popular')
})

export default connect(stateToProps, null)(Movies)
