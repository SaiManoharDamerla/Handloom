import React, { useState } from 'react';

const Rugs = () => {
  const [wishlist, setWishlist] = useState([]); // State for managing wishlist

  const rugs = [
    {
      id: 1,
      name: 'Vintage Persian Rug',
      description: 'A beautifully crafted vintage Persian rug to bring a classic touch to your home.',
      price: '₹500',
      image: 'https://th.bing.com/th/id/OIP.t7riXHEz7PtpuPDPvMgwaAHaJw?w=194&h=257&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 2,
      name: 'Modern Abstract Rug',
      description: 'An abstract rug with bold patterns, perfect for a modern living space.',
      price: '₹800',
      image: 'https://th.bing.com/th/id/OIP.TneFG9YFQu6KX2-hx1-snQHaHa?w=198&h=198&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 3,
      name: 'Handwoven Jute Rug',
      description: 'Eco-friendly jute rug, handwoven to provide both style and sustainability.',
      price: '₹1200',
      image: 'https://th.bing.com/th/id/OIP.zFKcCpJI3fKufM4exJK_4gHaHa?w=208&h=208&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 4,
      name: 'Bohemian Style Rug',
      description: 'Boho-style rug with vibrant colors and patterns to add character to any room.',
      price: '₹1000',
      image: 'https://th.bing.com/th/id/OIP.6YlxuB-ARlly-gVCes5aZAHaJz?w=138&h=182&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 5,
      name: 'Geometric Wool Rug',
      description: 'A plush wool rug with geometric designs, adding warmth to your living space.',
      price: '₹900',
      image: 'https://th.bing.com/th/id/OIP.BAj4Ak-_7VngovZbkuSnUQHaHa?w=217&h=217&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 6,
      name: 'Minimalist Neutral Rug',
      description: 'Neutral-toned rug that complements any decor style with its minimal design.',
      price: '₹600',
      image: 'https://th.bing.com/th/id/OIP.JKCknoOrfD28Zr7MS7_DmgHaFj?w=257&h=193&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
  ];

  // Function to handle adding to wishlist
  const handleAddToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Rugs Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rugs.map((item) => (
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

export default Rugs;
