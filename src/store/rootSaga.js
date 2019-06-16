
import { fork, all } from 'redux-saga/effects'

import * as navSaga from '../navigation/saga'
import * as moviesSaga from '../modules/Movies/saga'

const sagas = {
  ...navSaga,
  ...moviesSaga
}

const forkedSagas = Object.keys(sagas).map(key => fork(sagas[key]))

export default function * rootSaga () {
  yield all(forkedSagas)
}
