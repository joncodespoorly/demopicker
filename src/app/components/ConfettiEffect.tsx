'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';

const ConfettiEffect = () => {
  const { currentState } = useApp();

  useEffect(() => {
    if (currentState === 'result') {
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 }
        });

        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 }
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [currentState]);

  return null;
};

export default ConfettiEffect; 