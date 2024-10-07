import React, { useState } from 'react';

const ViewOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'Rahul Sharma',
      product: 'Classic Cotton Saree',
      total: '₹4500',
      status: 'Processing',
    },
    {
      id: 2,
      customerName: 'Priya Mehta',
      product: 'Handwoven Kurta',
      total: '₹2500',
      status: 'Shipped',
    },
    {
      id: 3,
      customerName: 'Anita Singh',
      product: 'Designer Cushion',
      total: '₹1200',
      status: 'Delivered',
    },
    {
      id: 4,
      customerName: 'Ravi Patel',
      product: 'Silk Saree',
      total: '₹7500',
      status: 'Processing',
    },
    {
      id: 5,
      customerName: 'Sunita Rao',
      product: 'Handloom Rug',
      total: '₹3000',
      status: 'Cancelled',
    },
  ]);

  const statusOptions = ['Processing', 'Shipped', 'Delivered', 'Cancelled'];

  // Update order status
  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Order Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Order ID</th>
              <th className="py-2 px-4 border-b text-left">Customer Name</th>
              <th className="py-2 px-4 border-b text-left">Product</th>
              <th className="py-2 px-4 border-b text-left">Total</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">{order.customerName}</td>
                <td className="py-2 px-4 border-b">{order.product}</td>
                <td className="py-2 px-4 border-b">{order.total}</td>
                <td className="py-2 px-4 border-b">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="border rounded p-1"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrders;
