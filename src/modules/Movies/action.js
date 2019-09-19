
import { createAction } from '../../utils/reduxHelpers'

export const MOVIES_REQ = 'MOVIES_REQ'
export const MOVIES_SUCS = 'MOVIES_SUCS'
export const MOVIES_FAIL = 'MOVIES_FAIL'

export const GENRES_REQ = 'GENRES_REQ'
export const GENRES_SUCS = 'GENRES_SUCS'
export const GENRES_FAIL = 'GENRES_FAIL'

export const moviesReq = createAction(MOVIES_REQ)
export const moviesSucs = createAction(MOVIES_SUCS)
export const moviesFail = createAction(MOVIES_FAIL)

export const genresReq = createAction(GENRES_REQ)
export const genresSucs = createAction(GENRES_SUCS)
export const genresFail = createAction(GENRES_FAIL)
