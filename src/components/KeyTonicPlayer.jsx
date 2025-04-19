import { useMusicalKey } from '../contexts/MusicalKeyContext';
import { useSynth } from '../contexts/SynthContext';
import * as Tone from 'tone';

export function KeyTonicPlayer() {
  const synth = useSynth();

  const { musicalKey } = useMusicalKey();
  const keyNote = musicalKey.split(' ')[0];

  async function playKeyTonic() {
    await Tone.start();
    synth.triggerAttackRelease(`${keyNote}4`, '16n');
  }

  return <button onMouseDown={playKeyTonic}>Play {keyNote}</button>;
}
