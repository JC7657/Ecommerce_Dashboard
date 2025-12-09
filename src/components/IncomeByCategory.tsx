import React from 'react';
import { Card } from './Card';
import type { CategoryIncome } from '../utils/data';

const BAR_COLORS = [
  'bg-purple-600',
  'bg-blue-600', 
  'bg-pink-600',
  'bg-emerald-600',
  'bg-amber-600',
  'bg-red-600',
];

interface IncomeByCategoryProps {
  categories: CategoryIncome[];
}

export const IncomeByCategory: React.FC<IncomeByCategoryProps> = ({ categories }) => {
  return (
    <Card title="Income by Category">
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={category.category} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">
                  {category.category}
                </span>
                <span className="text-sm text-gray-500">
                  ${category.income.toFixed(2)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${BAR_COLORS[index % BAR_COLORS.length]} h-2 rounded-full`}
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {category.percentage.toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};