import React, { useState } from 'react';

const CottonSarees = () => {
  const [wishlist, setWishlist] = useState([]); // State for managing wishlist

  const sarees = [
    {
      id: 1,
      name: 'Classic Cotton Saree',
      description: 'A timeless piece with intricate patterns and a soft finish.',
      price: '₹900',
      image: 'https://tse3.mm.bing.net/th?id=OIG1.t5mnvl_a7BvToqXVC7yr&pid=ImgGn',
    },
    {
      id: 2,
      name: 'Handwoven Cotton Saree',
      description: 'Handwoven with love, perfect for every occasion.',
      price: '₹1500',
      image: 'https://tse4.mm.bing.net/th?id=OIG3.I4VGIQuFXip5ruXWIzo8&pid=ImgGn',
    },
    {
      id: 3,
      name: 'Traditional Cotton Saree',
      description: 'Bring tradition to life with this beautifully crafted saree.',
      price: '₹500',
      image: 'https://th.bing.com/th/id/OIP.6Qj4wPIBBfj_5lw1Gg5M9QHaNK?w=187&h=333&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 4,
      name: 'Elegant Cotton Saree',
      description: 'An elegant cotton saree with modern designs and comfort.',
      price: '₹1000',
      image: 'https://th.bing.com/th/id/OIP.KenLvuwaqFXnYh8T3k83sQHaIz?w=194&h=230&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 5,
      name: 'Designer Cotton Saree',
      description: 'A designer cotton saree for festive and special occasions.',
      price: '₹1900',
      image: 'https://tse3.mm.bing.net/th?id=OIG1.ocqEVUO8QdMl4MhIvwpa&w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn',
    },
    {
      id: 6,
      name: 'Vintage Cotton Saree',
      description: 'Vintage-inspired cotton saree for a regal look.',
      price: '₹2500',
      image: 'https://th.bing.com/th/id/OIP.hWshiMVE3j7yPgSQzGpsdAHaFj?w=249&h=187&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 7,
      name: 'Festive Cotton Saree',
      description: 'Perfect for festivals, this saree comes with beautiful patterns.',
      price: '₹6500',
      image: 'https://th.bing.com/th/id/OIP.7N22j3oHE64_iUMbfC13DwHaHa?w=194&h=194&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 8,
      name: 'Contemporary Cotton Saree',
      description: 'A blend of traditional and modern designs in pure cotton.',
      price: '₹7500',
      image: 'https://th.bing.com/th/id/OIP.80ChNSVYiggjqXyRndwOqAHaJf?w=194&h=250&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
  ];

  // Function to handle adding to wishlist
  const handleAddToWishlist = (saree) => {
    setWishlist([...wishlist, saree]);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cotton Sarees Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sarees.map((saree) => (
          <div key={saree.id} className="bg-white p-4 border rounded shadow">
            <img src={saree.image} alt={saree.name} className="h-64 w-full object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{saree.name}</h2>
            <p className="text-gray-700 mb-4">{saree.description}</p>
            <p className="text-xl font-bold mb-4">{saree.price}</p>
            <div className="flex justify-between">
              <button className="bg-[#82d0fc] text-white px-4 py-2 rounded">Add to Cart</button>
              <button
                onClick={() => handleAddToWishlist(saree)}
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
            {wishlist.map((saree, index) => (
              <div key={index} className="bg-white p-4 border rounded shadow">
                <img src={saree.image} alt={saree.name} className="h-64 w-full object-cover mb-4" />
                <h2 className="text-xl font-semibold mb-2">{saree.name}</h2>
                <p className="text-gray-700 mb-4">{saree.description}</p>
                <p className="text-xl font-bold mb-4">{saree.price}</p>
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

export default CottonSarees;
