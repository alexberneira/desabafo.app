import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300';
  
  const variantClasses = {
    default: 'glass-card',
    accent: 'glass-card bg-gradient-to-br from-white/95 to-white/90 border-blue-200/30'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
} 