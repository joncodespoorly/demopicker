'use client';

import React from 'react';
import { AppProvider } from './context/AppContext';
import ContestantManager from './components/ContestantManager';
import RouletteWheel from './components/RouletteWheel';
import WinnerDisplay from './components/WinnerDisplay';
import SpinControl from './components/SpinControl';
import ConfettiEffect from './components/ConfettiEffect';

export default function Home() {
  return (
    <AppProvider>
      <main className="min-h-screen bg-gray-900 py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Demo Roulette
        </h1>
        
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-8">
          <div className="w-full lg:w-1/3">
            <ContestantManager />
          </div>
          
          <div className="w-full lg:w-2/3 flex flex-col items-center">
            <WinnerDisplay />
            <RouletteWheel />
            <SpinControl />
          </div>
        </div>
        
        <ConfettiEffect />
      </main>
    </AppProvider>
  );
}
