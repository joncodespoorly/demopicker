'use client';

import React, { useState, FormEvent } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import ContestantItem from './ContestantItem';
import Input from './ui/Input';
import Button from './ui/Button';

const ContestantManager = () => {
  const { contestants, addContestant, removeContestant } = useApp();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Please enter a name');
      return;
    }

    if (contestants.length >= 8) {
      setError('Maximum 8 contestants allowed');
      return;
    }

    addContestant(name.trim());
    setName('');
    setError('');
  };

  return (
    <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6">Contestants</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex space-x-2">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name..."
            error={error}
            aria-label="Contestant name"
            className="bg-gray-700 text-white placeholder-gray-400 border-gray-600"
          />
          <Button type="submit" aria-label="Add contestant">
            +
          </Button>
        </div>
      </form>

      <div className="space-y-2">
        <AnimatePresence>
          {contestants.map((contestant) => (
            <ContestantItem
              key={contestant.id}
              contestant={contestant}
              onRemove={removeContestant}
            />
          ))}
        </AnimatePresence>
      </div>

      {contestants.length === 0 && (
        <p className="text-gray-400 text-center py-4">
          Add contestants to begin
        </p>
      )}
    </div>
  );
};

export default ContestantManager; 