import React, { useState } from 'react';

const ManageInventory = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Classic Cotton Saree', category: 'Cotten Sarees', price: '₹4500' },
    { id: 2, name: 'Handwoven Kurta', category: 'Kurta', price: '₹2500' },
    { id: 3, name: 'Designer Cushion', category: 'Home Decor', price: '₹1200' },
  ]);
  const [newProduct, setNewProduct] = useState({ id: '', name: '', category: '', price: '' });
  const [editingProduct, setEditingProduct] = useState(null);

  const categories = ['Cotten Sarees','Silk Sarees', 'Lungies', 'Kurta','Home Decor', 'Apparels', 'Rugs', 'Cushions'];

  // Add or update a product
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(product =>
        product.id === editingProduct.id ? newProduct : product
      ));
      setEditingProduct(null);
    } else {
      // Add new product
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    }
    setNewProduct({ id: '', name: '', category: '', price: '' });
  };

  // Delete a product
  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  // Load product into form for editing
  const handleEditProduct = (product) => {
    setNewProduct(product);
    setEditingProduct(product);
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-100">
      <div className="container max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">Manage Inventory</h1>
        
        {/* Product Form */}
        <form onSubmit={handleSaveProduct} className="mb-8">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              placeholder="Product Name"
              className="p-2 border border-gray-300 rounded"
            />
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              placeholder="Product Price"
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded transition duration-150 ease-in-out hover:bg-blue-600"
          >
            {editingProduct ? 'Update Product' : 'Add Product'}
          </button>
        </form>

        {/* Product Table */}
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.id}</td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.category}</td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageInventory;
