import React from 'react'
import isIOS from '../utils/isIOS'
import IonIcon from 'react-native-vector-icons/Ionicons'

const getIconName = name => {
  const icons = {
    back: ['ios-arrow-back', 'md-arrow-back'],
    menu: ['ios-menu', 'md-menu']
  }
  const result = icons[name]
  return isIOS ? result[0] : result[1]
}

const Icon = (props) => {
  const { name, size = 25, ...rest } = props
  return <IonIcon name={getIconName(name)} size={size} {...rest} />
}

export default Icon
