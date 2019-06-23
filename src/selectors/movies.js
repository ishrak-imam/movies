
import { readValue } from '../utils/immutable'

export const getMovies = (state, type) => {
  return readValue(['movies', type], state)
}

export const getMovieList = (state, type) => {
  return readValue(['movies', type, 'list'], state)
}
