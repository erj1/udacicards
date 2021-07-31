import React, { Component } from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {getDecks} from "../utils/api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class DeckQuiz extends Component {

  state = {

  }

  componentDidMount() {

  }

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Deck Quiz View</Text>
        <Button
          title="Next Card"
          onPress={() => navigation.push("DeckQuiz")} />

        <Button
          title="Exit Quiz"
          onPress={() => navigation.navigate("Deck")} />
      </View>
    );
  }

}

export default DeckQuiz;
