import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import * as Tone from 'tone';
import { useContext } from 'react';
import { MusicalKeyContext } from './contexts/MusicalKeyContext.jsx';
import { KeyDisplay } from './components/KeyDisplay.jsx';

function App() {
  const { musicalKey, updateMusicalKey } = useContext(MusicalKeyContext);
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
      </div>
      <h1>Vite + React = Bababooey. This is so sick. <br />It's instant for the local site. <br />I just need to commit for the live site too. <br />No more npm run build and deploy! :D</h1>
      <button></button>
      <h1>Key is {musicalKey}. Key Letter is  {musicalKey.split(' ')[0]}.</h1>
      <KeyDisplay />
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
