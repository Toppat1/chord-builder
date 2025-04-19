import { createContext, useContext, useRef } from 'react';
import * as Tone from 'tone';

// Create Context
export const SynthContext = createContext();

// Create Provider
export function SynthProvider({ children }) {
  const synthRef = useRef(new Tone.PolySynth(Tone.Synth).toDestination());

  return <SynthContext.Provider value={synthRef.current}>{children}</SynthContext.Provider>;
}

// Create custom hook to use the synth in any component
export function useSynth() {
  return useContext(SynthContext);
}
