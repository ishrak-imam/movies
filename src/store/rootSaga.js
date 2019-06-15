
import { fork, all } from 'redux-saga/effects'

import * as navSaga from '../navigation/saga'

const sagas = {
  ...navSaga
}

const forkedSagas = Object.keys(sagas).map(key => fork(sagas[key]))

export default function * rootSaga () {
  yield all(forkedSagas)
}
