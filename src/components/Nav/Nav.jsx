import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Logo from '../Logo';

const NavWrapper = Styled.div`
  background: #333;
  color: #fff;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  flex-direction: row;
  height: 50px;
  width: 100vw;
  position: relative;

  @media (min-width: 600px) {
    flex-direction: column;
    height: 100vh;
    width: 100px;
  }
`;

const NextButton = Styled.button`
  background: #333333;
  border: none;
  color: ${props => props.currentCard !== -1 ? '#fff' : '#999'};
  flex: 1;
  font-size: 32px;
  font-wieght: 300;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
  padding: 0 20px;              
  transition: opacity .3s ease;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 600px) {
    height: 100px;
    padding: 0;
  }
`;

const Nav = ({ currentCard, handleNext, setShowAbout }) => {
  return (
    <NavWrapper>
      <Logo setShowAbout={setShowAbout} />
      <NextButton
        currentCard={currentCard}
        onClick={handleNext}
        disabled={currentCard === -1}
      >
        {currentCard !== -1 ? '➜' : 'or'}
      </NextButton>
    </NavWrapper>
  )
}

export default Nav;
