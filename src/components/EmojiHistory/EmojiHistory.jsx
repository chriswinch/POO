import React from 'react';
import Styled from 'styled-components';
import { useAppContext } from '../../store';

const EmojiHistoryWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  width: 100%;

  p {
    font-size: 10vw;
    margin: 0;
    padding: 0;
  }
`;

const EmojiHistory = () => {
  const [{ history }] = useAppContext();

  return (
    <EmojiHistoryWrapper>
      {history.map(item => <p>{item.type === 'good' ? '👍' : '💩'}</p>)}
    </EmojiHistoryWrapper>
  )
}

export default EmojiHistory;
