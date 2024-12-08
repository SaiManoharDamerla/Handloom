import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedFields, setUpdatedFields] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [viewImage, setViewImage] = useState(null); // For full-view image modal

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const seller = JSON.parse(localStorage.getItem("seller"));
      try {
        const response = await axios.get(
          `http://localhost:2003/api/seller/viewproducts?sellerId=${seller.seller_id}`
        );
        setProducts(response.data);
      } catch (error) {
        setErrorMessage("Failed to fetch products. Please try again.");
      }
    };
    fetchProducts();
  }, []);

  // Open edit modal
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setUpdatedFields({
      price: product.price,
      stockQuantity: product.stockQuantity,
    });
  };

  // Handle input field changes
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFields((prev) => ({ ...prev, [name]: value }));
  };

  // Save updated product
  const handleSave = async () => {
    try {
      const updatedProduct = { ...selectedProduct, ...updatedFields };
      await axios.post("http://localhost:2003/api/seller/updateproduct", updatedProduct);
      setProducts((prev) =>
        prev.map((product) =>
          product.id === selectedProduct.id ? updatedProduct : product
        )
      );
      setSelectedProduct(null);
      setSuccessMessage("Product updated successfully!");
    } catch (error) {
      setErrorMessage("Failed to update product. Please try again.");
    }
  };

  // Close modals
  const handleCloseEditModal = () => setSelectedProduct(null);
  const handleCloseImageModal = () => setViewImage(null);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">All Products</h2>
        {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
        <table className="w-full bg-white shadow-md rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Product Name</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Stock</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="py-2 px-4">
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-16 h-16 rounded-full cursor-pointer object-cover"
                    onClick={() => setViewImage(product.image)}
                  />
                </td>
                <td className="py-2 px-4">{product.productName}</td>
                <td className="py-2 px-4">{product.description}</td>
                <td className="py-2 px-4">₹{product.price}</td>
                <td className="py-2 px-4">{product.stockQuantity}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Edit Product</h3>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={updatedFields.price}
                  onChange={handleFieldChange}
                  className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stockQuantity"
                  value={updatedFields.stockQuantity}
                  onChange={handleFieldChange}
                  className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCloseEditModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Full-View Image Modal */}
        {viewImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
             <button
                onClick={handleCloseImageModal}
                className="absolute top-4 right-4 text-white rounded-full p-1"
              >
                ✕
              </button>
            <div className="relative">
              <img
                src={viewImage}
                alt="Product Full View"
                className="max-w-full max-h-screen rounded shadow-lg"
              />
             
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProducts;
