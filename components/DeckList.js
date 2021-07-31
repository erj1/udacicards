import React, { Component } from "react";
import {View, Text, StyleSheet, Button} from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class DeckList extends Component {

  state = {
    decks: {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Deck List View</Text>
        <Button
          title="View A Deck"
          onPress={() => navigation.navigate("Deck")}
        />
        <Button
          title="Add A New Deck"
          onPress={() => navigation.navigate("AddDeck")}
        />
      </View>
    );
  }

}

export default DeckList;
