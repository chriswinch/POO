import React from 'react';
import Styled from 'styled-components';
import { useAppContext } from '../../store';

const HistoryWrapper = Styled.div`
  margin: 40px 0;
`;

const HistoryList = Styled.div`
  margin: 0;
  padding: 0;
`;

const HistoryItem = Styled.p`
  color: #fff;
  font-size: 14px;
  margin: 0;
  padding: 0 0 .2rem;

  @media (min-width: 768px) {
    font-size: 15px
    padding: 0 0 0.9rem
  }

  @media (min-width: 1024px) {
    font-size: 24px
  }

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

const History = () => {
  const [{ history }] = useAppContext();

  if (!history.length) return null;

  return (
    <HistoryWrapper>
      <HistoryList>
        {history.map((item, i) => {
          return (
            <HistoryItem key={item.title}>
              "{item.title}" — {item.party} {item.type === 'good' ? '👍' : '💩'}
            </HistoryItem>
          );
        })}
      </HistoryList>
    </HistoryWrapper>
  )
}

export default History;
