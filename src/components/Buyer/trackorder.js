import React from "react";
import { useParams } from "react-router-dom";

const TrackOrder = () => {
  const { orderId } = useParams();

  // Dummy order tracking data for demonstration
  const orderStatus = {
    1: "Shipped - Estimated delivery: 2024-11-15",
    2: "Delivered - Delivered on 2024-11-12",
    3: "Pending - Awaiting confirmation from seller",
  };

  return (
    <section className="min-h-screen bg-neutral-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Track Your Order</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Order ID: {orderId}</h2>
        <p className="text-gray-600 mb-4">{orderStatus[orderId] || "Order status not found."}</p>

        {/* Add any additional order tracking details if available */}
        <div className="text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Back to Orders
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackOrder;
