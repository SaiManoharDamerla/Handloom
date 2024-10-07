import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card for Managing Users */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
          <p className="text-gray-600 mb-4">
            View, add, update, and remove users from the platform.
          </p>
          <Link to="/admin/manageusers" className="text-blue-500 hover:underline">
            Go to Users
          </Link>
        </div>

        {/* Card for Managing Products */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
          <p className="text-gray-600 mb-4">
            Add, update, or delete products available in the store.
          </p>
          <Link to="/admin/manageproducts" className="text-blue-500 hover:underline">
            Go to Products
          </Link>
        </div>

        {/* Card for Viewing Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">View Orders</h2>
          <p className="text-gray-600 mb-4">
            Track and manage all orders placed by customers.
          </p>
          <Link to="/admin/adminvieworders" className="text-blue-500 hover:underline">
            Go to Orders
          </Link>
        </div>

        {/* Additional Metrics or Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Sales Overview</h2>
          <p className="text-gray-600 mb-4">
            Get insights on sales performance and revenue.
          </p>
          <Link to="/admin/salesoverview" className="text-blue-500 hover:underline">
            View Sales
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Site Settings</h2>
          <p className="text-gray-600 mb-4">
            Manage site settings and configurations.
          </p>
          <Link to="/admin/sitesettings" className="text-blue-500 hover:underline">
            Go to Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
