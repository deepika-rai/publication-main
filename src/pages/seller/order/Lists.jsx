import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationDialog from "../../../components/ConfirmDialog"; 

const OrderList = () => {
  const currency = "$";
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "view" or "refund"
  const [selectedOrder, setSelectedOrder] = useState(null);

   const fetchOrders = async () => {
    try {
      const dummyOrders = [
        {
          _id: "1",
          userId: "user1",
          items: [
            { book: { _id: "prod1", name: "Wireless Mouse" }, quantity: 2 },
            { book: { _id: "prod2", name: "Mechanical Keyboard" }, quantity: 1 },
          ],
          amount: 120.99,
          address: {
            firstName: "Amit",
            lastName: "Sharma",
            street: "123 MG Road",
            city: "Delhi",
            state: "Delhi",
            zipcode: "110001",
            country: "India",
            phone: "+91-9876543210",
          },
          status: "Shipped",
          paymentType: "UPI",
          isPaid: true,
          createdAt: new Date().toISOString(),
        },
        {
          _id: "2",
          userId: "user2",
          items: [
            { book: { _id: "prod3", name: "Smartphone Case" }, quantity: 3 },
          ],
          amount: 45.5,
          address: {
            firstName: "Rina",
            lastName: "Mehta",
            street: "456 Park Avenue",
            city: "Mumbai",
            state: "Maharashtra",
            zipcode: "400001",
            country: "India",
            phone: "+91-9123456789",
          },
          status: "Order Placed",
          paymentType: "Credit Card",
          isPaid: false,
          createdAt: new Date().toISOString(),
        },
      ];
      setOrders(dummyOrders);
    } catch (error) {
      toast.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
    toast.success("Order status updated (dummy)");
  };

  const openModal = (type, order) => {
    setSelectedOrder(order);
    setModalType(type);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    if (modalType === "refund") {
      toast.success(`Refund initiated for Order #${selectedOrder._id}`);
    } else if (modalType === "view") {
      toast(`Viewing order for ${selectedOrder.address.firstName}`);
    }
    setModalOpen(false);
  };

  return (
    <div className="flex-1 min-h-[95vh] overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
         <h2 className="text-2xl mb-6" style={{ color: "#0aad0a" }}>
            Order Management
          </h2>
        <div className="overflow-x-auto bg-white shadow border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">#</th>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Customer</th>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Items</th>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Amount</th>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Address</th>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Payment</th>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Status</th>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentOrders.map((order, index) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">{indexOfFirstItem + index + 1}</td>
                  <td className="px-4 py-4 font-medium">
                    {order.address.firstName} {order.address.lastName}
                  </td>
                  <td className="px-4 py-4">
                    {order.items.map(item => (
                      <div key={item.book._id}>
                        {item.book.name} x {item.quantity}
                      </div>
                    ))}
                  </td>
                  <td className="px-4 py-4">{currency}{order.amount.toFixed(2)}</td>
                  <td className="px-4 py-4">
                    {order.address.street}, {order.address.city}, {order.address.state}<br />
                    {order.address.zipcode}, {order.address.country}<br />
                    📞 {order.address.phone}
                  </td>
                  <td className="px-4 py-4">
                    {order.paymentType}<br />
                    <span className={order.isPaid ? "text-green-600 font-semibold" : "text-red-600"}>
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <select
                      value={order.status}
                      onChange={e => handleStatusChange(order._id, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="px-4 py-4 space-x-2">
                    <button
                      onClick={() => openModal("view", order)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      View
                    </button>
                    <button
                      onClick={() => openModal("refund", order)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Refund
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          {orders.length > itemsPerPage && (
            <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t">
              <div className="text-sm text-gray-700">
                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, orders.length)} of{" "}
                {orders.length} orders
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationDialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        title={modalType === "refund" ? "Confirm Refund" : "View Order Details"}
        message={
          modalType === "refund"
            ? `Are you sure you want to refund order #${selectedOrder?._id}?`
            : `Do you want to view details for order #${selectedOrder?._id}?`
        }
        confirmText={modalType === "refund" ? "Refund" : "View"}
        cancelText="Cancel"
      />
    </div>
  );
};

export default OrderList;
