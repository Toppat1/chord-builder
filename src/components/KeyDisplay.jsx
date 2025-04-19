import { useMusicalKey } from '../contexts/MusicalKeyContext';

export function KeyDisplay() {
  const { musicalKey } = useMusicalKey();

  return <button>{musicalKey}</button>;
}
