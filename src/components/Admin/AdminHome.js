import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card for Managing Users */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Manage Sellers</h2>
          <p className="text-gray-600 mb-4">
            View, add, update, and remove users from the platform.
          </p>
          <Link to="/admin/ManageSellers" className="text-blue-500 hover:underline">
            Go to Sellers
          </Link>
        </div>

        

        {/* Card for Viewing Orders */}
        

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
          <h2 className="text-xl font-semibold mb-2">Contact Report</h2>
          <p className="text-gray-600 mb-4">
            Manage the report.
          </p>
          <Link to="/admin/contactreport" className="text-blue-500 hover:underline">
            See Status
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
