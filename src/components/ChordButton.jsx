import { useMusicalKey } from '../contexts/MusicalKeyContext';
import { useSynth } from '../contexts/SynthContext';
import * as Tone from 'tone';

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const modifiers = ['sus4', 'sus2', '7', 'maj7', 'add2'];

export function ChordButton({ chord }) {
  const synth = useSynth();
  const { musicalKey } = useMusicalKey();
  const type = notes.some(note => chord.includes(note.toUpperCase())) ? 'name' : 'numeral';

  // If numeral, convert to name type

  // Determine chord type: Major, Minor, Diminished, Augmented
  // Determine modifiers: 7, maj9, sus2, etc.
  // Determine notes to play, including root note being the lowest-pitched

  // Return root note of chord, requires it to be the name type
  function findRoot(chord) {
    if (chord[1] == '#' || chord[1] == 'b') {
      return chord.substring(0, 2);
    } else {
      return chord[0];
    }
  }

  // Determine if Major or Minor chord
  function determineTonality(chord) {
    return chord.includes('m') ? 'minor' : 'major';
  }

  // Determine modifier(s)
  function getChordModifiers(chordName) {
    let modifierList = [];
    for (let modifier of modifiers) {
      if (chordName.includes(modifier)) {
        modifierList.push(modifier);
      }
    }

    console.log(modifierList);
    return modifierList;
  }

  // Assign octaves from 4 - Change if numerals
  function assignOctaves(arrayNotes) {
    let octave = 4;
    let lastIndex = notes.indexOf(arrayNotes[0]);

    return arrayNotes.map((note, index) => {
      const noteIndex = notes.indexOf(note);

      if (index !== 0 && noteIndex <= lastIndex) {
        octave++; // Wrap up octave if new note is lower or same index
      }
      lastIndex = noteIndex;
      return `${note}${octave}`;
    });
  }

  function getNotes(chord) {
    // Set root note
    const rootNote = findRoot(chord);

    // Major, Minor, Diminished, or Augmented (half-diminished??)
    const tonality = determineTonality(chord);

    // Determine semitone differences between each note in the initial triad chord (without modifiers)
    let triadSemitones = [];
    switch (tonality) {
      case 'major':
        triadSemitones = [0, 4, 7];
        break;
      case 'minor':
        triadSemitones = [0, 3, 7];
        break;
    }

    // Handle modifiers
    for (let modifier of getChordModifiers(chord)) {
      switch (modifier) {
        case 'sus4':
          triadSemitones[1] = 5;
          break;
        case 'sus2':
          triadSemitones[1] = 2;
          break;
      }
    }

    // Create an array of notes that are in the chord, in pitch order
    let noteNames = [];
    triadSemitones.forEach(semitone => {
      noteNames.push(notes[(notes.indexOf(rootNote) + semitone) % 12]);
    });

    return noteNames;
  }

  async function playChord(arrayNotes) {
    console.log(`Playing notes: ${arrayNotes}`);
    await Tone.start();
    synth.triggerAttackRelease(arrayNotes, '16n');
  }

  return (
    <button onMouseDown={() => playChord(assignOctaves(getNotes(chord)))}>
      {chord} - modifiers are {getChordModifiers(chord)}
    </button>
  );
}
