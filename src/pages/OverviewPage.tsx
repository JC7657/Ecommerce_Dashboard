import { useMemo } from 'react';
import {
  SalesTotal,
  TopProducts,
  ActiveUsers,
  AverageRatings,
  ConversionRate,
  CustomerAcquisitionCost,
  CustomerLifetimeValue,
  ChurnRate,
  SalesTrendChart,
  RevenueByCategoryChart,
} from '../components';
import { generateDashboardData } from '../utils/data';

export const OverviewPage = () => {
  const data = useMemo(() => generateDashboardData(), []);

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-gray-600 mt-3 text-lg">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SalesTotal total={data.metrics.totalSales} />
        <ConversionRate rate={data.customerAnalytics.conversionRate} change={5.2} />
        <CustomerAcquisitionCost cost={data.customerAnalytics.acquisitionCost} change={-8.1} />
        <CustomerLifetimeValue value={data.customerAnalytics.lifetimeValue} change={12.3} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesTrendChart data={data.salesOverTime} />
        <RevenueByCategoryChart data={data.metrics.incomeByCategory} />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopProducts products={data.metrics.topProducts} />
        <ActiveUsers users={data.metrics.activeUsers} />
        <div className="space-y-6">
          <AverageRatings averageRating={data.metrics.averageRating} />
          <ChurnRate rate={data.customerAnalytics.churnRate} change={-2.1} />
        </div>
      </div>
    </div>
  );
};