import React from "react";
import { useNavigate } from "react-router-dom";

const ManageInventory = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl p-8">
        {/* Add Product Card */}
        <div
          onClick={() => navigate("/artisan/addproduct")}
          className="cursor-pointer bg-blue-500 text-white p-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
          <p className="text-center">
            Click here to add a new product to your inventory.
          </p>
        </div>

        {/* View All Products Card */}
        <div
          onClick={() => navigate("/artisan/viewproducts")}
          className="cursor-pointer bg-green-500 text-white p-8 rounded-lg shadow-lg hover:bg-green-600 transition duration-200"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">View All Products</h2>
          <p className="text-center">
            Click here to view and manage all your products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManageInventory;
