import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesOverview = () => {
  // Sample data for sales overview
  const [salesData, setSalesData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [
      {
        label: 'Monthly Sales (₹)',
        data: [12000, 15000, 14000, 22000, 18000, 25000, 24000, 20000, 30000, 35000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  });

  // Sample key metrics
  const totalSales = '₹2,40,000';
  const bestSellingProduct = 'Handwoven Cotton Saree';
  const bestSellingProductSales = '₹50,000';
  const monthlyGrowth = '15%';

  useEffect(() => {
    // You can fetch real data from an API here and update state
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Sales Overview</h1>

      {/* Sales Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Sales */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-2xl font-bold mt-2">{totalSales}</p>
        </div>

        {/* Best Selling Product */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Best Selling Product</h2>
          <p className="text-md mt-2">{bestSellingProduct}</p>
          <p className="text-xl font-bold mt-2">{bestSellingProductSales}</p>
        </div>

        {/* Monthly Growth */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Monthly Growth</h2>
          <p className="text-2xl font-bold mt-2">{monthlyGrowth}</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Sales Trend</h2>
        <Line data={salesData} />
      </div>

      {/* Best Selling Products */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Top Selling Products</h2>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Product</th>
              <th className="border border-gray-300 px-4 py-2">Units Sold</th>
              <th className="border border-gray-300 px-4 py-2">Total Sales (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Handwoven Cotton Saree</td>
              <td className="border border-gray-300 px-4 py-2">200</td>
              <td className="border border-gray-300 px-4 py-2">₹50,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Traditional Silk Saree</td>
              <td className="border border-gray-300 px-4 py-2">150</td>
              <td className="border border-gray-300 px-4 py-2">₹40,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Men's Kurta</td>
              <td className="border border-gray-300 px-4 py-2">180</td>
              <td className="border border-gray-300 px-4 py-2">₹36,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesOverview;
