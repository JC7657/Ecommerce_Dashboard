import React from 'react';
import { Card } from './Card';

interface AverageRatingsProps {
  averageRating: number;
}

export const AverageRatings: React.FC<AverageRatingsProps> = ({ averageRating }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">☆</span>
      );
    }

    return stars;
  };

  return (
    <Card title="Average Product Rating">
      <div className="flex items-center space-x-4">
        <div className="text-3xl font-bold text-gray-900">
          {averageRating.toFixed(1)}
        </div>
        <div className="flex items-center">
          {renderStars(averageRating)}
        </div>
        <div className="text-sm text-gray-500">
          Based on {Math.floor(Math.random() * 100) + 50} reviews
        </div>
      </div>
    </Card>
  );
};