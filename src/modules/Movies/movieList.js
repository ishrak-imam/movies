
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
import Loader from '../../components/loader'
import { Colors } from '../../theme'

const ITEM_HEIGHT = 170
const SEPARATOR_HEIGHT = 10

class MovieList extends Component {
  componentDidMount () {
    const { type } = this.props
    this._requestMovies({
      type,
      page: 1,
      refreshing: false
    })
  }

  get loading () {
    const { movies } = this.props
    return movies.get('loading')
  }

  get refreshing () {
    const { movies } = this.props
    return movies.get('refreshing')
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
      this._requestMovies({
        type,
        page: page + 1,
        refreshing: false
      })
    }
  }

  _requestMovies = options => {
    actionDispatcher(moviesReq(options))
  }

  _onRefresh = () => {
    const { type } = this.props
    this._requestMovies({
      type,
      page: 1,
      refreshing: true
    })
  }

  _keyExtractor = item => String(item.get('id'))

  _renderFooter = () => {
    return this.loading
      ? <View style={ss.footer}>
        <Loader />
      </View>
      : null
  }

  _getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index,
      index
    }
  }

  _renderSeparator = () => {
    return <View style={ss.separator} />
  }

  _renderList = list => {
    return (
      <FlatList
        contentContainerStyle={ss.flatList}
        data={list.toArray()}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderMovie}
        onEndReached={this._requestNextPage}
        onEndReachedThreshold={0.5}
        onRefresh={this._onRefresh}
        refreshing={this.refreshing}
        ListFooterComponent={this._renderFooter}
        getItemLayout={this._getItemLayout}
        ItemSeparatorComponent={this._renderSeparator}
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
    paddingVertical: 5
  },
  separator: {
    height: SEPARATOR_HEIGHT,
    backgroundColor: Colors.cloud,
    width: '100%'
  },
  footer: {
    height: 60,
    width: '100%'
  }
})
