import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useMusicalKey } from './contexts/MusicalKeyContext.jsx';
import { KeyDisplay } from './components/KeyDisplay.jsx';
import { KeyTonicPlayer } from './components/KeyTonicPlayer.jsx';
import { KeyChanger } from './components/KeyChanger.jsx';
import { ChordButton } from './components/ChordButton.jsx';

function App() {
  const { musicalKey } = useMusicalKey();
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        {
          //<img src={image} alt='alt-text' style={{width:'300px', height:'auto'}}/>
        }
      </div>
      <h1>
        Chord Builder
      </h1>
      <ChordButton chord={musicalKey.split(' ')[0]}/>
      <ChordButton chord="C" />
      <ChordButton chord="Cm" />
      <ChordButton chord="Csus4" />
      <ChordButton chord="Csus2" />
      <ChordButton chord="Coctave" />
      <ChordButton chord="Cmaj7" />
      <ChordButton chord="C7" />
      <ChordButton chord="Caug" />
      <ChordButton chord="C6" />
      <ChordButton chord="C6omit5" />
      <ChordButton chord="Cm7" />
      <ChordButton chord="Cmmaj7" />
      <h1>
        Key is {musicalKey}. Key Letter is {musicalKey.split(' ')[0]}.
      </h1>
      <div>
        <ChordButton chord="D#maj7" />
        <ChordButton chord="D#m7" />
        <ChordButton chord="Dm7" />
        <ChordButton chord="C#maj7" />
        <ChordButton chord="Cm7" />
        <ChordButton chord="D7" />
        <ChordButton chord="Gm7" />
        <ChordButton chord="Fm7" />
        <ChordButton chord="F" />
        <ChordButton chord="A#" />
      </div>
      <KeyDisplay />
      <KeyTonicPlayer />
      <KeyChanger />
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
