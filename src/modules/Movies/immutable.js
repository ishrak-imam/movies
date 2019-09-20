
import { getMap, getList } from '../../utils/immutable'

export const MOVIES_INITIAL_STATE = getMap({
  nowPlaying: getMap({
    loading: false,
    refreshing: false,
    ids: getList([]),
    data: getMap({}),
    page: 0,
    totalResults: 0,
    totalPages: 0
  }),

  popular: getMap({
    loading: false,
    refreshing: false,
    ids: getList([]),
    data: getMap({}),
    page: 0,
    totalResults: 0,
    totalPages: 0
  }),

  topRated: getMap({
    loading: false,
    refreshing: false,
    ids: getList([]),
    data: getMap({}),
    page: 0,
    totalResults: 0,
    totalPages: 0
  }),

  upcoming: getMap({
    loading: false,
    refreshing: false,
    ids: getList([]),
    data: getMap({}),
    page: 0,
    totalResults: 0,
    totalPages: 0
  }),

  genres: getList([])
})
