import { useContext } from 'react';
import { MusicalKeyContext } from '../contexts/MusicalKeyContext';
import * as Tone from 'tone';

export function KeyTonicPlayer() {
  const { musicalKey } = useContext(MusicalKeyContext);
  const keyNote = musicalKey.split(' ')[0];

  const synth = new Tone.PolySynth(Tone.Synth).toDestination();

  async function playKeyTonic() {
    await Tone.start();

    synth.triggerAttackRelease(`${keyNote}4`, '16n');
  }

  return <button onMouseDown={playKeyTonic}>Play {keyNote}</button>;
}
