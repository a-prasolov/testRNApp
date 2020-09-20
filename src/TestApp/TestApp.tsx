import React from 'react'
import { Text, View, ScrollView } from 'react-native'

import { Button } from '../Component'
import { FactItem } from './FactItem'

import { styles } from './STestApp'

interface IState {
  catFacts: {
    [key: string]: CatFact
  },
  collectionSize: number,
}

export class TestApp extends React.PureComponent<{}, IState> {
  state = {
    catFacts: {},
    collectionSize: 0
  }

  loadFacts = () => {
    const url = 'http://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3'

    fetch(url).then((response) => {
        return response.json()
      })
      .then((data) => {
        const collection: { [key: string]: CatFact } = { ...this.state.catFacts }

        data.map((item: CatFact) => {
          collection[item._id] = item
        })

        this.setState({
          catFacts: collection,
        })
      })
      .catch(err => console.log('Fetch error: ', err))
  }

  componentDidMount() {
    this.loadFacts();
  }

  render() {
    const { catFacts } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Cat facts</Text>
        <ScrollView style={styles.listWrapper}>
          {
            Object.keys(catFacts).map((item) => <FactItem key={item} fact={catFacts[item]}/>)
          }
          <Button onPress={this.loadFacts}>
            Load more
          </Button>
        </ScrollView>
      </View>
    )
  }
}
