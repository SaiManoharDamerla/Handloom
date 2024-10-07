import React from 'react';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci'; // Import icon for user profile

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/admin/adminhome">Admin Panel</Link>
        </div>

        <div className="space-x-6">
        <Link to="/admin/adminhome" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/admin/manageusers" className="hover:text-gray-400">
            Manage Users
          </Link>
          <Link to="/admin/manageproducts" className="hover:text-gray-400">
            Manage Products
          </Link>
          <Link to="/admin/adminvieworders" className="hover:text-gray-400">
            View Orders
          </Link>
          <Link to="/" className="hover:text-gray-400">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
