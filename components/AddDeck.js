import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import {getDecks} from "../utils/api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AddDeck extends Component {

  state = {
    decks: {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Add Deck View</Text>
      </View>
    );
  }

}

export default AddDeck;
