import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './SFactItem'

interface IProps {
  fact: CatFact
}

export const FactItem: React.FC<IProps> = React.memo(({ fact }) => {
  const { text } = fact

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
});
