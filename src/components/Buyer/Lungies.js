import React, { useState, useEffect } from "react";
import axios from "axios"; // Import the Loader component
import Loader from './../Shared/Loader';

const Lungies = () => {
  const [lungies, setLungies] = useState([]); // State to store lungies fetched from API
  const [quantities, setQuantities] = useState({}); // State to track quantities of each lungi
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchLungies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2003/api/user/category?category=Lungies"
        );
        setLungies(response.data);

        const initialQuantities = {};
        response.data.forEach((lungi) => {
          initialQuantities[lungi.product_id] = 1;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error("Error fetching lungies:", error);
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchLungies();
  }, []);

  const handleQuantityChange = (id, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] + change),
    }));
  };

  const handleAddToCart = async (lungi) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        alert("You must be logged in to add items to the cart.");
        return;
      }

      const quantity = quantities[lungi.product_id] || 1;
      console.log(`Added to cart: ${lungi.productName} with quantity: ${quantity}`);

      const response = await axios.post(
        `http://localhost:2003/api/user/cart/${user.user_id}/${lungi.product_id}/${quantity}`
      );

      if (response.status === 200) {
        alert("Item successfully added to cart.");
      } else {
        alert("Failed to add item to the cart.");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Error adding to cart. Please try again.");
    }
  };

  const handleBuyNow = (lungi) => {
    console.log(`Buying now: ${lungi.productName}`);
    alert("Buy Now feature is not implemented yet.");
  };

  if (loading) {
    return <Loader />; // Show loader while data is being fetched
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Lungies Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lungies.length > 0 ? (
          lungies.map((lungi) => (
            <div
              key={lungi.product_id}
              className="bg-white p-4 border rounded shadow"
            >
              <img
                src={lungi.image}
                alt={lungi.productName}
                className="h-64 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{lungi.productName}</h2>
              <p className="text-gray-700 mb-4">{lungi.description}</p>
              <p className="text-xl font-bold mb-4">₹{lungi.price}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(lungi.product_id, -1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantities[lungi.product_id] || 1}
                    readOnly
                    className="w-10 text-center border px-2 py-1 mx-2"
                  />
                  <button
                    onClick={() => handleQuantityChange(lungi.product_id, 1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => handleAddToCart(lungi)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(lungi)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">
            No lungies available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Lungies;
