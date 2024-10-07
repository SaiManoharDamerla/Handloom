import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-100">
      <div className="container max-w-md mx-auto p-10">
        <div className="flex flex-col items-center justify-center text-neutral-800 dark:text-neutral-200">
          <h1 className="text-3xl font-bold mb-6 text-black">Order Confirmation</h1>
          <div className="w-full bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-lg text-center text-black">
              Thank you for your order! Your order has been successfully placed.
            </p>
            <p className="mb-4 text-lg text-center text-black">
              You will receive a confirmation email shortly with the order details.
            </p>

            {/* Order Summary (Optional) */}
            <h2 className="text-xl font-semibold text-black mb-4">Order Summary</h2>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-black">Classic Cotton Saree</span>
                <span className="text-black">₹1500</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-black">Modern Abstract Rug</span>
                <span className="text-black">₹1600</span>
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span className="text-black">Total:</span>
                <span className="text-black">₹3100</span>
              </div>
            </div>

            {/* Navigation Buttons */}
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
              <Link to="/buyer/orderdetails" className="mt-4 text-blue-500 hover:underline block text-center">
                View Order Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmation;
