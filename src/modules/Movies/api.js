
import { getRequest } from '../../utils/request'
import { format, addYears } from 'date-fns'
import { toQueryString } from '../../utils/stringHelpers'

export const requestMovies = (type, page) => {
  const nowDate = format(Date.now(), 'YYYY-MM-DD')
  const towYrsLater = format(addYears(Date.now(), 2), 'YYYY-MM-DD')

  let query = null

  switch (type) {
    case 'popular':
      query = {
        sort_by: 'popularity.desc',
        'release_date.gte': '1990-01-01',
        'release_date.lte': nowDate
      }
      break
    case 'upcoming':
      query = {
        sort_by: 'release_date.asc',
        'release_date.gte': nowDate,
        'release_date.lte': towYrsLater
      }
      break
    case 'topRated':
      query = {
        sort_by: 'release_date.desc',
        'vote_average.gte': 8,
        'release_date.gte': '1990-01-01',
        'release_date.lte': nowDate
      }
      break

    default:
      query = {}
  }

  return getRequest(`/discover/movie?page=${page}&${toQueryString(query)}&region=US`)
}

export const requestGenres = () => {
  return getRequest('/genre/movie/list?language=en-US')
}
