import { Platform } from 'react-native'
import urls from '../../config.json'

const OS = Platform.OS

const config = {
  ...urls,
  platform: OS
}

export default config
