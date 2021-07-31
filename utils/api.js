import AsyncStorage from '@react-native-async-storage/async-storage';
import {DECK_STORAGE_KEY} from "./_app";

// Eventually, this should be within AsyncStorage.
const decks = {
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

export async function getDecks() {
  try {
    const decks = await AsyncStorage.getItem(DECK_STORAGE_KEY);
    return decks !== null ? JSON.parse(decks) : null;
  } catch(e) {
    console.log("Error Fetching Decks From Storage.")
  }
}

export function getDeck(title) {
  return decks[title];
}

export function saveDeckTitle(title) {
  decks[title] = {
    title: title,
    questions: []
  }
}

export function addCardToDeck(title, card) {
  decks[title] = {
    ...decks[title],
    questions: [
      ...decks[title].questions,
      card
    ]
  }
}
