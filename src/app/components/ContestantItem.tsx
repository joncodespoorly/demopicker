'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Contestant } from '../types';

interface ContestantItemProps {
  contestant: Contestant;
  onRemove: (id: string) => void;
}

const ContestantItem = ({ contestant, onRemove }: ContestantItemProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onRemove(contestant.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center justify-between p-3 bg-gray-700 rounded-lg shadow-sm group border border-gray-600"
    >
      <div className="flex items-center space-x-3">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: contestant.color }}
        />
        <span className="text-gray-100">{contestant.name}</span>
      </div>
      <button
        onClick={() => onRemove(contestant.id)}
        onKeyDown={handleKeyDown}
        className="p-1 text-gray-400 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label={`Remove ${contestant.name}`}
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default ContestantItem; 