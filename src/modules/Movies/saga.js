
import {
  call, put,
  takeEvery, select
} from 'redux-saga/effects'
import {
  moviesReq, moviesSucs, moviesFail,
  genresReq, genresSucs, genresFail
} from './action'
import { requestMovies, requestGenres } from './api'
import { getMovieIds, getMovieItems } from '../../selectors'
import {
  setIntoMap, getImmutableObject,
  concatList, readValue, mergeMapShallow
} from '../../utils/immutable'

function formatMovieResults (result) {
  const { ids, data } = result.results.reduce((map, item) => {
    const id = item.id
    map.ids.push(id)
    map.data[id] = item
    return map
  }, { ids: [], data: {} })

  return getImmutableObject({
    page: result.page,
    totalPages: result.total_pages,
    totalResults: result.total_results,
    ids,
    data
  })
}

export function * watchMoviesReq () {
  yield takeEvery(moviesReq.getType(), workerMoviesReq)
}

function * workerMoviesReq (action) {
  const { type, page, refreshing } = action.payload
  try {
    let movieData = yield call(requestMovies, type, page)
    movieData = formatMovieResults(movieData)
    if (!refreshing) {
      const ids = yield select(getMovieIds, type)
      const movies = yield select(getMovieItems, type)
      movieData = setIntoMap(movieData, 'ids', concatList(ids, readValue('ids', movieData)))
      movieData = setIntoMap(movieData, 'data', mergeMapShallow(movies, readValue('data', movieData)))
    }
    yield put(moviesSucs({ type, movieData }))
  } catch (e) {
    yield put(moviesFail({ type }))
  }
}

export function * watchGenresReq () {
  yield takeEvery(genresReq.getType(), workerGenresReq)
}

function * workerGenresReq (action) {
  try {
    const { genres } = yield call(requestGenres)
    yield put(genresSucs(genres))
  } catch (e) {
    yield put(genresFail())
  }
}
