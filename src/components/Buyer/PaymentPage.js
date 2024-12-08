import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Shared/Loader"; // Import your Loader component
import axios from "axios";

export default function PaymentPage() {
  const location = useLocation();
  const [feeAmount, setFeeAmount] = useState(0);
  const [loading, setLoading] = useState(false); // State to handle loader visibility

  useEffect(() => {
    if (location?.state?.totalPrice) {
      setFeeAmount(location.state.totalPrice);
    }
  }, [location.state?.totalPrice]);

  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      setLoading(true); // Show loader
      const options = {
        key: "rzp_test_Uhtl0BJG22vFeZ",
        amount: parseFloat(feeAmount) * 100,
        currency: "INR",
        name: "Handloom Payments",
        description: "Payment for Handloom Items",
      };

      const razorpay = new window.Razorpay(options);

      // Open Razorpay window
      razorpay.open();

      // Wait a short duration to ensure Razorpay is initialized
      setTimeout(() => {
        setLoading(false); // Hide loader after Razorpay's window appears
      }, 1000);

      navigate("/buyer/orderconfirmation");
    } catch (error) {
      console.error("Payment failed", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      {loading && <Loader />} {/* Show Loader if in loading state */}
      <div className="flex-1 bg-gray-100 min-h-screen p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Pay Handloom Fashion</h1>
          <h4 className="text-3xl font-bold text-green-600 mb-6 text-center">Total Amount to Pay: ₹{feeAmount}</h4>
          
          <button
            onClick={handlePayment}
            style={{ backgroundImage: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white py-4 px-6 rounded hover:opacity-90 transition duration-300"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
