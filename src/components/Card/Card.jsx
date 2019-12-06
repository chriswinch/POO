import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const isActive = ({ currentCard }, initial, value, fallback) => {
  if (currentCard === undefined) return initial;
  if (currentCard) return value;
  return fallback;
}

const getCardBg = (props) => {
  if (props.currentCard) {
    return props.type === 'good' ? '#3A5963' : '#63443a';
  }

  return '#222222'
}

const CardWrapper = Styled.button`
  background: ${props => getCardBg(props)};
  border: 0;
  flex: 1;
  font-family: 'Montserrat', sans-serif;
  outline: 0;
  padding: ${props => isActive(props, '40px', '40px', '0')};
  transition:
    background .3s ease,
    max-height .3s ease,
    padding .2s ease,
    max-width .6s ease;
  max-height: ${props => isActive(props, '1000px', '1000px', '0')};
  overflow: hidden;
  margin: 0;
  text-align: center;
  
  h3 {
    transition: opacity .4s ease;
    opacity: ${props => isActive(props, 1, 1, 0)};
  }

  &:hover {
    background: ${props => props.currentCard ? getCardBg(props) : '#111111'};
    cursor: pointer;

    h3 {
      color: #fff;
    }
  }

  @media (min-width: 600px) {
    max-height: 2000px;
    max-width: ${props => isActive(props, '1000px', '2000px', '0')};
  }
`;

const CardTitle = Styled.h3`
  color: ${props => props.isActive ? '#fff' : '#999'};
  font-family: 'Montserrat', sans-serif;
  font-size: ${props => props.isActive ? '1.8em' : '10vw'};
  font-weight: normal;
  margin: 0;

  @media (min-width: 600px) {
    font-size: ${props => props.isActive ? '2.25vw' : '5vw'};
  }
`;

const CardEmoji = Styled.div`
  font-size: 15vw;

  @media (min-width: 600px) {
    font-size: 10vw;
  }
`;

const CardMeta = Styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;

  a {
    color: #fff;

  }

  @media (min-width: 500px) {
    font-size: 16px;
  }
  
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

const CardSource = Styled.p`
  padding-top: 40px;
  font-size: 12px;
`;

const Card = ({ type, title, explanation, party, source, updateCard, handleNext, currentCard }) => {
  const getCardEmoji = () => type === 'good' ? '👍' : '💩';
  return (
    <CardWrapper
      type={type}
      currentCard={currentCard}
      onClick={() => currentCard ? handleNext() : updateCard({ type, title, party })}
    >
      <CardEmoji>{currentCard && getCardEmoji()}</CardEmoji>
      <CardTitle isActive={currentCard}>{title}</CardTitle>
      {currentCard && (
        <CardMeta>
          <p>{explanation}</p>
          {/* <p>{party}</p> */}
          <CardSource>Source: <a href={source} target="_blank" rel="noopener noreferrer">{source}</a></CardSource>
        </CardMeta>
      )}
    </CardWrapper>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['good', 'bad'])
}

Card.defaultProps = {
  title: '',
  type: 'good'
}

export default Card;
