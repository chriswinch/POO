import React from 'react';
import { useAppContext } from '../../store';

export const useScore = () => {
  const [{ history }] = useAppContext();

  const badCards = history.filter(card => card.type === 'bad');
  const score = badCards.length / 5 * 100;

  if (score === 0) return { rawScore: score, score: `You are ${score}% poo`, message: "Clean as a whistle."};
  if (score > 0 && score <= 19) return { rawScore: score, score: `You are ${score}% poo`, message: "Can anyone smell that?" };
  if (score >= 20 && score <= 39) return { rawScore: score, score: `You are ${score}% poo`, message: "Maybe you need to wipe again?" };
  if (score >= 40 && score <= 59) return { rawScore: score, score: `You are ${score}% poo`, message: "You've left skidmarks\!" };
  if (score >= 60 && score <= 79) return { rawScore: score, score: `You are ${score}% poo`, message: "What a mess you\'ve made of yourself\!\!" };
  if (score >= 80 && score <= 99) return { rawScore: score, score: `You are ${score}% poo`, message: "You've just Borised your Johnson!" };
  if (score === 100) return { rawScore: score, score: `You are ${score}% poo`, message: "You're a gigantic shit!" };
  return { rawScore: null, score: null, message: null }
};

