
import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { actionDispatcher } from './actionDispatcher'
import Loader from '../components/loader'
import Screen from '../components/screen'
import Header from '../components/header'
import { Icon } from '../theme'

const TAB_CONFIGS = {
  NowPlaying: { name: 'Now Playing', icon: 'play' },
  Popular: { name: 'Popular', icon: 'star' },
  TopRated: { name: 'Top Rated', icon: 'ribbon' },
  Upcoming: { name: 'Upcoming', icon: 'timer' }
}

const withInfiniteScroll = (stateToProps, listItem, metaData) => {
  class InfiniteScrollComponent extends Component {
    static _getTabConfig = navigation => {
      const routeName = navigation.state.routeName
      return TAB_CONFIGS[routeName]
    }

    static navigationOptions = ({ navigation }) => {
      const { icon, name } = InfiniteScrollComponent._getTabConfig(navigation)
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name={icon} color={tintColor} />
        },
        tabBarLabel: name
      }
    }

    componentDidMount () {
      const { type } = metaData
      this._requestData({
        type,
        page: 1,
        refreshing: false
      })
    }

    get loading () {
      const { data } = this.props
      return data.get('loading')
    }

    get refreshing () {
      const { data } = this.props
      return data.get('refreshing')
    }

    _requestNextPage = () => {
      const { data } = this.props
      const { type } = metaData
      const page = data.get('page')
      const totalPages = data.get('totalPages')
      const loading = data.get('loading')
      if (!loading && page < totalPages) {
        this._requestData({
          type,
          page: page + 1,
          refreshing: false
        })
      }
    }

    _requestData = options => {
      const { dataReqAction } = metaData
      actionDispatcher(dataReqAction(options))
    }

    _onRefresh = () => {
      const { type } = metaData
      this._requestData({
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
      const { ITEM_HEIGHT, SEPARATOR_HEIGHT } = metaData
      return {
        length: ITEM_HEIGHT,
        offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index,
        index
      }
    }

    _renderSeparator = () => {
      const { SEPARATOR_HEIGHT, SEPARATOR_COLOR } = metaData
      return <View
        style={[
          ss.separator,
          {
            height: SEPARATOR_HEIGHT,
            backgroundColor: SEPARATOR_COLOR
          }
        ]}
      />
    }

    _renderList = list => {
      return (
        <FlatList
          contentContainerStyle={ss.flatList}
          data={list.toArray()}
          keyExtractor={this._keyExtractor}
          renderItem={listItem}
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
      const { data, navigation } = this.props
      const list = data.get('list')
      const { name } = InfiniteScrollComponent._getTabConfig(navigation)
      return (
        <Screen>
          <Header icon='menu' title={name} navigation={navigation} />
          <View style={ss.wrapper}>
            {this._renderList(list)}
          </View>
        </Screen>
      )
    }
  }

  return connect(stateToProps, null)(InfiniteScrollComponent)
}

export default withInfiniteScroll

const ss = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  flatList: {
    paddingVertical: 5
  },
  separator: {
    width: '100%'
  },
  footer: {
    height: 60,
    width: '100%'
  }
})
