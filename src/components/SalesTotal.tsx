import React from 'react';
import { Card } from './Card';

interface SalesTotalProps {
  total: number;
}

export const SalesTotal: React.FC<SalesTotalProps> = ({ total }) => {
  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(total);

  return (
    <Card title="Total Sales">
      <div className="flex flex-col space-y-3">
        <div className="text-3xl font-bold text-green-600">{formattedTotal}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">vs last month</span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            +12.5%
          </span>
        </div>
      </div>
    </Card>
  );
};