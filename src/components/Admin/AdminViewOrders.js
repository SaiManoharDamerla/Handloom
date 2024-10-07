import React, { useState } from 'react';

const AdminViewOrders = () => {
  const [orders] = useState([
    // Sample order data
    {
      id: 1,
      user: { name: 'Aarav Sharma', email: 'aarav@example.com' },
      products: [
        { name: 'Cotton Saree', quantity: 1, price: '₹4500' },
        { name: 'Men’s Kurta', quantity: 2, price: '₹2500' },
      ],
      totalAmount: '₹9500',
      status: 'Shipped',
    },
    {
      id: 2,
      user: { name: 'Diya Gupta', email: 'diya@example.com' },
      products: [
        { name: 'Silk Saree', quantity: 1, price: '₹5500' },
      ],
      totalAmount: '₹5500',
      status: 'Pending',
    },
    {
      id: 3,
      user: { name: 'Rohan Verma', email: 'rohan@example.com' },
      products: [
        { name: 'Handwoven Cotton Saree', quantity: 1, price: '₹5500' },
        { name: 'Cushion Cover', quantity: 3, price: '₹1200' },
      ],
      totalAmount: '₹6600',
      status: 'Delivered',
    },
  ]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">View Orders</h1>

      {/* Order List */}
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Order ID</th>
            <th className="border border-gray-300 px-4 py-2">User</th>
            <th className="border border-gray-300 px-4 py-2">Products</th>
            <th className="border border-gray-300 px-4 py-2">Total Amount</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border border-gray-300 px-4 py-2">{order.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {order.user.name}<br />
                <span className="text-sm text-gray-500">{order.user.email}</span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul>
                  {order.products.map((product, index) => (
                    <li key={index}>
                      {product.name} (x{product.quantity}) - {product.price}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">{order.totalAmount}</td>
              <td className="border border-gray-300 px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewOrders;
