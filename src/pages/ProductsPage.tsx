import { useMemo } from 'react';
import {
  TopProducts,
  AverageRatings,
  CategoryPerformanceChart,
  KPICard,
} from '../components';
import { generateDashboardData } from '../utils/data';

export const ProductsPage = () => {
  const data = useMemo(() => generateDashboardData(), []);

  const totalProducts = data.products.length;
  const averagePrice = data.products.reduce((sum, product) => sum + product.price, 0) / totalProducts;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Product Analytics</h1>
        <p className="text-gray-600 mt-2">Monitor your product performance and inventory insights.</p>
      </div>

      {/* Product KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Products"
          value={totalProducts.toLocaleString()}
          change={2.1}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          }
          color="blue"
        />
        <KPICard
          title="Average Price"
          value={`$${averagePrice.toFixed(2)}`}
          change={-1.2}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          }
          color="green"
        />
        <AverageRatings averageRating={data.metrics.averageRating} />
        <KPICard
          title="Top Product Sales"
          value={data.metrics.topProducts[0]?.sales.toLocaleString() || '0'}
          change={15.3}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          }
          color="yellow"
        />
      </div>

      {/* Charts and Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopProducts products={data.metrics.topProducts} />
        <CategoryPerformanceChart data={data.categoryPerformance} />
      </div>
    </div>
  );
};