import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const SplashWrapper = Styled.div`
  background: rgba(0, 0, 0, 0.95);
  left: 0;
  height: 100vh;
  position: absolute;
  display: flex;
  top: 0;
  width: 100vw;
  z-index: 10;
`;

const SplashInner = Styled.div`
  background: #000;
  color: #fff;
  height: 100%;
  padding: 30px 40px;
  width: ${props => props.end ? '1024px' : '800px'};
  margin: 0 auto;

  @media (min-width: 600px) {
    margin: 80px auto;
    padding: '50px 10vw';
  }
`;

export const SplashContent = Styled.div`
  font-size: 15px;
  margin-bottom: 30px;

  @media (min-width: 375px) {
    font-size: 17px;
  }

  @media (min-width: 400px) {
    font-size: 20px;
    margin-bottom: 40px;
  } 
`;

const SplashTitle = Styled.h1`
  font-size: 29.5px;
  text-transform: uppercase;

  @media (min-width: 360px) {
    font-size: 34px;
  }

  @media (min-width: 375px) {
    font-size: 36px;
  }

  @media (min-width: 400px) {
    font-size: 40.5px;
  }
`;

const Splash = ({ end, children }) => (
  <SplashWrapper>
    <SplashInner end={end}>
      {!end && <SplashTitle>Pick Only One</SplashTitle>}
      {children}
    </SplashInner>
  </SplashWrapper>
)

export default Splash;
