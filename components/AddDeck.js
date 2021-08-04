import React, { Component } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import TextButton from "./TextButton";
import {getDecks} from "../utils/api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  label: {
    marginHorizontal: 12,
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    marginHorizontal: 12,
    height: 60,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#567',
  },
  btnText: {
    color: '#FFF',
    fontSize: 30
  }
});

class AddDeck extends Component {

  state = {
    deck_name: ""
  }

  onChangeText = (input) => {
    this.setState({
      deck_name: input
    })
  }

  onPress = () => {
    const { deck_name } = this.state;
    console.log(deck_name);

    // Store the value in Redux
    
    this.setState({
      deck_name: ""
    });

    // Navigate Back To All Decks

    // Store the value in AsyncStorage
  }

  render() {
    const { deck_name } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Name Your New Deck</Text>
        <TextInput
          onChangeText={this.onChangeText}
          style={styles.input}
          value={deck_name}
        />
        <TouchableOpacity style={styles.btn} onPress={ this.onPress }>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

export default AddDeck;
