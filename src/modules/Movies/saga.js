
import {
  call, put,
  takeEvery, select
} from 'redux-saga/effects'
import {
  moviesReq, moviesSucs, moviesFail,
  genresReq, genresSucs, genresFail
} from './action'
import { requestMovies, requestGenres } from './api'
import { getMovieList } from '../../selectors'
import { setIntoMap, getImmutableObject, concatList, readValue } from '../../utils/immutable'

function formatMovieResults (result) {
  return getImmutableObject({
    page: result.page,
    totalPages: result.total_pages,
    totalResults: result.total_results,
    list: result.results
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
      const list = yield select(getMovieList, type)
      movieData = setIntoMap(movieData, 'list', concatList(list, readValue('list', movieData)))
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
