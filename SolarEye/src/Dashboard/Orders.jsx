import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState(''); // For filtering by status
  const [searchQuery, setSearchQuery] = useState(''); // For searching orders
  const [page, setPage] = useState(1); // Pagination
  const [limit, setLimit] = useState(10); // Pagination limit
  const [loading, setLoading] = useState(false);

  // Fetch orders
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:10000/api/orders', {
        params: {
          status: statusFilter,
          search: searchQuery,
          page: page,
          limit: limit,
        },
      });
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update order status
  const updateStatus = async (orderId, newStatus) => {
    try {
      await axios.patch('http://localhost:10000/api/orders/update-status', {
        orderId: orderId,
        status: newStatus,
      });
      fetchOrders(); // Refresh orders after status update
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [statusFilter, searchQuery, page, limit]);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        {/* Filters and Search */}
        <input
          type="text"
          placeholder="Search Orders"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mr-4"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Active">Active</option>
          <option value="Expired">Expired</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div key={order._id} className="border border-gray-300 p-4 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold">{order.serviceId.packageName}</h3>
              <p>{order.serviceId.description}</p>
              <p>Status: {order.status}</p>
              <button
                onClick={() => updateStatus(order._id, 'Active')}
                className="bg-green-500 text-white p-2 rounded-md mt-2"
              >
                Mark as Active
              </button>
              <button
                onClick={() => updateStatus(order._id, 'Cancelled')}
                className="bg-red-500 text-white p-2 rounded-md mt-2 ml-2"
              >
                Cancel Order
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          className="p-2 bg-blue-500 text-white rounded-md"
        >
          Prev
        </button>
        <span className="self-center">{`Page ${page}`}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="p-2 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderDashboard;
