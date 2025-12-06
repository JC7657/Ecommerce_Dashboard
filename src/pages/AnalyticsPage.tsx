import { useMemo } from 'react';
import {
  SalesTrendChart,
  CategoryPerformanceChart,
  RevenueByCategoryChart,
  ConversionRate,
  CustomerAcquisitionCost,
  CustomerLifetimeValue,
  ChurnRate,
} from '../components';
import { generateDashboardData } from '../utils/data';

export const AnalyticsPage = () => {
  const data = useMemo(() => generateDashboardData(), []);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Advanced Analytics</h1>
        <p className="text-gray-600 mt-2">Deep insights and advanced metrics for business intelligence.</p>
      </div>

      {/* Advanced KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ConversionRate rate={data.customerAnalytics.conversionRate} change={5.2} />
        <CustomerAcquisitionCost cost={data.customerAnalytics.acquisitionCost} change={-8.1} />
        <CustomerLifetimeValue value={data.customerAnalytics.lifetimeValue} change={12.3} />
        <ChurnRate rate={data.customerAnalytics.churnRate} change={-2.1} />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesTrendChart data={data.salesOverTime} />
        <CategoryPerformanceChart data={data.categoryPerformance} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueByCategoryChart data={data.metrics.incomeByCategory} />
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Revenue Growth</span>
              <span className="text-sm font-medium text-green-600">+15.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Customer Retention</span>
              <span className="text-sm font-medium text-blue-600">87.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Market Share</span>
              <span className="text-sm font-medium text-purple-600">23.1%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Profit Margin</span>
              <span className="text-sm font-medium text-yellow-600">34.7%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};