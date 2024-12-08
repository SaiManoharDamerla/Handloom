import React, { useState, useEffect } from "react";
import axios from "axios"; // Import the Loader component
import Loader from './../Shared/Loader';

const Kurta = () => {
  const [kurtas, setKurtas] = useState([]); // State to store kurtas fetched from API
  const [quantities, setQuantities] = useState({}); // State to track quantities of each kurta
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchKurtas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2003/api/user/category?category=Kurta"
        );
        setKurtas(response.data);

        const initialQuantities = {};
        response.data.forEach((kurta) => {
          initialQuantities[kurta.product_id] = 1; // Set initial quantity to 1 for each kurta
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error("Error fetching kurtas:", error);
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchKurtas();
  }, []);

  const handleQuantityChange = (id, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] + change), // Ensure minimum quantity is 1
    }));
  };

  const handleAddToCart = async (kurta) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        alert("You must be logged in to add items to the cart.");
        return;
      }

      const quantity = quantities[kurta.product_id] || 1;

      const response = await axios.post(
        `http://localhost:2003/api/user/cart/${user.user_id}/${kurta.product_id}/${quantity}`
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

  if (loading) {
    return <Loader/>; // Show loader while data is being fetched
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Kurta Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kurtas.map((kurta) => (
          <div
            key={kurta.product_id}
            className="bg-white p-4 border rounded shadow"
          >
            <img
              src={kurta.image}
              alt={kurta.productName}
              className="h-64 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{kurta.productName}</h2>
            <p className="text-gray-700 mb-4">{kurta.description}</p>
            <p className="text-xl font-bold mb-4">₹{kurta.price}</p>
            <button
              onClick={() => handleAddToCart(kurta)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kurta;
