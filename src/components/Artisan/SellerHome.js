import React from 'react';
import { Link } from 'react-router-dom';

const SellerHome = () => {
  // Sample data for demonstration
  const totalSales = '₹1,20,000';
  const totalProducts = 50;
  const pendingOrders = 15;
  const deliveredOrders = 40;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Seller Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Sales */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-2xl font-bold mt-2">{totalSales}</p>
        </div>

        {/* Total Products */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-2xl font-bold mt-2">{totalProducts}</p>
        </div>

        {/* Pending Orders */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Pending Orders</h2>
          <p className="text-2xl font-bold mt-2">{pendingOrders}</p>
        </div>

        {/* Delivered Orders */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Delivered Orders</h2>
          <p className="text-2xl font-bold mt-2">{deliveredOrders}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Manage Products */}
        <Link
          to="/artisan/manageinventory"
          className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center"
        >
          <h3 className="text-lg font-semibold">Manage Products</h3>
          <p className="mt-2">Add, update, or delete products</p>
        </Link>

        {/* View Orders */}
        <Link
          to="/artisan/vieworders"
          className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center"
        >
          <h3 className="text-lg font-semibold">View Orders</h3>
          <p className="mt-2">Track and manage customer orders</p>
        </Link>

        {/* Track Orders */}
        <Link
          to="/artisan/trackorders"
          className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center"
        >
          <h3 className="text-lg font-semibold">Track Orders</h3>
          <p className="mt-2">Track the status of pending shipments</p>
        </Link>
      </div>

      {/* Recent Orders Table */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Customer</th>
              <th className="border border-gray-300 px-4 py-2">Total Amount</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">101</td>
              <td className="border border-gray-300 px-4 py-2">Ananya Mehta</td>
              <td className="border border-gray-300 px-4 py-2">₹4500</td>
              <td className="border border-gray-300 px-4 py-2">Shipped</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">102</td>
              <td className="border border-gray-300 px-4 py-2">Raj Patel</td>
              <td className="border border-gray-300 px-4 py-2">₹6000</td>
              <td className="border border-gray-300 px-4 py-2">Pending</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">103</td>
              <td className="border border-gray-300 px-4 py-2">Priya Rao</td>
              <td className="border border-gray-300 px-4 py-2">₹12000</td>
              <td className="border border-gray-300 px-4 py-2">Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerHome;
