
import { combineReducers } from 'redux-immutable'

import * as navReducers from '../navigation/reducer'
import * as moviesReducer from '../modules/Movies/reducer'

const rootReducer = combineReducers({
  ...navReducers,
  ...moviesReducer
})

export default rootReducer
