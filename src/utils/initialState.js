
import { getMap } from '../utils/immutable'

import { NAV_INITIAL_STATE } from '../navigation/immutable'

export const getInitialState = () => {
  return getMap({
    navigation: NAV_INITIAL_STATE
  })
}
