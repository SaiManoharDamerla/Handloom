import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageSellers = () => {
  const [sellers, setSellers] = useState([]); // State to hold sellers
  const [error, setError] = useState(''); // State for errors

  // Fetch sellers from the backend
  useEffect(() => {
    axios
      .get('http://localhost:2003/api/admin/sellers') // API endpoint to fetch sellers
      .then((response) => {
        setSellers(response.data); // Populate seller data
      })
      .catch((err) => {
        setError('Failed to fetch sellers. Please try again later.');
        console.error(err);
      });
  }, []);

  // Handle delete seller
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:2003/api/admin/sellers/${id}`) // Backend API for deletion
      .then(() => {
        setSellers(sellers.filter((seller) => seller.id !== id)); // Update state after deletion
      })
      .catch((err) => {
        setError('Failed to delete seller. Please try again later.');
        console.error(err);
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Manage Sellers</h1>

      {error && (
        <p className="text-red-500 text-center mb-4">
          {error}
        </p>
      )}

<table className="min-w-full bg-white border border-gray-200 text-center">
  <thead>
    <tr>
      <th className="py-3 px-6 border-b text-lg font-medium text-gray-700">Store Name</th>
      <th className="py-3 px-6 border-b text-lg font-medium text-gray-700">Email</th>
      <th className="py-3 px-6 border-b text-lg font-medium text-gray-700">Actions</th>
    </tr>
  </thead>
  <tbody>
    {sellers.map((seller) => (
      <tr key={seller.storeName}>
        <td className="py-3 px-6 border-b">{seller.storeName}</td>
        <td className="py-3 px-6 border-b">{seller.email}</td>
        <td className="py-3 px-6 border-b">
          <Link to={`/edit-seller/${seller.storeName}`}>
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
              Edit
            </button>
          </Link>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => handleDelete(seller.seller_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


      <div className="flex justify-center mt-8">
        <Link to="/admin/add-seller">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add Seller
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageSellers;
