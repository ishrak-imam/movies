
import { readValue, deleteFromMap } from '../utils/immutable'

export const getMovieIds = (state, type) => {
  return readValue(['movies', type, 'ids'], state)
}

export const getMovieItems = (state, type) => {
  return readValue(['movies', type, 'data'], state)
}

export const getMovies = (state, type) => {
  return deleteFromMap(readValue(['movies', type], state), 'data')
}

export const getMovie = (state, type, id) => {
  return readValue(['movies', type, 'data', id], state)
}
