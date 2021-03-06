
import React, { Component } from 'react'
import {
  View, Text,
  Image, StyleSheet
} from 'react-native'
import { Colors, Icon } from '../theme'
import config from '../utils/config'
import { format } from 'date-fns'
import { stringShorten } from '../utils/stringHelpers'
import { getMovie } from '../selectors'
import { connect } from 'react-redux'

const DATE_FORMAT = 'YYYY-MM-DD'
const OVERVIEW_LIMIT = 120

class MovieItem extends Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.id !== this.props.id
  }

  render () {
    const { movie } = this.props
    const year = format(movie.get('release_date'), DATE_FORMAT)
    const overview = stringShorten(movie.get('overview'), OVERVIEW_LIMIT)

    return (
      <View style={ss.movie}>
        <Image
          resizeMode='stretch'
          source={{ uri: `${config.TMDB_IMG_URL}${movie.get('poster_path')}` }}
          style={ss.poster}
        />
        <View style={ss.info}>
          <View>
            <Text style={ss.title}>{movie.get('title')}</Text>
            <Text style={ss.release}>{year}</Text>
            {/* <Text style={ss.release}>Drama, Thriller</Text> */}
          </View>
          <View style={ss.rating}>
            <Icon name='star' color={Colors.gold} style={ss.rIcon} size={20} />
            <Text>{movie.get('vote_average')}</Text>
          </View>
          <View style={ss.overview}>
            <Text>{overview}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const stateToProps = (state, props) => {
  const { type, id } = props
  return {
    movie: getMovie(state, type, String(id))
  }
}

export default connect(stateToProps, null)(MovieItem)

const ss = StyleSheet.create({
  movie: {
    width: '100%',
    height: 170,
    flexDirection: 'row',
    backgroundColor: Colors.white
  },
  poster: {
    flex: 1.7
  },
  info: {
    flex: 3.5,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 5
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  release: {
    fontSize: 12,
    color: Colors.grey
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  rIcon: {
    marginRight: 5
  },
  overview: {
    marginTop: 5
  }
})
