import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  // State to hold user information
  const [userInfo, setUserInfo] = useState({
    name: 'Sriram',
    email: 'sriram.7667@example.com',
    phone: '+91 9876543210',
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Profile Information</h1>

      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <p className="text-gray-800">{userInfo.name}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <p className="text-gray-800">{userInfo.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
          <p className="text-gray-800">{userInfo.phone}</p>
        </div>

        <div className="flex justify-center mt-6">
          <Link to="/edit-profile">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
