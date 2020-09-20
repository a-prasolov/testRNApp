import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './SButton'

interface IProps {
  onPress: () => void
}

export const Button: React.FC<IProps> = React.memo(({ onPress, children }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <Text>
        {children}
      </Text>
    </TouchableOpacity>
  )
});
