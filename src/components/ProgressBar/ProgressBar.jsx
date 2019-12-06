import React from 'react';
import Styled from 'styled-components';
import { useAppContext } from '../../store';

const Progress = Styled.div`
  background: #111;
  position: absolute;
  bottom: 0;
  height: 10px;
  width: 100%;

  &:after {
    background: #555;
    content: "";
    display: block;
    height: 10px;
    top: 0;
    left: 0;
    position: absolute;
    transition: width .3s ease;
    width: ${props => props.history.length / 5 * 100}%;
  }
`;

const ProgressBar = () => {
  const [{ history }] = useAppContext();
  console.log(history);
  return (
    <Progress history={history} />
  )
}

export default ProgressBar;
