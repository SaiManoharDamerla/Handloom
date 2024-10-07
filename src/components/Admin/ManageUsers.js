import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  // Sample user data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Aarav Singh',
      email: 'aarav.singh@example.com',
      role: 'Buyer',
    },
    {
      id: 2,
      name: 'Vivaan Sharma',
      email: 'vivaan.sharma@example.com',
      role: 'Seller',
    },
    {
      id: 3,
      name: 'Anaya Gupta',
      email: 'anaya.gupta@example.com',
      role: 'Buyer',
    },
  ]);

  // Function to handle user deletion
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Manage Users</h1>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/edit-user/${user.id}`}>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex justify-center mt-8">
        <Link to="/add-user">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageUsers;
