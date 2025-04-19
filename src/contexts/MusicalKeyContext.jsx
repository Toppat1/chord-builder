import { createContext, useContext, useState } from 'react';

// Create context
export const MusicalKeyContext = createContext();

// Create provider component
export function MusicalKeyProvider({ children }) {
  const [musicalKey, setMusicalKey] = useState('G major'); // Set default key

  const updateMusicalKey = newMusicalKey => {
    setMusicalKey(newMusicalKey);
  };

  return <MusicalKeyContext.Provider value={{ musicalKey, updateMusicalKey }}> {children} </MusicalKeyContext.Provider>;
}
