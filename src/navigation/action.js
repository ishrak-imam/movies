
import { createAction } from '../utils/reduxHelpers'

export const NAVIGATE_TO_SCENE = 'NAVIGATE_TO_SCENE'
export const SET_CURRENT_SCREEN = 'SET_CURENT_SCREEN'

export const navigateToScene = createAction(NAVIGATE_TO_SCENE)
export const setCurrentScreen = createAction(SET_CURRENT_SCREEN)
