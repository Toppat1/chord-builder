import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { MusicalKeyProvider } from './contexts/MusicalKeyContext.jsx';
import { SynthProvider } from './contexts/SynthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SynthProvider>
      <MusicalKeyProvider>
        <App />
      </MusicalKeyProvider>
    </SynthProvider>
  </StrictMode>
);
