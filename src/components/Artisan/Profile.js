import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [sellerInfo, setSellerInfo] = useState({
    storename: '',
    email: '',
    gstno: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('seller')); // Get seller details from localStorage
    if (user && user.seller_id) {
      const sellerId = user.seller_id;
      const apiUrl = `http://localhost:2003/api/seller/profile/${sellerId}`;

      axios
        .get(apiUrl)
        .then((response) => {
          setSellerInfo(response.data); // Populate seller info with API response
        })
        .catch((err) => {
          setError('Failed to fetch profile data. Please try again later.');
          console.error(err);
        });
    } else {
      setError('Seller information not found. Please log in again.');
    }
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Seller Profile</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Store Name</label>
          <p className="mt-1 text-gray-600">{sellerInfo.storeName || 'N/A'}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <p className="mt-1 text-gray-600">{sellerInfo.email || 'N/A'}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">GST Number</label>
          <p className="mt-1 text-gray-600">{sellerInfo.gstNo || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
