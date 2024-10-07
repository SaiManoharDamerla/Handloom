import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/artisan/home" className="flex items-center text-2xl font-bold text-black">
          <img
            src="https://tse1.mm.bing.net/th?id=OIG3.0CS_8N.4hPaCHTUXCjpw&pid=ImgGn"
            alt="Handloom Fashion Logo"
            className="h-10"
          />
          <span className="ml-2">Handloom Fashion Seller</span>
        </Link>

        {/* Navigation Links */}
        
        <div className="space-x-4">
          <Link to="/artisan/home" className="hover:text-gray-600 text-black px-4 py-2 font-semibold">
            Home
          </Link>
          <Link to="/artisan/manageinventory" className="hover:text-gray-600 text-black px-4 py-2 font-semibold">
            Manage Inventory
          </Link>
          <Link to="/artisan/vieworders" className="hover:text-gray-600 text-black px-4 py-2 font-semibold">
            View Orders
          </Link>
          <Link to="/artisan/trackorders" className="hover:text-gray-600 text-black px-4 py-2 font-semibold">
            Track Orders
          </Link>
          <Link to="/artisan/profile" className="hover:text-gray-600 text-black px-4 py-2 font-semibold">
            Profile Settings
          </Link>
        </div>

        {/* Logout Button */}
        <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
