import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-6 tracking-tight">{title}</h3>
      )}
      {children}
    </div>
  );
};