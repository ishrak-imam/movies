
import { createAction } from '../../utils/reduxHelpers'

export const MOVIES_REQ = 'MOVIES_REQ'
export const MOVIES_SUCS = 'MOVIES_SUCS'
export const MOVIES_FAIL = 'MOVIES_FAIL'

export const moviesReq = createAction(MOVIES_REQ)
export const moviesSucs = createAction(MOVIES_SUCS)
export const moviesFail = createAction(MOVIES_FAIL)
