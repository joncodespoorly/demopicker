'use client';

import React from 'react';
import { useApp } from '../context/AppContext';
import Button from './ui/Button';

const SpinControl = () => {
  const { contestants, spinWheel, isSpinning } = useApp();
  const isDisabled = contestants.length < 2 || isSpinning;

  return (
    <div className="w-full flex justify-center mt-8">
      <Button
        onClick={spinWheel}
        disabled={isDisabled}
        isLoading={isSpinning}
        className="text-lg px-8 py-3"
        aria-label="Spin the wheel"
      >
        Spin the Wheel
      </Button>
    </div>
  );
};

export default SpinControl; 