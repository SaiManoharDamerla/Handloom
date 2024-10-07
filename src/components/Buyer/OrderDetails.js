import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = () => {
  const order = {
    orderId: '123456',
    items: [
      {
        id: 1,
        name: 'Classic Cotton Saree',
        price: '₹1500',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Modern Abstract Rug',
        price: '₹600',
        quantity: 1,
      },
    ],
    total: '₹10500',
    status: 'Confirmed',
  };

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-100">
      <div className="container max-w-md mx-auto p-10">
        <div className="flex flex-col items-center justify-center text-neutral-800 dark:text-neutral-200">
          <h1 className="text-3xl font-bold mb-6 text-black">Order Details</h1>
          <div className="w-full bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-black mb-4">Order ID: {order.orderId}</h2>
            <p className="mb-4 text-lg text-black">Status: {order.status}</p>

            <h3 className="text-lg font-semibold text-black mb-4">Items Purchased</h3>
            <div className="flex flex-col space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between border-b pb-2">
                  <span className="text-black">{item.name} (x{item.quantity})</span>
                  <span className="text-black">{item.price}</span>
                </div>
              ))}
              <div className="flex justify-between mt-2 font-bold">
                <span className="text-black">Total:</span>
                <span className="text-black">{order.total}</span>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/home">
                <button
                  className="w-full px-6 py-3 text-white rounded-md shadow-md transition duration-150 ease-in-out"
                  style={{
                    background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
