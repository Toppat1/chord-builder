import { useContext } from 'react';
import { MusicalKeyContext } from '../contexts/MusicalKeyContext';

export function KeyChanger() {
  const { musicalKey, updateMusicalKey } = useContext(MusicalKeyContext);
  const keyNote = musicalKey.split(' ')[0];
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  function changeKey() {
    updateMusicalKey(`${notes[(notes.indexOf(keyNote) + 1) % 12]} major`);
  }

  return <button onClick={changeKey}>Change Key to {notes[(notes.indexOf(keyNote) + 1) % 12]}</button>;
}
