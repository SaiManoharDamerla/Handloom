import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
  const items = [
    {
      id: 1,
      name: 'Classic Cotton Saree',
      price: 1500,
      quantity: 1,
      image: 'https://tse3.mm.bing.net/th?id=OIG1.t5mnvl_a7BvToqXVC7yr&pid=ImgGn',
    },
    {
      id: 2,
      name: 'Modern Abstract Rug',
      price: 800,
      quantity: 2 ,
      image: 'https://th.bing.com/th/id/OIP.TneFG9YFQu6KX2-hx1-snQHaHa?w=198&h=198&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
  ];

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-100">
      <div className="container max-w-3xl mx-auto p-10">
        <div className="flex flex-col items-center justify-center text-neutral-800 dark:text-neutral-200">
          <h1 className="text-3xl font-bold mb-6 text-black">Order Summary</h1>
          
          <div className="w-full bg-white p-6 rounded-lg shadow-lg">
            {/* Order Items */}
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
                <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded-md" />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-black">{item.name}</h2>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="text-xl font-semibold text-black">₹{item.price}</p>
              </div>
            ))}

            {/* Order Total */}
            <div className="flex justify-between text-black text-lg font-bold">
              <p>Total:</p>
              <p>₹{calculateTotal()}</p>
            </div>

            {/* Place Order Button */}
            <div className="mt-8">
              <Link to="/buyer/orderconfirmation">
                <button
                  className="w-full px-6 py-3 text-white rounded-md shadow-md transition duration-150 ease-in-out"
                  style={{
                    background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  Place Order
                </button>
              </Link>
            </div>

            {/* Back to Cart Link */}
            <div className="text-center mt-4">
              <Link to="/buyer/cart" className="text-blue-500 hover:underline">
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
