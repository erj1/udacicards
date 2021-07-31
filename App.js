import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DeckScreen from "./components/DeckScreen";
import AddDeck from "./components/AddDeck";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DeckList" component={DeckScreen} />
        <Tab.Screen name="AddDeck" component={AddDeck} options={{
          title: "Add A New Deck"
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
