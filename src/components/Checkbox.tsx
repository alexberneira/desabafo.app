import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
  disabled?: boolean;
}

export default function Checkbox({ 
  checked, 
  onChange, 
  label, 
  className = '',
  disabled = false
}: CheckboxProps) {
  return (
    <label className={`flex items-center space-x-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
} 