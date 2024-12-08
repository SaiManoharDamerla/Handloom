import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './../Shared/Loader';

const Rugs = () => {
  const [rugs, setRugs] = useState([]); // State to store rugs fetched from API
  const [quantities, setQuantities] = useState({}); // State to track quantities of each rug
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRugs = async () => {
      try {
        const response = await axios.get(
          'http://localhost:2003/api/user/category?category=Rugs'
        );
        setRugs(response.data);

        const initialQuantities = {};
        response.data.forEach((rug) => {
          initialQuantities[rug.product_id] = 1; // Default quantity is 1
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error fetching rugs:', error);
      }
      finally{
        setIsLoading(false);
      }
    };

    fetchRugs();
  }, []);

  const handleQuantityChange = (id, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] + change),
    }));
  };

  const handleAddToCart = async (rug) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        alert('You must be logged in to add items to the cart.');
        return;
      }

      const quantity = quantities[rug.product_id] || 1;

      const response = await axios.post(
        `http://localhost:2003/api/user/cart/${user.user_id}/${rug.product_id}/${quantity}`
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

  if (isLoading) {
    return <Loader />; // Show loader while data is being fetched
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Rugs Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rugs.length > 0 ? (
          rugs.map((rug) => (
            <div key={rug.product_id} className="bg-white p-4 border rounded shadow">
              <img
                src={rug.image}
                alt={rug.productName}
                className="h-64 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{rug.productName}</h2>
              <p className="text-gray-700 mb-4">{rug.description}</p>
              <p className="text-xl font-bold mb-4">₹{rug.price}</p>

              {/* Quantity Counter */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(rug.product_id, -1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantities[rug.product_id] || 1}
                    readOnly
                    className="w-10 text-center border px-2 py-1 mx-2"
                  />
                  <button
                    onClick={() => handleQuantityChange(rug.product_id, 1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => handleAddToCart(rug)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No rugs available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Rugs;
