import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from './../Shared/Loader';

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const staticOrders = [
    {
      order_id: 1,
      product: "Handwoven Silk Saree",
      order_date: "2024-12-01",
      delivery_date: "2024-12-07",
      status: "Delivered",
    },
    {
      order_id: 2,
      product: "Cotton Kurta Set",
      order_date: "2024-12-03",
      delivery_date: "2024-12-09",
      status: "Shipped",
    },
    {
      order_id: 3,
      product: "Woolen Shawl",
      order_date: "2024-12-04",
      delivery_date: "2024-12-12",
      status: "Processing",
    },
  ];

  // Fetch orders from backend on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
          alert("Please log in to view your orders.");
          setOrders(staticOrders); // Show static orders if user is not logged in
          return;
        }

        const response = await axios.get(`http://localhost:2003/api/user/orders/${user.user_id}`);
        setOrders(response.data.length > 0 ? response.data : staticOrders); // Use static orders if no orders are returned
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders(staticOrders); // Use static orders in case of error
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleTrackOrder = (orderId) => {
    navigate(`/buyer/orderdetails`);
  };

  if (isLoading) {
    return <Loader />; // Show loader while data is being fetched
  }

  return (
    <section className="min-h-screen bg-neutral-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Orders</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.order_id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200"
            >
              <h2 className="text-xl font-semibold mb-2">{order.product}</h2>
              <p className="text-gray-600 mb-2">Order Date: {order.order_date}</p>
              <p className="text-gray-600 mb-2">Delivery Date: {order.delivery_date}</p>
              <p className="text-gray-600 mb-2">Status: {order.status}</p>
              <button
                onClick={() => handleTrackOrder(order.order_id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Order Details
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Orders;
