import { faker } from '@faker-js/faker';

// Types for our dashboard data
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  sales: number;
  rating: number;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  orders: number;
  totalSpent: number;
  lastActive: Date;
}

export interface Sale {
  id: string;
  productId: string;
  userId: string;
  amount: number;
  date: Date;
  category: string;
}

export interface CategoryIncome {
  category: string;
  income: number;
  percentage: number;
}

// Generate fake products
export const generateProducts = (count: number = 20): Product[] => {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Beauty'];

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    category: faker.helpers.arrayElement(categories),
    price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
    sales: faker.number.int({ min: 0, max: 500 }),
    rating: parseFloat(faker.number.float({ min: 1, max: 5, fractionDigits: 1 }).toFixed(1)),
    image: faker.image.url({ width: 200, height: 200 }),
  }));
};

// Generate fake users
export const generateUsers = (count: number = 50): User[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    orders: faker.number.int({ min: 0, max: 20 }),
    totalSpent: parseFloat(faker.commerce.price({ min: 0, max: 5000 })),
    lastActive: faker.date.recent({ days: 30 }),
  }));
};

// Generate fake sales
export const generateSales = (products: Product[], users: User[], count: number = 100): Sale[] => {
  return Array.from({ length: count }, () => {
    const product = faker.helpers.arrayElement(products);
    const user = faker.helpers.arrayElement(users);

    return {
      id: faker.string.uuid(),
      productId: product.id,
      userId: user.id,
      amount: product.price,
      date: faker.date.recent({ days: 30 }),
      category: product.category,
    };
  });
};

// Calculate dashboard metrics
export const calculateMetrics = (products: Product[], users: User[], sales: Sale[]) => {
  // Sales total with more realistic calculation
  const totalSales = sales.reduce((sum, sale) => sum + sale.amount, 0);

  // Top sold products - add some randomization to make it more varied
  const topProducts = [...products]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 5)
    .map(product => ({
      ...product,
      sales: product.sales + faker.number.int({ min: -10, max: 20 }) // Add some variation
    }));

  // Most active users - similar randomization
  const activeUsers = [...users]
    .sort((a, b) => b.orders - a.orders)
    .slice(0, 5)
    .map(user => ({
      ...user,
      orders: Math.max(1, user.orders + faker.number.int({ min: -2, max: 5 })),
      totalSpent: user.totalSpent + faker.number.float({ min: -50, max: 150, fractionDigits: 2 })
    }));

  // Income by category with more realistic distribution
  const categoryMap = new Map<string, number>();
  sales.forEach(sale => {
    const current = categoryMap.get(sale.category) || 0;
    categoryMap.set(sale.category, current + sale.amount);
  });

  const totalIncome = Array.from(categoryMap.values()).reduce((sum, income) => sum + income, 0);
  const incomeByCategory: CategoryIncome[] = Array.from(categoryMap.entries())
    .map(([category, income]) => ({
      category,
      income: income * faker.number.float({ min: 0.9, max: 1.1, fractionDigits: 2 }), // Add some variation
      percentage: (income / totalIncome) * 100,
    }))
    .sort((a, b) => b.income - a.income); // Sort by income descending

  // Average ratings with more realistic distribution
  const totalRating = products.reduce((sum, product) => sum + product.rating, 0);
  const averageRating = totalRating / products.length;

  return {
    totalSales: totalSales * faker.number.float({ min: 0.95, max: 1.05, fractionDigits: 2 }), // Add slight variation
    topProducts,
    activeUsers,
    incomeByCategory,
    averageRating: parseFloat((averageRating + faker.number.float({ min: -0.1, max: 0.1, fractionDigits: 1 })).toFixed(1)),
  };
};

// Generate sales data over time for charts
export const generateSalesOverTime = (days: number = 30) => {
  const data = [];
  const baseDate = new Date();
  baseDate.setDate(baseDate.getDate() - days);

  // Create more realistic sales patterns with trends and seasonality
  let baseRevenue = 25000;
  let trend = 1.002; // Slight upward trend
  let seasonalMultiplier = 1;

  for (let i = 0; i < days; i++) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + i);

    // Add weekly seasonality (higher on weekends)
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday or Saturday
      seasonalMultiplier = 1.3;
    } else if (dayOfWeek === 5) { // Friday
      seasonalMultiplier = 1.1;
    } else {
      seasonalMultiplier = 0.9;
    }

    // Add some random variation
    const randomFactor = faker.number.float({ min: 0.8, max: 1.2, fractionDigits: 2 });
    const revenue = Math.round(baseRevenue * trend * seasonalMultiplier * randomFactor);

    // Orders based on revenue (roughly $200-400 per order)
    const avgOrderValue = faker.number.float({ min: 250, max: 350, fractionDigits: 2 });
    const orders = Math.round(revenue / avgOrderValue);

    data.push({
      date: date.toISOString().split('T')[0],
      sales: orders,
      revenue: revenue,
      orders: orders,
    });

    // Update base for next day
    baseRevenue = revenue;
  }

  return data;
};

// Generate category performance data
export const generateCategoryPerformance = () => {
  const categories = [
    { name: 'Electronics', baseRevenue: 25000, growthRange: [-5, 25] },
    { name: 'Clothing', baseRevenue: 18000, growthRange: [-10, 35] },
    { name: 'Books', baseRevenue: 8000, growthRange: [-15, 15] },
    { name: 'Home & Garden', baseRevenue: 15000, growthRange: [5, 40] },
    { name: 'Sports', baseRevenue: 12000, growthRange: [-8, 30] },
    { name: 'Beauty', baseRevenue: 10000, growthRange: [10, 45] },
  ];

  const totalRevenue = categories.reduce((sum, cat) => sum + cat.baseRevenue, 0);

  return categories.map(({ name, baseRevenue, growthRange }) => {
    const revenue = faker.number.float({
      min: baseRevenue * 0.8,
      max: baseRevenue * 1.2,
      fractionDigits: 2
    });
    const growth = faker.number.float({
      min: growthRange[0],
      max: growthRange[1],
      fractionDigits: 1
    });
    const marketShare = (revenue / totalRevenue) * 100;

    return {
      category: name,
      revenue,
      growth,
      marketShare: parseFloat(marketShare.toFixed(1)),
    };
  });
};

// Generate customer analytics
export const generateCustomerAnalytics = () => {
  const totalCustomers = faker.number.int({ min: 5000, max: 15000 });
  const newCustomers = faker.number.int({ min: 150, max: 450 });
  const returningCustomers = totalCustomers - newCustomers;

  // More realistic ranges based on industry benchmarks
  const churnRate = faker.number.float({ min: 3.5, max: 12.8, fractionDigits: 1 });
  const lifetimeValue = faker.number.float({ min: 285, max: 890, fractionDigits: 2 });
  const acquisitionCost = faker.number.float({ min: 85, max: 245, fractionDigits: 2 });
  const conversionRate = faker.number.float({ min: 2.1, max: 6.8, fractionDigits: 1 });

  return {
    newCustomers,
    returningCustomers,
    churnRate,
    lifetimeValue,
    acquisitionCost,
    conversionRate,
  };
};

// Generate all data
export const generateDashboardData = () => {
  const products = generateProducts(20);
  const users = generateUsers(50);
  const sales = generateSales(products, users, 200);

  const metrics = calculateMetrics(products, users, sales);
  const salesOverTime = generateSalesOverTime(30);
  const categoryPerformance = generateCategoryPerformance();
  const customerAnalytics = generateCustomerAnalytics();

  return {
    products,
    users,
    sales,
    metrics,
    salesOverTime,
    categoryPerformance,
    customerAnalytics,
  };
};