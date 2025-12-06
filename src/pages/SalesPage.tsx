import { useMemo } from 'react';
import {
  SalesTotal,
  SalesTrendChart,
  RevenueByCategoryChart,
  IncomeByCategory,
  KPICard,
} from '../components';
import { generateDashboardData } from '../utils/data';

export const SalesPage = () => {
  const data = useMemo(() => generateDashboardData(), []);

  const totalOrders = data.sales.length;
  const averageOrderValue = data.metrics.totalSales / totalOrders;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Sales Analytics</h1>
        <p className="text-gray-600 mt-2">Detailed insights into your sales performance and trends.</p>
      </div>

      {/* Sales KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SalesTotal total={data.metrics.totalSales} />
        <KPICard
          title="Total Orders"
          value={totalOrders.toLocaleString()}
          change={8.2}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          }
          color="blue"
        />
        <KPICard
          title="Average Order Value"
          value={`$${averageOrderValue.toFixed(2)}`}
          change={3.1}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          }
          color="green"
        />
        <KPICard
          title="Conversion Rate"
          value={`${data.customerAnalytics.conversionRate}%`}
          change={5.2}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
          color="yellow"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesTrendChart data={data.salesOverTime} />
        <RevenueByCategoryChart data={data.metrics.incomeByCategory} />
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <IncomeByCategory categories={data.metrics.incomeByCategory} />
      </div>
    </div>
  );
};