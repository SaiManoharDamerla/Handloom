import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CiUser } from "react-icons/ci";
import Feedback from './../Buyer/Feedback';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const toggleDropdown = (category) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  // Fetch cart count
  useEffect(() => {
    const fetchCartCount = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return; // If no user, skip fetching cart count

      try {
        const response = await axios.get(`http://localhost:2003/api/user/cartcount/${user.user_id}`);
        setCartCount(response.data);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };

    fetchCartCount();

    // Auto-refresh the page every 30 seconds
    const interval = setInterval(() => {
      window.location.reload();
    }, 30000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    navigate("/"); // Redirect to login page
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/home" className="flex items-center text-2xl font-bold text-black">
          <img
            src="https://tse1.mm.bing.net/th?id=OIG3.0CS_8N.4hPaCHTUXCjpw&pid=ImgGn"
            alt="Handloom Fashion Logo"
            className="h-10"
          />
          <span className="ml-2">Handloom Fashion</span>
        </Link>

        {/* Hamburger for mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          <span className="text-black text-2xl">{isOpen ? "✖️" : "☰"}</span>
        </button>

        <nav className={`md:flex md:space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link to="/home" className="hover:text-gray-600 px-4 py-2 font-semibold text-black">
            Home
          </Link>

          {/* Dropdown for Sarees */}
          <div className="relative group inline-block md:static">
            <button
              className="hover:text-gray-600 px-4 py-2 font-semibold text-black md:block md:py-2 md:px-0"
              onClick={() => toggleDropdown("sarees")}
            >
              Sarees
            </button>
            <ul
              className={`absolute bg-white border w-48 shadow-lg z-10 transition-opacity duration-300 ease-in-out ${
                dropdownOpen.sarees ? "block" : "hidden"
              } md:group-hover:block`}
            >
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

          <Link to="/apparels" className="hover:text-gray-600 px-4 py-2 font-semibold text-black">
            Apparels
          </Link>

          {/* Dropdown for Men's Wear */}
          <div className="relative group inline-block md:static">
            <button
              className="hover:text-gray-600 px-4 py-2 font-semibold text-black md:block md:py-2 md:px-0"
              onClick={() => toggleDropdown("mensWear")}
            >
              Men’s Wear
            </button>
            <ul
              className={`absolute bg-white border w-48 shadow-lg z-10 transition-opacity duration-300 ease-in-out ${
                dropdownOpen.mensWear ? "block" : "hidden"
              } md:group-hover:block`}
            >
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
              onClick={() => toggleDropdown("homeDecor")}
            >
              Home & Decors
            </button>
            <ul
              className={`absolute bg-white border w-48 shadow-lg z-10 transition-opacity duration-300 ease-in-out ${
                dropdownOpen.homeDecor ? "block" : "hidden"
              } md:group-hover:block`}
            >
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

          <Link to="/buyer/orders" className="hover:text-gray-600 px-4 py-2 font-semibold text-black">
            View Orders
          </Link>
        </nav>

        {/* Cart & Profile */}
        <div className="flex items-center space-x-6 relative">
          {/* Cart */}
          <Link to="/buyer/cart" className="text-black text-3xl flex items-center relative">
            <div className="absolute -top-2 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </div>
            🛒
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center justify-center hover:text-gray-600 px-4 py-2 font-semibold text-black"
              onClick={() => toggleDropdown("profile")}
            >
              <CiUser className="text-3xl" />
            </button>
            <ul
              className={`absolute bg-white border w-48 shadow-lg z-10 transition-opacity duration-300 ${
                dropdownOpen.profile ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to="/buyer/userprofile" className="block px-4 py-2 hover:bg-gray-200 text-black">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/buyer/feedback"className="block px-4 py-2 hover:bg-gray-200 text-black">
                Feedback
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:bg-gray-200 text-black w-full text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
