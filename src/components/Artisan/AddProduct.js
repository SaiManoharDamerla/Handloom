import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    categoryName: "",
    stockQuantity: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const seller = JSON.parse(localStorage.getItem("seller"));

    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("categoryName", product.categoryName);
    formData.append("stockQuantity", product.stockQuantity);
    formData.append("sellerId", seller.seller_id);
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      const response = await axios.post(
        "http://localhost:2003/api/seller/addproduct",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSuccessMessage("Product added successfully!");
      setErrorMessage("");
      setProduct({
        productName: "",
        description: "",
        price: "",
        categoryName: "",
        stockQuantity: "",
        
      });
      setSelectedImage(null);
      console.log(response.data);
    } catch (error) {
      setErrorMessage("Failed to add product. Please try again.");
      setSuccessMessage("");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add New Product
        </h2>
        {successMessage && (
          <div className="mb-4 text-green-600 font-medium">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="mb-4 text-red-600 font-medium">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleInputChange}
              className="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product description"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Category Name
            </label>
            <select
              name="categoryName"
              value={product.categoryName}
              onChange={handleInputChange}
              className="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Cotten Sarees">Cotten Sarees</option>
              <option value="Silk Sarees">Silk Sarees</option>
              <option value="Apparels">Apparels</option>
              <option value="Lungies">Lungies</option>
              <option value="Kurta">Kurta</option>
              <option value="Cushions">Cushions</option>
              <option value="Rugs">Rugs</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Stock Quantity
            </label>
            <input
              type="number"
              name="stockQuantity"
              value={product.stockQuantity}
              onChange={handleInputChange}
              className="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter stock quantity"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Image</label>
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={handleImageChange}
              className="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {selectedImage && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
