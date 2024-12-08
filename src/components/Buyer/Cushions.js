import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './../Shared/Loader';

const Cushions = () => {
  const [cushions, setCushions] = useState([]); // State to store cushions fetched from API
  const [quantities, setQuantities] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const fetchCushions = async () => {
      try {
        const response = await axios.get(
          'http://localhost:2003/api/user/category?category=Cushions'
        );
        setCushions(response.data);

        const initialQuantities = {};
        response.data.forEach((cushion) => {
          initialQuantities[cushion.product_id] = 1;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error fetching cushions:', error);
      }
      finally{
        setIsLoading(false);
      }
    };

    fetchCushions();
  }, []);

  const handleQuantityChange = (id, change) => {

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] + change),
    }));
  };

  const handleAddToCart = async (cushion) => {
    setIsLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        alert('You must be logged in to add items to the cart.');
        return;
      }

      const quantity = quantities[cushion.product_id] || 1;

      const response = await axios.post(
        `http://localhost:2003/api/user/cart/${user.user_id}/${cushion.product_id}/${quantity}`
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
    finally{
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />; // Show loader while data is being fetched
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cushion Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cushions.length > 0 ? (
          cushions.map((cushion) => (
            <div key={cushion.product_id} className="bg-white p-4 border rounded shadow">
              <img
                src={cushion.image}
                alt={cushion.productName}
                className="h-64 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{cushion.productName}</h2>
              <p className="text-gray-700 mb-4">{cushion.description}</p>
              <p className="text-xl font-bold mb-4">₹{cushion.price}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(cushion.product_id, -1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantities[cushion.product_id] || 1}
                    readOnly
                    className="w-10 text-center border px-2 py-1 mx-2"
                  />
                  <button
                    onClick={() => handleQuantityChange(cushion.product_id, 1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => handleAddToCart(cushion)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No cushions available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Cushions;
