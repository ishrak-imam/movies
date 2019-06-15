/* eslint-disable */

import { getInitialState } from '../utils/initialState'


/**
 * Redux
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'


/**
 * Middlewares
 */
// import Middlewares from '../middlewares'
import Logger from '../middlewares/logger'


/**
 * Saga
 */
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
const SagaMiddleware = createSagaMiddleware()
const middlewares = [
  SagaMiddleware
]
if (__DEV__) {
  middlewares.push(Logger)
}



/**
 * Exports
 */
export const store = createStore(
  rootReducer,
  getInitialState(),
  applyMiddleware(...middlewares)
)


/**
 * Run saga middleware after apply middleware
 */
SagaMiddleware.run(rootSaga)
