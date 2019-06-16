
import { readValue } from '../utils/immutable'

export const getMovies = (state, type) => {
  return readValue(['movies', type], state)
}
