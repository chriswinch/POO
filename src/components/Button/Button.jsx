import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

export const StyledButton = Styled.button`
  background: ${props => props.theme === 'light' ? '#fff' : 'transparent'}
  border: ${props => props.theme === 'light' ? 'none' : '4px solid #fff'}
  color: ${props => props.theme === 'light' ? '#000' : '#fff'};
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  padding: 15px 20px;
  margin: 0 20px 15px 0;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: .3s ease;

  &:hover {
    border: 8px solid #fff;
    cursor: pointer;
    padding: 11px 16px;
  }
`;

const Button = ({ children, theme, onClick, as, href }) => {
  return (
    <StyledButton as={as} theme={theme} onClick={onClick} href={href} target={href ? '_black' : false}>{children}</StyledButton>
  )
}

export default Button;
