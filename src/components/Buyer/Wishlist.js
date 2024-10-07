import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  // Example wishlist data (replace with data from your backend or state management)
  const initialWishlist = [
    {
      id: 1,
      name: 'Classic Cotton Saree',
      price: 4500,
      image: 'https://tse3.mm.bing.net/th?id=OIG1.t5mnvl_a7BvToqXVC7yr&pid=ImgGn',
    },
    {
      id: 2,
      name: 'Royal Silk Saree',
      price: 9500,
      image: 'https://th.bing.com/th/id/OIP.R-AAaypF5masMG89eNcUBwAAAA?w=194&h=271&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 3,
      name: 'Handwoven Rug',
      price: 5200,
      image: 'https://th.bing.com/th/id/OIP.zFKcCpJI3fKufM4exJK_4gHaHa?w=208&h=208&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
  ];

  const [wishlistItems, setWishlistItems] = useState(initialWishlist);

  // Function to remove an item from the wishlist
  const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className="text-center">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white p-4 border rounded shadow">
              <img src={item.image} alt={item.name} className="h-64 w-full object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-xl font-bold mb-2">Price: ₹{item.price}</p>
              <div className="flex justify-between items-center">
                {/* Add to Cart Button */}
                <Link to="/buyer/cart" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Add to Cart
                </Link>
                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-400 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
