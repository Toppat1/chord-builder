import { useContext } from 'react';
import { MusicalKeyContext } from '../contexts/MusicalKeyContext';

export function KeyDisplay() {
  const { musicalKey } = useContext(MusicalKeyContext);

  return <button>{musicalKey}</button>;
}
