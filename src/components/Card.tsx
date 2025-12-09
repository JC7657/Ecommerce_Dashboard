import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-6 hover:shadow-xl hover:bg-white transition-all duration-300 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-6 tracking-tight">{title}</h3>
      )}
      {children}
    </div>
  );
};