import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from './../Shared/Loader';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      try {
        if (!user) return;
        const response = await axios.get(
          `http://localhost:2003/api/user/cart/${user.user_id}`
        );
        setCartItems(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleRemoveItem = async (product_id) => {
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      if (!user) {
        alert("You must log in to remove items.");
        return;
      }

      const response = await axios.delete(
        `http://localhost:2003/api/user/cart/remove/${user.user_id}/${product_id}`
      );

      if (response.status === 200) {
        setCartItems(Array.isArray(response.data) ? response.data : []);
      }
    } catch (error) {
      console.error("Error removing item from cart", error);
      alert("Failed to remove item from cart");
    }
  };

  const handleQuantityChange = async (product_id, quantity) => {
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      if (!user) {
        alert("You must log in to update quantity.");
        return;
      }

      const response = await axios.put(
        `http://localhost:2003/api/user/cart/update/${user.user_id}/${product_id}/${quantity}`,
        { quantity }
      );

      if (response.status === 200) {
        setCartItems(Array.isArray(response.data) ? response.data : []);
      }
    } catch (error) {
      console.error("Error updating quantity", error);
      alert("Failed to update quantity");
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const navigateToPaymentPage = () => {
    const totalPrice = calculateTotalPrice();
    navigate("/buyer/paymentpage", { state: { totalPrice, cartItems } });
  };

  const navigate = useNavigate();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl font-semibold text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.product.product_id}
              className="bg-white p-4 border rounded shadow"
            >
              <img
                src={item.product.image}
                alt={item.product.productName}
                className="h-64 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.product.productName}</h2>
              <p className="text-xl font-bold mb-2">Price: ₹{item.product.price}</p>

              <label htmlFor={`quantity-${item.product.product_id}`} className="block mb-2">
                Quantity:
              </label>
              <select
                id={`quantity-${item.product.product_id}`}
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.product.product_id, parseInt(e.target.value, 10))
                }
                className="border rounded px-2 py-1"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>

              <button
                onClick={() => handleRemoveItem(item.product.product_id)}
                className="bg-red-500 text-white px-3 py-1 rounded mt-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Total Price: ₹{calculateTotalPrice()}</h2>
          <button
            onClick={navigateToPaymentPage}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
