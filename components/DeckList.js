import React, { Component } from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    shadowOffset: {
      width: 0,
      height: 3
    },
  }
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
    const { decks } = this.state;

    return (
      <View>
        {
          Object.keys(decks).map(deck => {
            const {title, questions} = decks[deck];
            return (
              <View style={styles.card} key={deck}>
                <TouchableOpacity onPress={() => console.log(`Pressed ${title}!`)}>
                  <Text style={{fontSize: 20}}>{deck}</Text>
                  <Text>{questions.length}</Text>
                </TouchableOpacity>
              </View>
            );
          })
        }
      </View>
    );
  }

}

export default DeckList;
