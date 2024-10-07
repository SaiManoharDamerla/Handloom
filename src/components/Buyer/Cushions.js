import React, { useState } from 'react';

const Cushions = () => {
  const [wishlist, setWishlist] = useState([]); // State for managing wishlist

  const cushions = [
    {
      id: 1,
      name: 'Floral Embroidered Cushion',
      description: 'A vibrant cushion with floral embroidery to add a touch of elegance.',
      price: '₹800',
      image: 'https://th.bing.com/th/id/OIP.4aAJlgGZL_PLc3H7hC5yIAHaHa?w=192&h=192&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 2,
      name: 'Velvet Luxury Cushion',
      description: 'Soft velvet cushion, perfect for adding a luxurious feel to your decor.',
      price: '₹1000',
      image: 'https://th.bing.com/th/id/OIP.i57O__B2VWlEUD745z-oZAHaHa?w=204&h=204&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 3,
      name: 'Geometric Pattern Cushion',
      description: 'A modern cushion with geometric patterns, ideal for contemporary spaces.',
      price: '₹1100',
      image: 'https://th.bing.com/th/id/OIP.JJTyRIAo0ZFqKA_k303UZAHaHx?w=184&h=193&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 4,
      name: 'Handwoven Cotton Cushion',
      description: 'A handwoven cotton cushion, bringing comfort and style to any room.',
      price: '₹1000',
      image: 'https://th.bing.com/th/id/OIP.7K0ZImIZaa_clWylvdR-ogHaHs?w=190&h=197&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 5,
      name: 'Textured Linen Cushion',
      description: 'A textured linen cushion that complements any sofa or chair.',
      price: '₹1300',
      image: 'https://th.bing.com/th/id/OIP.RUkPP99MmD5Y3dK49L_XHAHaGq?w=216&h=194&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 6,
      name: 'Printed Boho Cushion',
      description: 'Boho-inspired cushion with a fun and playful design.',
      price: '₹1250',
      image: 'https://th.bing.com/th/id/OIP.5FdLDD_i7pVXQTSipmBA6gHaHa?w=191&h=191&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
  ];

  // Function to handle adding to wishlist
  const handleAddToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cushions Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cushions.map((item) => (
          <div key={item.id} className="bg-white p-4 border rounded shadow">
            <img src={item.image} alt={item.name} className="h-64 w-full object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <p className="text-xl font-bold mb-4">{item.price}</p>
            <div className="flex justify-between">
              <button className="bg-[#82d0fc] text-white px-4 py-2 rounded">Add to Cart</button>
              <button
                onClick={() => handleAddToWishlist(item)}
                className="bg-red-400 text-white px-4 py-2 rounded"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Wishlist Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-4">Your Wishlist</h2>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wishlist.map((item, index) => (
              <div key={index} className="bg-white p-4 border rounded shadow">
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover mb-4" />
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <p className="text-xl font-bold mb-4">{item.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cushions;
