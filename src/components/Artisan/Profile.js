import React, { useState } from 'react';

const Profile = () => {
  const [sellerInfo, setSellerInfo] = useState({
    name: 'Sai Manohar',
    email: 'Sai.manohar@example.com',
    contactNumber: '+91 98765 43210',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSellerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Implement save logic here (e.g., API call)
    console.log('Profile updated:', sellerInfo);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Seller Profile</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            {isEditing ? (
              <input
                type="text"
                id="name"
                name="name"
                value={sellerInfo.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            ) : (
              <p className="mt-1 text-gray-600">{sellerInfo.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                id="email"
                name="email"
                value={sellerInfo.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            ) : (
              <p className="mt-1 text-gray-600">{sellerInfo.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="contactNumber">
              Contact Number
            </label>
            {isEditing ? (
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={sellerInfo.contactNumber}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            ) : (
              <p className="mt-1 text-gray-600">{sellerInfo.contactNumber}</p>
            )}
          </div>

          <div className="flex justify-between">
            {isEditing ? (
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
