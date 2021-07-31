import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddCard from "./components/AddCard";
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";
import DeckQuiz from "./components/DeckQuiz";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DeckList">
        <Stack.Screen
          name="DeckList"
          component={DeckList}
          options={{
            title: "All Decks"
          }}
        />
        <Stack.Screen
          name="AddDeck"
          component={AddDeck}
          options={{
            title: "Add Deck"
          }}
        />
        <Stack.Screen
          name="Deck"
          component={Deck}
          options={{
            title: "Deck"
          }}
        />
        <Stack.Screen
          name="DeckQuiz"
          component={DeckQuiz}
          options={{
            title: "Start Deck Quiz"
          }}
        />
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{
            title: "Add Card To Deck"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
