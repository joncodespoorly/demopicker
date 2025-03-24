'use client';

import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, label, ...props }, ref) => {
    const baseClasses = 'w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800';
    const stateClasses = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-900/10'
      : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-gray-700';
    
    const classes = `${baseClasses} ${stateClasses} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-200 mb-1">
            {label}
          </label>
        )}
        <input ref={ref} className={classes} {...props} />
        {error && (
          <p className="mt-1 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 