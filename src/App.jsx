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
      <h1>
        Key is {musicalKey}. Key Letter is {musicalKey.split(' ')[0]}.
      </h1>
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
