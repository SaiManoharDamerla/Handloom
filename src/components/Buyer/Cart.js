import React, { useState } from 'react';

const Cart = () => {
  // Example cart data (you can replace it with data from your state management or backend)
  const initialCart = [
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
      quantity: 2,
      image: 'https://th.bing.com/th/id/OIP.TneFG9YFQu6KX2-hx1-snQHaHa?w=198&h=198&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
  ];

  const [cartItems, setCartItems] = useState(initialCart);

  // Function to update the quantity of items in the cart
  const handleQuantityChange = (id, amount) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + amount >= 1 ? item.quantity + amount : 1 }
          : item
      )
    );
  };

  // Function to calculate the total price of the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 border rounded shadow">
              <img src={item.image} alt={item.name} className="h-64 w-full object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-xl font-bold mb-2">Price: ₹{item.price}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="bg-gray-300 text-black px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-gray-300 text-black px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
              <p className="text-xl font-bold">
                Total: ₹{item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Display total price */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Total Price: ₹{calculateTotalPrice()}</h2>
        <a href='/buyer/paymentpage'>
        <button className="bg-red-500 text-white px-6 py-2 rounded">Proceed to Checkout</button>
        </a>
      </div>
    </div>
  );
};

export default Cart;
