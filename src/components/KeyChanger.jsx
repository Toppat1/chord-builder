import { useMusicalKey } from '../contexts/MusicalKeyContext';

export function KeyChanger() {
  const { musicalKey, updateMusicalKey } = useMusicalKey();
  const keyNote = musicalKey.split(' ')[0];
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  function changeKey() {
    updateMusicalKey(`${notes[(notes.indexOf(keyNote) + 1) % 12]} major`);
  }

  return <button onClick={changeKey}>Change Key to {notes[(notes.indexOf(keyNote) + 1) % 12]}</button>;
}
