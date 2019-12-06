import React, { useEffect, useState,} from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Card from '../Card';
import Nav from '../Nav';
import EndSplash from '../EndSplash';
import StartSplash from '../StartSplash';
import ProgressBar from '../ProgressBar';

import { useAppContext, constants } from '../../store';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.vh}px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const useVh = () => {
  const [vh, setVh] = useState(window.innerHeight)
  useEffect(() => {
    window.addEventListener('resize', () => setVh(window.innerHeight));
    return () => {
      window.removeEventListener('resize', setVh(window.innerHeight));
    }
  })
  return vh
}

const getRandomItem = (data) => data[Math.floor(Math.random()*data.length)]
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const initialCardData = {
  good: { title: '...'},
  bad: { title: '...'}
};

const CardSelection = () => {
  const [{ cardPairs, currentCard, history }, dispatch] = useAppContext();
  const [cardData, setCardData] = useState({});
  const [cards, setCards] = useState([initialCardData.good, initialCardData.bad])
  const [showAbout, setShowAbout] = useState(false);
  const vh = useVh();

  const updateCards = () => {
    const cardSets = cardPairs.filter(pair => !pair.choice);
    const randomPair = getRandomItem(shuffle(cardSets));
    
    if (history.length < 5) {
      setCardData(randomPair);
      const { good, bad } = randomPair;
      setCards(shuffle([good, bad]));
    } else {
      setCardData(null)
    }
  };

  useEffect(() => {
    updateCards()
  }, []);

  const handleUpdateCard = (payload) => {
    dispatch({ type: constants.UPDATE_CARD, payload: { ...cardData, choice: payload.type } });
    dispatch({ type: constants.UPDATE_CURRENT_CARD, payload: { ...cardData, choice: payload.type } });
    dispatch({ type: constants.UPDATE_CHOICE_HISTORY, payload })
  };

  const handleNext = () => {
    dispatch({ type: constants.UPDATE_CURRENT_CARD, payload: -1 });
    updateCards();
  }

  const card1 = cards ? cards[0] : initialCardData.good;
  const card2 = cards ? cards[1] : initialCardData.good;
  const isCurrentCard = (card) => currentCard[currentCard.choice] && currentCard[currentCard.choice].type === card.type;

  return (
    <Wrapper vh={vh}>
      <StartSplash setShowAbout={setShowAbout} isActive={showAbout} />
      {!cardData && <EndSplash />}
      {card1 && <Card {...card1} updateCard={handleUpdateCard} handleNext={handleNext} currentCard={isCurrentCard(card1)} />}
      <Nav currentCard={currentCard} handleNext={handleNext} setShowAbout={setShowAbout} />
      {card2 && <Card {...card2} updateCard={handleUpdateCard} handleNext={handleNext} currentCard={isCurrentCard(card2)} />}
      <ProgressBar />
    </Wrapper>
  );
};

export default CardSelection;
