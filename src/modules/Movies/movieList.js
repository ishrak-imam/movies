
import React from 'react'
import ListWithInfiniteScroll from './withInfiniteScroll'
import MovieItem from '../../components/movieItem'
import { getMovies } from '../../selectors'
import { moviesReq } from './action'
import { Colors } from '../../theme'

const ITEM_HEIGHT = 170
const SEPARATOR_HEIGHT = 10
const SEPARATOR_COLOR = Colors.cloud

const MovieList = type => ListWithInfiniteScroll(
  state => ({ data: getMovies(state, type) }), // stateToProps fn
  ({ item }) => (<MovieItem id={item} type={type} />), // list item component
  { // metadata or configuration data
    type,
    dataReqAction: moviesReq,
    ITEM_HEIGHT,
    SEPARATOR_HEIGHT,
    SEPARATOR_COLOR
  }
)
export default MovieList
