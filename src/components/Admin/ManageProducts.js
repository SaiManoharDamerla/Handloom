import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([
    // Sample product data
    { id: 1, name: 'Cotton Saree', category: 'Sarees', price: '₹4500' },
    { id: 2, name: 'Silk Saree', category: 'Sarees', price: '₹5500' },
    { id: 3, name: 'Men’s Kurta', category: 'Apparels', price: '₹2500' },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    const updatedProducts = [...products, { ...newProduct, id: products.length + 1 }];
    setProducts(updatedProducts);
    setNewProduct({ name: '', category: '', price: '' }); // Reset input fields
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      {/* Add Product Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          className="border p-2 mr-2 mb-4"
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="border p-2 mr-2 mb-4"
        />
        <input
          type="text"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="border p-2 mr-2 mb-4"
        />
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">{product.name}</td>
              <td className="border border-gray-300 px-4 py-2">{product.category}</td>
              <td className="border border-gray-300 px-4 py-2">{product.price}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
                <Link to={`/admin/update-product/${product.id}`}>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded ml-2">
                    Update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
