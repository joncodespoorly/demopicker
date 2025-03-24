'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Contestant } from '../types';

const RouletteWheel = () => {
  const { contestants, currentState, winner, isSpinning, endSpin } = useApp();
  const [rotation, setRotation] = useState(0);
  const size = 400;
  const center = size / 2;
  const strokeWidth = 2;
  
  // Calculate final rotation to land on winner
  const getWinnerRotation = (contestant: Contestant | null) => {
    if (!contestant || contestants.length === 0) return 0;
    
    // Find the winner's position in the array
    const winnerIndex = contestants.findIndex(c => c.id === contestant.id);
    if (winnerIndex === -1) return 0;
    
    // Calculate the segment size in degrees
    const segmentSize = 360 / contestants.length;
    
    // Calculate the rotation needed for the winner segment to be at the top (12 o'clock position)
    // SVG rotates clockwise, so we need a negative angle to position our segment correctly
    // Each segment starts at (index * segmentSize) degrees
    // We need to center it, so we add half a segment (segmentSize / 2)
    // Then we need 360 degrees for proper alignment (so the winner is at the top)
    const targetRotation = 360 - ((winnerIndex * segmentSize) + (segmentSize / 2));
    
    return targetRotation % 360; // Normalize to 0-360 range
  };
  
  // Handle wheel animation when state changes
  useEffect(() => {
    if (currentState === 'spinning' && winner && isSpinning) {
      // Calculate rotation needed to land on winner
      const winnerRotation = getWinnerRotation(winner);
      
      // Add extra full rotations (5-7) for a good spin effect
      const extraRotations = Math.floor(Math.random() * 3) + 5; // 5-7 full rotations
      const finalRotation = 360 * extraRotations + winnerRotation;
      
      // Set the rotation to animate the wheel
      setRotation(finalRotation);
    } else if (currentState === 'idle') {
      setRotation(0);
    }
  }, [currentState, winner, isSpinning, contestants.length]);

  const getSegmentPath = (index: number) => {
    const angle = (360 / contestants.length) * index;
    const startAngle = (angle * Math.PI) / 180;
    const endAngle = ((angle + 360 / contestants.length) * Math.PI) / 180;
    
    const x1 = center + Math.cos(startAngle) * center;
    const y1 = center + Math.sin(startAngle) * center;
    const x2 = center + Math.cos(endAngle) * center;
    const y2 = center + Math.sin(endAngle) * center;
    
    return `M ${center} ${center} L ${x1} ${y1} A ${center} ${center} 0 0 1 ${x2} ${y2} Z`;
  };

  const getTextPosition = (index: number) => {
    const angle = (360 / contestants.length) * (index + 0.5);
    const radius = center * 0.65;
    const x = center + Math.cos((angle * Math.PI) / 180) * radius;
    const y = center + Math.sin((angle * Math.PI) / 180) * radius;
    const rotation = angle + 90; // Adjust text rotation to be perpendicular to the radius
    return { x, y, rotation };
  };
  
  if (contestants.length === 0) {
    return null;
  }

  return (
    <div className="relative w-[400px] h-[400px]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[24px] border-b-yellow-400 z-10" />
      
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform"
        animate={{ rotate: rotation }}
        transition={{ 
          duration: 4 + (rotation / 360) * 0.5,
          ease: [0.13, 0.99, 0.25, 1.00],
          onComplete: () => {
            if (currentState === 'spinning') {
              endSpin();
            }
          }
        }}
      >
        {contestants.map((contestant, index) => (
          <g key={contestant.id}>
            <path
              d={getSegmentPath(index)}
              fill={contestant.color}
              stroke="white"
              strokeWidth={strokeWidth}
            />
            <text
              x={getTextPosition(index).x}
              y={getTextPosition(index).y}
              fill="black"
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${getTextPosition(index).rotation}, ${getTextPosition(index).x}, ${getTextPosition(index).y})`}
              className="text-base font-semibold"
            >
              {contestant.name}
            </text>
          </g>
        ))}
      </motion.svg>
    </div>
  );
};

export default RouletteWheel; 