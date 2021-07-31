import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./DeckList";
import Deck from "./Deck";
import AddCard from "./AddCard";
import DeckQuiz from "./DeckQuiz";

const Stack = createStackNavigator();

class DeckScreen extends Component {

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="DeckList" component={DeckList} options={{
          title: "Your Decks"
        }} />
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="DeckQuiz" component={DeckQuiz} />
      </Stack.Navigator>
    );
  }

}

export default DeckScreen;
