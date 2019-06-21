
import React, { Component } from 'react'
import {
  FlatList, View,
  StyleSheet
} from 'react-native'
import MovieItem from '../../components/movieItem'
import { actionDispatcher } from '../../utils/actionDispatcher'
import { moviesReq } from './action'
import { getMovies } from '../../selectors'
import { connect } from 'react-redux'

class MovieList extends Component {
  componentDidMount () {
    const { type } = this.props
    this._requestMovies(type)
  }

  _renderMovie = ({ item }) => {
    return (
      <MovieItem movie={item} />
    )
  }

  _requestNextPage = () => {
    const { movies, type } = this.props
    const page = movies.get('page')
    const totalPages = movies.get('totalPages')
    const loading = movies.get('loading')
    if (!loading && page < totalPages) {
      this._requestMovies(type, page + 1)
    }
  }

  _requestMovies = (type, page = 1) => {
    actionDispatcher(moviesReq({
      type, page
    }))
  }

  _keyExtractor = item => String(item.get('id'))

  _renderList = list => {
    return (
      <FlatList
        contentContainerStyle={ss.flatList}
        data={list.toArray()}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderMovie}
        onEndReached={this._requestNextPage}
        onEndReachedThreshold={0.5}
      />
    )
  }

  render () {
    const { movies } = this.props
    const list = movies.get('list')
    return (
      <View style={ss.wrapper}>
        {this._renderList(list)}
      </View>
    )
  }
}

const stateToProps = (state, props) => {
  const { type } = props
  return {
    movies: getMovies(state, type)
  }
}

export default connect(stateToProps, null)(MovieList)

const ss = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  flatList: {
    paddingHorizontal: 10,
    paddingBottom: 5
  }
})
