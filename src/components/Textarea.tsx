import React from 'react';

interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
  disabled?: boolean;
}

export default function Textarea({ 
  value, 
  onChange, 
  placeholder = '', 
  rows = 4,
  className = '',
  disabled = false
}: TextareaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={`w-full px-4 py-3 rounded-xl input-modern resize-none transition-all duration-300 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    />
  );
} 