import React from 'react';
import { Card } from './Card';

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  color?: 'green' | 'blue' | 'red' | 'yellow';
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  change,
  changeLabel = 'vs last month',
  icon,
  color = 'blue'
}) => {
  const colorClasses = {
    green: 'text-blue-600 bg-blue-50 border-blue-200',
    blue: 'text-purple-600 bg-purple-50 border-purple-200',
    red: 'text-purple-600 bg-purple-50 border-purple-200',
    yellow: 'text-blue-600 bg-blue-50 border-blue-200',
  };

  const changeSymbol = change && change >= 0 ? '+' : '';

  return (
    <Card className="relative overflow-hidden group">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2 tracking-tight">{value}</p>
          {change !== undefined && (
            <div className="flex items-center mt-3">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                change >= 0 
                  ? 'text-blue-700 bg-blue-50 border border-blue-200' 
                  : 'text-purple-700 bg-purple-50 border-purple-200'
              }`}>
                <svg className={`w-3 h-3 mr-1 ${change >= 0 ? '' : 'transform rotate-180'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                {changeSymbol}{change}%
              </span>
              <span className="text-xs text-gray-400 ml-2">{changeLabel}</span>
            </div>
          )}
        </div>
        {icon && (
          <div className={`p-3 rounded-xl border ${colorClasses[color]} group-hover:scale-110 transition-transform duration-200`}>
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};