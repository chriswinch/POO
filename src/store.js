import React, { createContext, useContext, useReducer } from 'react';
import { cardData } from './data';

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const constants = {
  UPDATE_CARD: 'update_card',
  UPDATE_CURRENT_CARD: 'update_current_card',
  UPDATE_CHOICE_HISTORY: 'update_choice_history'
};

export const initialState = {
  cardPairs: cardData,
  currentCard: -1,
  history: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_CARD: {
      const cardIndex = state.cardPairs.findIndex(card => card.id === action.payload.id);
      const cards = state.cardPairs;
      cards[cardIndex] = { ...cards[cardIndex], ...action.payload };
      return { ...state, cards };
    }
    case constants.UPDATE_CURRENT_CARD: {
      return { ...state, currentCard: action.payload };
    }
    case constants.UPDATE_CHOICE_HISTORY: {
      return { ...state, history: [...state.history, action.payload]};
    }
    default:
      return state;
  }
};

const Store = ({ children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

export default Store;
