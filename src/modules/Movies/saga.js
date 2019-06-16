
import { call, put, takeEvery } from 'redux-saga/effects'
import {
  moviesReq, moviesSucs, moviesFail
} from './action'

import { requestMovies } from './api'

function formatMovieResults (result) {
  return {
    page: result.page,
    totalPages: result.total_pages,
    totalResults: result.total_results,
    movies: result.results
  }
}

export function * watchMoviesReq () {
  yield takeEvery(moviesReq.getType(), workerMoviesReq)
}

function * workerMoviesReq (action) {
  const { type, page } = action.payload
  try {
    const result = yield call(requestMovies, type, page)
    yield put(moviesSucs({ type, movieData: formatMovieResults(result) }))
  } catch (e) {
    console.log(e)
    yield put(moviesFail({ type }))
  }
}
