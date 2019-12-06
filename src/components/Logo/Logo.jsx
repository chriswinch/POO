import React from 'react';
import Styled from 'styled-components';

const LogoWrapper = Styled.a`
  background: transparent;
  border: 0;
  position: absolute;
  text-decoration: none;
  
  @media (min-width: 600px) {
    position: relative;
    transform: rotate(90deg);
  }
`;

const LogoTitle = Styled.h1`
  background: #000;
  color: #fff;
  margin: 0;
  padding: 5.5px 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  height: 100%;
  display: flex;

  span {
    display: flex;
    transition: .3s ease;
  }

  i {
    display: inline-block;
    overflow: hidden;
    max-width: 0px;
    padding-right: 0px;
    transition: .3s ease;
    font-style: normal;
    text-transform: uppercase;
  }

  &:hover {
    cursor: pointer;
    span {
      margin-right: 10px;
      width: auto;
    }

    i {
      max-width: 200px;
      padding-right: 5px;
    }
  }

  @media (min-width: 600px) {
    height: 100px;
    padding: 30px 20px;
    position: absolute;
    top: -50px;
    left: 50px;
  }
`;

const Logo = ({ setShowAbout }) => {
  return (
    <LogoWrapper onClick={() => setShowAbout(true)}>
      <LogoTitle><span>P<i>ick</i></span> <span>O<i>nly</i></span> <span>O<i>ne</i></span></LogoTitle>
    </LogoWrapper>
  )
}

export default Logo;
