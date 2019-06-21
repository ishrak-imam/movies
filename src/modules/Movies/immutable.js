
import { getMap, getList } from '../../utils/immutable'

export const MOVIES_INITIAL_STATE = getMap({
  now_playing: getMap({
    loading: false,
    list: getList([]),
    page: 0,
    totalResults: 0,
    totalPages: 0
  }),

  popular: getMap({
    loading: false,
    list: getList([]),
    page: 0,
    totalResults: 0,
    totalPages: 0
  }),

  top_rated: getMap({
    loading: false,
    list: getList([]),
    page: 0,
    totalResults: 0,
    totalPages: 0
  }),

  upcoming: getMap({
    loading: false,
    list: getList([]),
    page: 0,
    totalResults: 0,
    totalPages: 0
  })
})
