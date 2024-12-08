import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../Shared/Loader"; // Import Loader component

const UserProfile = () => {
  // State to hold user information
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(true); // State for loader
  const [error, setError] = useState("");

  // Fetch user data from API on component load
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Replace with dynamic userId if available
    const userId = user?.user_id; // Ensure user object exists
    const apiUrl = "http://localhost:2003/api/user/profile/" + userId;

    if (userId) {
      axios
        .get(apiUrl)
        .then((response) => {
          setUserInfo(response.data);
          setIsLoading(false); // Stop loading after data is fetched
        })
        .catch((err) => {
          setError("Failed to load user information. Please try again later.");
          setIsLoading(false); // Stop loading even if an error occurs
        });
    } else {
      setError("User information not found. Please log in again.");
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="container mx-auto py-8">
      {isLoading ? (
        <Loader /> // Show loader while data is being fetched
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-center mb-8">Profile Information</h1>

          <div className="bg-white p-6 rounded shadow-md">
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <p className="text-gray-800">{userInfo.name || "N/A"}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <p className="text-gray-800">{userInfo.email || "N/A"}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <p className="text-gray-800">{userInfo.phone || "N/A"}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Address</label>
              <p className="text-gray-800">{userInfo.address || "N/A"}</p>
            </div>

            <div className="flex justify-center mt-6">
              <Link to="/edit-profile">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
