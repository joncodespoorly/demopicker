'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';

const WinnerDisplay = () => {
  const { winner, currentState } = useApp();

  return (
    <div className="w-full text-center mb-8">
      <AnimatePresence mode="wait">
        {currentState === 'result' && winner && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-3xl font-bold text-white"
          >
            The Winner is: {winner.name}!
          </motion.div>
        )}
        {currentState === 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xl text-gray-300"
          >
            Spin the wheel to select a winner
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WinnerDisplay; 