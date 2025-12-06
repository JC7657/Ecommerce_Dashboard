import { useMemo } from 'react';
import {
  ActiveUsers,
  CustomerAcquisitionCost,
  CustomerLifetimeValue,
  ChurnRate,
  KPICard,
} from '../components';
import { generateDashboardData } from '../utils/data';

export const CustomersPage = () => {
  const data = useMemo(() => generateDashboardData(), []);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Customer Analytics</h1>
        <p className="text-gray-600 mt-2">Understand your customer base and behavior patterns.</p>
      </div>

      {/* Customer KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Customers"
          value={data.users.length.toLocaleString()}
          change={7.8}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
          color="blue"
        />
        <KPICard
          title="New Customers"
          value={data.customerAnalytics.newCustomers.toLocaleString()}
          change={12.5}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          }
          color="green"
        />
        <CustomerAcquisitionCost cost={data.customerAnalytics.acquisitionCost} change={-8.1} />
        <CustomerLifetimeValue value={data.customerAnalytics.lifetimeValue} change={12.3} />
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ChurnRate rate={data.customerAnalytics.churnRate} change={-2.1} />
        <KPICard
          title="Returning Customers"
          value={data.customerAnalytics.returningCustomers.toLocaleString()}
          change={9.2}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          }
          color="yellow"
        />
        <ActiveUsers users={data.metrics.activeUsers} />
      </div>
    </div>
  );
};