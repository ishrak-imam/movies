
import React, { Component } from 'react'
import Screen from '../../components/screen'
import Header from '../../components/header'
import listWithInfiniteScroll from '../../utils/infiniteScrollHOC'
import MovieItem from '../../components/movieItem'
import { getMovies } from '../../selectors'
import { moviesReq } from './action'

const type = 'upcoming'
const ITEM_HEIGHT = 170
const SEPARATOR_HEIGHT = 10

const MovieList = listWithInfiniteScroll(
  state => ({ data: getMovies(state, type) }),
  ({ item }) => (<MovieItem movie={item} />),
  {
    type,
    dataReqAction: moviesReq,
    ITEM_HEIGHT,
    SEPARATOR_HEIGHT
  }
)

export default class Movies extends Component {
  render () {
    const { navigation } = this.props
    return (
      <Screen>
        <Header icon='menu' title='Movies' navigation={navigation} />
        <MovieList />
      </Screen>
    )
  }
}
