import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Splash, { SplashContent } from '../Splash';
import { useScore } from '../Score';
import Button from '../Button';
import History from '../History';

const VoteResult = Styled.h3`
  font-size: 8vw;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 800px) {
    font-size: 4vw;
  }
`;

const VoteMessage = Styled.h2`
  font-size: 11vw;
  margin: 0;

  @media (min-width: 480px) {
    font-size: 9vw;
  }

  @media (min-width: 600px) {
    font-size: 7vw;
  }
`;

const ButtonWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const EndSplash = () => {
  const { rawScore, score, message, share } = useScore();
  const shareText = `${encodeURI(rawScore + '%')} @poovotes. ${share} Find out how you'll vote in %23GE2019 at https://poo.vote&hashtags=GetTheToriesOut,#poovotes`;
  return (
    <Splash end>
      <SplashContent>
        <VoteMessage>{message}</VoteMessage>
        <History />
        <VoteResult>{score}</VoteResult>
        <ButtonWrapper>
          <Button as="a" href={`https://twitter.com/intent/tweet?text=${shareText}`}>Share on Twitter</Button>
          <Button onClick={() => window.location.reload()}>Start Again!</Button>
        </ButtonWrapper>
      </SplashContent>
    </Splash>
  )
}

export default EndSplash;
