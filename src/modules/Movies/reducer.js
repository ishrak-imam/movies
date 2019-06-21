
import { createReducer } from '../../utils/reduxHelpers'
import { setIntoMap, readValue, concatList, getImmutableObject } from '../../utils/immutable'
import {
  MOVIES_REQ, MOVIES_SUCS, MOVIES_FAIL
} from './action'
import { MOVIES_INITIAL_STATE } from './immutable'

export const movies = createReducer(MOVIES_INITIAL_STATE, {
  [MOVIES_REQ]: (state, payload) => {
    let movieGroup = readValue(payload.type, state)
    movieGroup = setIntoMap(movieGroup, 'loading', true)
    return setIntoMap(state, payload.type, movieGroup)
  },

  [MOVIES_SUCS]: (state, payload) => {
    const { type, movieData } = payload
    let movieGroup = readValue(type, state)
    movieGroup = setIntoMap(movieGroup, 'loading', false)
    movieGroup = setIntoMap(movieGroup, 'page', movieData.page)
    movieGroup = setIntoMap(movieGroup, 'totalResults', movieData.totalResults)
    movieGroup = setIntoMap(movieGroup, 'totalPages', movieData.totalPages)
    movieGroup = setIntoMap(movieGroup, 'list', concatList(readValue('list', movieGroup), getImmutableObject(movieData.list)))
    return setIntoMap(state, payload.type, movieGroup)
  },

  [MOVIES_FAIL]: (state, payload) => {
    let movieGroup = readValue(payload.type, state)
    movieGroup = setIntoMap(movieGroup, 'loading', false)
    return setIntoMap(state, payload.type, movieGroup)
  }
})
