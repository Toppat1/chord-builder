import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useContext } from 'react';
import { MusicalKeyContext } from './contexts/MusicalKeyContext.jsx';
import { KeyDisplay } from './components/KeyDisplay.jsx';
import { KeyTonicPlayer } from './components/KeyTonicPlayer.jsx';
import { KeyChanger } from './components/KeyChanger.jsx';

function App() {
  const { musicalKey } = useContext(MusicalKeyContext);
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
        Vite + React = Bababooey. This is so sick. <br />
        It's instant for the local site. <br />I just need to commit for the live site too. <br />
        No more npm run build and deploy! :D
      </h1>
      <button></button>
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
