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
      <h1>Chord Builder</h1>
      <ChordButton chord={musicalKey.split(' ')[0]} />
      <ChordButton chord='C' />
      <ChordButton chord='Cm' />
      <ChordButton chord='Csus4' />
      <ChordButton chord='Csus2' />
      <ChordButton chord='Coctave' />
      <ChordButton chord='Cmaj7' />
      <ChordButton chord='C7' />
      <ChordButton chord='Caug' />
      <ChordButton chord='C6' />
      <ChordButton chord='C6omit5' />
      <ChordButton chord='Cm7' />
      <ChordButton chord='Cmmaj7' />
      <ChordButton chord='C#m7b5' />
      <ChordButton chord='Cadd2' />
      <ChordButton chord='Cadd9' />
      <ChordButton chord='Cmaj9' />
      <ChordButton chord='C9' />
      <div>
        <ChordButton chord='I' />
        <ChordButton chord='II' />
        <ChordButton chord='III' />
        <ChordButton chord='IV' />
        <ChordButton chord='V' />
        <ChordButton chord='VI' />
        <ChordButton chord='VII' />
      </div>
      <div>
        <ChordButton chord='Im' />
        <ChordButton chord='IIm' />
        <ChordButton chord='IIIm' />
        <ChordButton chord='IVm' />
        <ChordButton chord='Vm' />
        <ChordButton chord='VIm' />
        <ChordButton chord='VIIdim' />
      </div>
      <div>
        <ChordButton chord='I7' />
        <ChordButton chord='II7' />
        <ChordButton chord='III7' />
        <ChordButton chord='IV7' />
        <ChordButton chord='V7' />
        <ChordButton chord='VI7' />
        <ChordButton chord='VII7' />
      </div>
      <div>
        <ChordButton chord='Imaj7' />
        <ChordButton chord='IImaj7' />
        <ChordButton chord='IIImaj7' />
        <ChordButton chord='IVmaj7' />
        <ChordButton chord='Vmaj7' />
        <ChordButton chord='VImaj7' />
        <ChordButton chord='VIImaj7' />
      </div>
      <div>
        <ChordButton chord='Im7' />
        <ChordButton chord='IIm7' />
        <ChordButton chord='IIIm7' />
        <ChordButton chord='IVm7' />
        <ChordButton chord='Vm7' />
        <ChordButton chord='VIm7' />
        <ChordButton chord='VIIm7' />
      </div>
      <div>
        <ChordButton chord='Immaj7' />
        <ChordButton chord='IImmaj7' />
        <ChordButton chord='IIImmaj7' />
        <ChordButton chord='IVmmaj7' />
        <ChordButton chord='Vmmaj7' />
        <ChordButton chord='VImmaj7' />
        <ChordButton chord='VIImmaj7' />
      </div>
      <div>
        <ChordButton chord='Iadd9' />
        <ChordButton chord='IIadd9' />
        <ChordButton chord='IIIadd9' />
        <ChordButton chord='IVadd9' />
        <ChordButton chord='Vadd9' />
        <ChordButton chord='VIadd9' />
        <ChordButton chord='VIIadd9' />
      </div>
      <div>
        <ChordButton chord='Imaj9' />
        <ChordButton chord='IImaj9' />
        <ChordButton chord='IIImaj9' />
        <ChordButton chord='IVmaj9' />
        <ChordButton chord='Vmaj9' />
        <ChordButton chord='VImaj9' />
        <ChordButton chord='VIImaj9' />
      </div>
      <div>
        <ChordButton chord='I9' />
        <ChordButton chord='II9' />
        <ChordButton chord='III9' />
        <ChordButton chord='IV9' />
        <ChordButton chord='V9' />
        <ChordButton chord='VI9' />
        <ChordButton chord='VII9' />
      </div>
      <h1>
        Key is {musicalKey}. Key Letter is {musicalKey.split(' ')[0]}.
      </h1>
      <div>
        <ChordButton chord='D#maj7' />
        <ChordButton chord='D#m7' />
        <ChordButton chord='Dm7' />
        <ChordButton chord='C#maj7' />
        <ChordButton chord='Cm7' />
        <ChordButton chord='D7' />
        <ChordButton chord='Gm7' />
        <ChordButton chord='Fm7' />
        <ChordButton chord='F' />
        <ChordButton chord='A#' />
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
