
import { getRequest } from '../../utils/request'

export const requestMovies = (type, page) => {
  return getRequest(`/movie/${type}?page=${page}`)
}
