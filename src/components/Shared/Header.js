import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci'; // Adjust the import path based on where CiUser is located


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [dropdownOpen, setDropdownOpen] = useState({}); // State for dropdowns

  const toggleDropdown = (category) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <header className="bg-white border-b">
    <div className="container mx-auto flex justify-between items-center py-4">
      {/* Logo */}
      <Link to="/home" className="flex items-center text-2xl font-bold text-black">
        <img
          src="https://tse1.mm.bing.net/th?id=OIG3.0CS_8N.4hPaCHTUXCjpw&pid=ImgGn"
          alt="Handloom Fashion Logo"
          className="h-10" // Adjust height as needed
        />
        <span className="ml-2">Handloom Fashion</span>
      </Link>
  
      {/* Hamburger Icon for Mobile */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
        <span className="text-black text-2xl">{isOpen ? '✖️' : '☰'}</span>
      </button>
  
      {/* Navigation Links */}
      <nav className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <Link to="/home" className="hover:text-gray-600 px-4 py-2 font-semibold text-black">Home</Link>
  
        {/* Dropdown for Sarees */}
        <div className="relative group inline-block md:static">
          <button
            className="hover:text-gray-600 px-4 py-2 font-semibold text-black md:block md:py-2 md:px-0"
            onClick={() => toggleDropdown('sarees')}
          >
            Sarees
          </button>
          <ul className={`absolute bg-white border w-48 shadow-lg z-10 transition-opacity duration-300 ease-in-out ${dropdownOpen.sarees ? 'block' : 'hidden'} md:group-hover:block`}>
            <li>
              <Link to="/Buyer/Cottensarees" className="block px-4 py-2 hover:bg-gray-200 text-black">
                Cotton Sarees
              </Link>
            </li>
            <li>
              <Link to="/Buyer/Silksarees" className="block px-4 py-2 hover:bg-gray-200 text-black">
                Silk Sarees
              </Link>
            </li>
          </ul>
        </div>
  
        <Link to="/apparels" className="hover:text-gray-600 px-4 py-2 font-semibold text-black">Apparels</Link>
  
        {/* Dropdown for Men's Wear */}
        <div className="relative group inline-block md:static">
          <button
            className="hover:text-gray-600 px-4 py-2 font-semibold text-black md:block md:py-2 md:px-0"
            onClick={() => toggleDropdown('mensWear')}
          >
            Men’s Wear
          </button>
          <ul className={`absolute bg-white border w-48 shadow-lg z-10 transition-opacity duration-300 ease-in-out ${dropdownOpen.mensWear ? 'block' : 'hidden'} md:group-hover:block`}>
            <li>
              <Link to="/buyer/lungies" className="block px-4 py-2 hover:bg-gray-200 text-black">
                Lungies
              </Link>
            </li>
            <li>
              <Link to="/buyer/kurta" className="block px-4 py-2 hover:bg-gray-200 text-black">
                Kurta
              </Link>
            </li>
          </ul>
        </div>
  
        {/* Dropdown for Home & Decor */}
        <div className="relative group inline-block md:static">
          <button
            className="hover:text-gray-600 px-4 py-2 font-semibold text-black md:block md:py-2 md:px-0"
            onClick={() => toggleDropdown('homeDecor')}
          >
            Home & Decors
          </button>
          <ul className={`absolute bg-white border w-48 shadow-lg z-10 transition-opacity duration-300 ease-in-out ${dropdownOpen.homeDecor ? 'block' : 'hidden'} md:group-hover:block`}>
            <li>
              <Link to="/buyer/cushions" className="block px-4 py-2 hover:bg-gray-200 text-black">
                Cushions
              </Link>
            </li>
            <li>
              <Link to="/buyer/rugs" className="block px-4 py-2 hover:bg-gray-200 text-black">
                Rugs
              </Link>
            </li>
          </ul>
        </div>
  
        {/* Login & Logout */}
        <div className="relative group inline-block md:static">
          <button
            className="flex items-center justify-center hover:text-gray-600 px-4 py-2 font-semibold text-black md:block md:py-2 md:px-0 ml-4" // Add ml-4 for spacing
            onClick={() => toggleDropdown('homeDecor')}
          >
            <CiUser className="text-3xl" /> {/* Icon size increased */}
          </button>
          <ul className={`absolute bg-white border w-48 shadow-lg z-10 transition-opacity duration-300 ease-in-out ${dropdownOpen.homeDecor ? 'block' : 'hidden'} md:group-hover:block`}>
            <li>
              <Link to="/buyer/userprofile" className="block px-4 py-2 hover:bg-gray-200 text-black">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 text-black">
                LogOut
              </Link>
            </li>
          </ul>
        </div>
  
      </nav>
  
      <div className="hidden md:flex items-center justify-end space-x-4 py-2 px-4">
        {/* Heart (Wishlist) */}
        <Link to="/buyer/wishlist" className="relative">
          <span className="text-black text-3xl">♡</span>
        </Link>
  
        {/* Shopping Cart */}
        <Link to="/buyer/cart" className="relative">
          <span className="text-black text-3xl">🛒</span>
        </Link>
      </div>
    </div>
  
    {/* Marquee for Announcement */}
    <marquee className="bg-[#82d0fc] py-2">
      <span style={{ color: 'red' }}>20% Discount for all Products.</span>
    </marquee>
    <marquee className="bg-[#82d0fc] py-2">
      <span style={{ color: 'blue' }}>NEW COLLECTION!</span>
      <span style={{ color: 'red' }}> Digital Printed Silk Sarees || Designer's Collection</span>
    </marquee>
  </header>
  
  );
};

export default Header;
