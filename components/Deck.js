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

class Deck extends Component {

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Deck View</Text>
        <Button
          title="Add A New Card"
          onPress={() => navigation.navigate("AddCard")}
        />
        <Button
          title="Start Quiz"
          onPress={() => navigation.navigate("DeckQuiz")}
        />
      </View>
    );
  }

}

export default Deck;
