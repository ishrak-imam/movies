
import { combineReducers } from 'redux-immutable'

import * as navReducers from '../navigation/reducer'

const rootReducer = combineReducers({
  ...navReducers
})

export default rootReducer
