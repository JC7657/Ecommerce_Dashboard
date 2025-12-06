import React from 'react';
import { KPICard } from './KPICard';

interface ConversionRateProps {
  rate: number;
  change?: number;
}

export const ConversionRate: React.FC<ConversionRateProps> = ({ rate, change }) => (
  <KPICard
    title="Conversion Rate"
    value={`${rate}%`}
    change={change}
    icon={
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    }
    color="green"
  />
);

interface CustomerAcquisitionCostProps {
  cost: number;
  change?: number;
}

export const CustomerAcquisitionCost: React.FC<CustomerAcquisitionCostProps> = ({ cost, change }) => (
  <KPICard
    title="Customer Acquisition Cost"
    value={`$${cost}`}
    change={change}
    icon={
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    }
    color="red"
  />
);

interface CustomerLifetimeValueProps {
  value: number;
  change?: number;
}

export const CustomerLifetimeValue: React.FC<CustomerLifetimeValueProps> = ({ value, change }) => (
  <KPICard
    title="Customer Lifetime Value"
    value={`$${value}`}
    change={change}
    icon={
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    }
    color="blue"
  />
);

interface ChurnRateProps {
  rate: number;
  change?: number;
}

export const ChurnRate: React.FC<ChurnRateProps> = ({ rate, change }) => (
  <KPICard
    title="Churn Rate"
    value={`${rate}%`}
    change={change}
    icon={
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    }
    color="yellow"
  />
);