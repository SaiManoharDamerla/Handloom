import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './../Shared/Loader'; // Import the Loader component

const CottonSarees = () => {
  const [sarees, setSarees] = useState([]); // State to store sarees fetched from API
  const [quantities, setQuantities] = useState({}); // State to track quantities of each saree
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch sarees from API based on category
  useEffect(() => {
    const fetchSarees = async () => {
      try {
        const response = await axios.get(
          'http://localhost:2003/api/user/category?category=Cotten%20Sarees'
        );
        setSarees(response.data);

        // Set initial quantities for each saree independently
        const initialQuantities = {};
        response.data.forEach((saree) => {
          initialQuantities[saree.product_id] = 1; // Set default quantity as 1 for each saree
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error fetching sarees:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchSarees();
  }, []);

  // Handle quantity change independently for a specific saree
  const handleQuantityChange = (id, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] + change), // Ensure minimum quantity is 1
    }));
  };

  // Handle add to cart
  const handleAddToCart = async (saree) => {
    try {
      const user = JSON.parse(localStorage.getItem('user')); // Get logged-in user from localStorage
      if (!user) {
        alert('You must be logged in to add items to the cart.');
        return;
      }

      const quantity = quantities[saree.product_id] || 1; // Fetch the quantity for this specific saree
      console.log(`Added to cart: ${saree.productName} with quantity: ${quantity}`);

      const response = await axios.post(
        `http://localhost:2003/api/user/cart/${user.user_id}/${saree.product_id}/${quantity}`
      );

      if (response.status === 200) {
        alert('Item successfully added to cart.');
      } else {
        alert('Failed to add item to the cart.');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert('Error adding to cart. Please try again.');
    }
  };

  const handleBuyNow = (saree) => {
    console.log(`Buying now: ${saree.productName}`);
    alert('Buy Now feature is not implemented yet.');
  };

  if (isLoading) {
    return <Loader />; // Show loader while data is being fetched
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cotton Sarees Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sarees.length > 0 ? (
          sarees.map((saree) => (
            <div key={saree.product_id} className="bg-white p-4 border rounded shadow">
              <img
                src={saree.image}
                alt={saree.productName}
                className="h-64 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{saree.productName}</h2>
              <p className="text-gray-700 mb-4">{saree.description}</p>
              <p className="text-xl font-bold mb-4">₹{saree.price}</p>

              {/* Individual Quantity Counter */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(saree.product_id, -1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantities[saree.product_id] || 1}
                    readOnly
                    className="w-10 text-center border px-2 py-1 mx-2"
                  />
                  <button
                    onClick={() => handleQuantityChange(saree.product_id, 1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => handleAddToCart(saree)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(saree)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No sarees available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CottonSarees;
