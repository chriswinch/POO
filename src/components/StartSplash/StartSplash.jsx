import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Splash, { SplashContent } from '../Splash';
import Button from '../Button';

const StartSplashWrapper = Styled.div`
  height: ${({ isActive }) => isActive ? 'auto' : '0px'};
  position: relative;
  transition: transform .4s ease;
  transform: ${({ isActive }) => isActive ? 'translateY(0)' : 'translateY(calc(-100vh - 500px))'};
  z-index: 100;
`;

const StartSplash = ({ setShowAbout, isActive }) => {
  return (
    <StartSplashWrapper isActive={isActive}>
      <Splash>
        <SplashContent>
          <p>On the 12th December, the UK will vote in a general election that will determine the fate of the country and the consequences are great.</p>
          <p>There will be a number of parties on the ballot, but there's one in particular that you really must not choose if you are anything other than a complete and utter poo. The Tories.</p>
          <p>Here's some practice to ensure you're going into this election with the right head.</p>
        </SplashContent>
        <Button onClick={() => setShowAbout(false)}>Continue Voting!</Button>
        <Button onClick={() => window.location.reload()}>Restart</Button>
      </Splash>
    </StartSplashWrapper>
  )
};

export default StartSplash;
