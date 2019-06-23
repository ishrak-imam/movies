
import { createReducer } from '../../utils/reduxHelpers'
import { setIntoMap, readValue } from '../../utils/immutable'
import {
  MOVIES_REQ, MOVIES_SUCS, MOVIES_FAIL
} from './action'
import { MOVIES_INITIAL_STATE } from './immutable'

export const movies = createReducer(MOVIES_INITIAL_STATE, {
  [MOVIES_REQ]: (state, payload) => {
    let movieData = readValue(payload.type, state)
    movieData = setIntoMap(movieData, 'loading', !payload.refreshing)
    movieData = setIntoMap(movieData, 'refreshing', payload.refreshing)
    return setIntoMap(state, payload.type, movieData)
  },

  [MOVIES_SUCS]: (state, payload) => {
    let { type, movieData } = payload
    movieData = setIntoMap(movieData, 'loading', false)
    movieData = setIntoMap(movieData, 'refreshing', false)
    return setIntoMap(state, type, movieData)
  },

  [MOVIES_FAIL]: (state, payload) => {
    let movieData = readValue(payload.type, state)
    movieData = setIntoMap(movieData, 'loading', false)
    movieData = setIntoMap(movieData, 'refreshing', false)
    return setIntoMap(state, payload.type, movieData)
  }
})
