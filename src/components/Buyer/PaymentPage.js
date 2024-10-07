import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const PaymentPage = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-100">
      <div className="container max-w-lg mx-auto p-10">
        <div className="flex flex-col items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="g-0">
              <div className="px-4 md:px-0">
                <div className="md:mx-6 md:p-12">
                  <div className="text-center">
                    <img
                      className="mx-auto w-24 mb-6"
                      src="https://tse1.mm.bing.net/th?id=OIG3.0CS_8N.4hPaCHTUXCjpw&pid=ImgGn"
                      alt="logo"
                    />
                    <h4 className="mb-12 text-xl font-semibold text-black">
                      Complete Your Payment
                    </h4>
                  </div>

                  <form>
                    {/* Name on Card Input */}
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-black">Name on Card</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-black bg-white border rounded-md focus:border-blue-400 focus:outline-none"
                        placeholder="Enter Name on Card"
                      />
                    </div>

                    {/* Card Number Input */}
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-black">Card Number</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-black bg-white border rounded-md focus:border-blue-400 focus:outline-none"
                        placeholder="1234 5678 9123 4567"
                      />
                    </div>

                    {/* Expiration Date and CVV */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-black">Expiration Date</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-black bg-white border rounded-md focus:border-blue-400 focus:outline-none"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-black">CVV</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-black bg-white border rounded-md focus:border-blue-400 focus:outline-none"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    {/* Payment Button */}
                    <div className="mb-12 pt-1 text-center">
                      <Link to="/buyer/ordersummary">
                        <button
                          className="w-full px-6 py-2.5 text-white rounded shadow-md transition duration-150 ease-in-out"
                          style={{
                            background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                          type="button"
                        >
                          Pay Now
                        </button>
                      </Link>
                    </div>

                    {/* Order Summary Link */}
                    <div className="text-center">
                      <Link to="/buyer/cart" className="text-blue-500 hover:underline">
                        Back to Cart
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
