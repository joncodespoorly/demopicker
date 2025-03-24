'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import { AppContextType, Contestant, AppState } from '../types';

const AppContext = createContext<AppContextType | undefined>(undefined);

const COLORS = [
  '#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D',
  '#43AA8B', '#577590', '#FF5DA2'
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [contestants, setContestants] = useState<Contestant[]>([]);
  const [currentState, setCurrentState] = useState<AppState>('idle');
  const [winner, setWinner] = useState<Contestant | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const prevContestantsRef = useRef<Contestant[]>([]);

  const addContestant = (name: string) => {
    if (contestants.length >= 8) return;
    
    const newContestant: Contestant = {
      id: crypto.randomUUID(),
      name,
      color: COLORS[contestants.length % COLORS.length]
    };
    
    setContestants(prev => [...prev, newContestant]);
  };

  const removeContestant = (id: string) => {
    setContestants(prev => prev.filter(c => c.id !== id));
    if (winner?.id === id) setWinner(null);
  };

  const spinWheel = () => {
    if (contestants.length < 2 || isSpinning) return;
    
    // Reset any previous winner
    setWinner(null);
    
    // Step 1: Determine a random winner first
    const randomIndex = Math.floor(Math.random() * contestants.length);
    const selectedWinner = contestants[randomIndex];
    
    // Step 2: Start spinning and set the winner
    // The wheel component will handle step 3 (ensuring the wheel lands on the winner)
    setCurrentState('spinning');
    setIsSpinning(true);
    setWinner(selectedWinner);
  };

  // End the spinning animation and show results
  const endSpin = () => {
    setCurrentState('result');
    setIsSpinning(false);
  };

  // Check if contestants array has changed 
  useEffect(() => {
    // Only reset if the contestants have actually changed
    // and not just on initial render
    if (prevContestantsRef.current.length > 0 && 
        JSON.stringify(prevContestantsRef.current) !== JSON.stringify(contestants)) {
      setCurrentState('idle');
      setWinner(null);
      setIsSpinning(false);
    }
    
    // Update the ref with current contestants
    prevContestantsRef.current = contestants;
  }, [contestants]);

  const value = {
    contestants,
    currentState,
    winner,
    addContestant,
    removeContestant,
    spinWheel,
    endSpin,
    isSpinning
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 