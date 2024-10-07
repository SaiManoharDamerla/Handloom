import React from 'react';

// Sample data for orders. In a real application, this data would come from an API.
const orders = [
  {
    id: 1,
    customerName: 'Rajesh Kumar',
    orderDate: '2024-10-01',
    totalAmount: '₹5,500',
    status: 'Shipped',
  },
  {
    id: 2,
    customerName: 'Priya Singh',
    orderDate: '2024-10-02',
    totalAmount: '₹3,000',
    status: 'Pending',
  },
  {
    id: 3,
    customerName: 'Anjali Sharma',
    orderDate: '2024-09-28',
    totalAmount: '₹7,200',
    status: 'Delivered',
  },
  {
    id: 4,
    customerName: 'Vikram Mehta',
    orderDate: '2024-09-30',
    totalAmount: '₹2,500',
    status: 'Cancelled',
  },
  {
    id: 5,
    customerName: 'Sita Patel',
    orderDate: '2024-10-03',
    totalAmount: '₹4,000',
    status: 'Processing',
  },
];

const TrackOrders = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Track Your Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Order Date</th>
              <th className="py-2 px-4 border-b">Total Amount</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">{order.customerName}</td>
                <td className="py-2 px-4 border-b">{order.orderDate}</td>
                <td className="py-2 px-4 border-b">{order.totalAmount}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      order.status === 'Shipped'
                        ? 'bg-green-500'
                        : order.status === 'Pending'
                        ? 'bg-yellow-500'
                        : order.status === 'Delivered'
                        ? 'bg-blue-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackOrders;
