import { useMusicalKey } from '../contexts/MusicalKeyContext';
import { useSynth } from '../contexts/SynthContext';
import * as Tone from 'tone';

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const modifiers = ['sus4', 'sus2', '7', 'maj7', 'add2', 'octave', '6', '6omit5', 'b5'];
const numeralMappings = {
  I: 0,
  II: 2,
  III: 4,
  IV: 5,
  V: 7,
  VI: 9,
  VII: 11,
};

export function ChordButton({ chord }) {
  const synth = useSynth();
  const { musicalKey } = useMusicalKey();
  const type = notes.some(note => chord.includes(note.toUpperCase())) ? 'name' : 'numeral';

  // If numeral, convert to name type

  // Determine chord type: Major, Minor, Diminished, Augmented
  // Determine modifiers: 7, maj9, sus2, etc.
  // Determine notes to play, including root note being the lowest-pitched

  // Convert numeral to name chord type
  // NEED TO HANDLE SHARP AND FLATS

  // Return longest item in an array
  function longestItem(arr) {
    let longest = '';
    for (const item of arr) {
      if (item.length > longest.length) {
        longest = item;
      }
    }
    return longest;
  }

  function returnNumeral(chordNumeral) {
    let matches = [];
    for (const numeral in numeralMappings) {
      if (chordNumeral.includes(numeral)) {
        matches.push(numeral);
      }
    }
    if (matches.length > 0) {
      return longestItem(matches);
    } else {
      return null;
    }
  }

  // If the chord is a numeral, replace it with its name counterpart
  // KEEP EXTENSIONS LIKE m and sus4
  const chordNumeral = chord;
  chord =
    chord.replace(
      returnNumeral(chord),
      notes[(notes.indexOf(musicalKey.split(' ')[0]) + numeralMappings[returnNumeral(chord)]) % 12]
    ) ?? chord;

  function hasAccidental(chord) {
    return chord[1] == '#' || chord[1] == 'b' ? true : false;
  }

  // Return root note of chord, requires it to be the name type
  function findRoot(chord) {
    return hasAccidental(chord) ? chord.substring(0, 2) : chord[0];
  }

  // Determine if Major or Minor chord
  function determineTonality(chord) {
    if (chord.includes('aug')) {
      return 'augmented';
    } else if (chord.includes('dim')) {
      return 'diminished';
    } else {
      if (hasAccidental(chord)) {
        return (chord[2] == 'm') & (chord[3] != 'a') ? 'minor' : 'major';
      } else {
        return (chord[1] == 'm') & (chord[2] != 'a') ? 'minor' : 'major';
      }
    }
  }

  // Determine modifier(s)
  function getChordModifiers(chordName) {
    let modifierList = [];
    for (const modifier of modifiers) {
      if (chordName.includes(modifier)) {
        if (
          (modifier == '7') & (chordName[chordName.indexOf('7') - 1] == 'j') ||
          (modifier == '6') & (chordName[chordName.indexOf('6') + 1] == 'o')
        ) {
        } else {
          modifierList.push(modifier);
        }
      }
    }
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
      case 'augmented':
        triadSemitones = [0, 4, 8];
        break;
      case 'diminished':
        triadSemitones = [0, 3, 6];
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
        case 'octave':
          triadSemitones.push(12);
          break;
        case 'maj7':
          triadSemitones.push(11);
          break;
        case '7':
          triadSemitones.push(10);
          break;
        case '6':
          triadSemitones.push(9);
          break;
        case '6omit5':
          triadSemitones[2] = 9;
          break;
        case 'b5':
          triadSemitones[2] = 6;
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
    <button onMouseDown={() => playChord(assignOctaves(getNotes(chord)))} style={{ width: '100px', height: '60px' }}>
      {chord == chordNumeral ? chord : chordNumeral}
      <br />
      {chord == chordNumeral ? null : chord}
    </button>
  );
}
