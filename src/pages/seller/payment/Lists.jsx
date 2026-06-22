import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationDialog from "./ConfirmDialog";

const PaymentList = () => {
  const currency = "₹";
  const [payments, setPayments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const fetchPayments = async () => {
    try {
      const dummyPayments = [
        {
          _id: "pay001",
          user: { name: "Amit Sharma", email: "amit@example.com" },
          amount: 120.99,
          method: "UPI",
          status: "Paid",
          createdAt: new Date().toISOString(),
        },
        {
          _id: "pay002",
          user: { name: "Rina Mehta", email: "rina@example.com" },
          amount: 45.5,
          method: "Credit Card",
          status: "Failed",
          createdAt: new Date().toISOString(),
        },
        {
          _id: "pay003",
          user: { name: "Suresh Verma", email: "suresh@example.com" },
          amount: 299.0,
          method: "Net Banking",
          status: "Refunded",
          createdAt: new Date().toISOString(),
        },
      ];
      setPayments(dummyPayments);
    } catch (error) {
      toast.error("Failed to fetch payments");
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const openRefundModal = (payment) => {
    setSelectedPayment(payment);
    setModalOpen(true);
  };

  const handleRefund = () => {
    toast.success(`Refund initiated for payment #${selectedPayment._id}`);
    setPayments((prev) =>
      prev.map((p) =>
        p._id === selectedPayment._id ? { ...p, status: "Refunded" } : p
      )
    );
    setModalOpen(false);
  };

  return (
    <div className="flex-1 min-h-[95vh] overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl mb-6" style={{ color: "#0aad0a" }}>
          Payment List
        </h2>
        <div className="overflow-x-auto bg-white shadow border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-bold text-left">#</th>
                <th className="px-4 py-3 font-bold text-left">Customer</th>
                <th className="px-4 py-3 font-bold text-left">Email</th>
                <th className="px-4 py-3 font-bold text-left">Amount</th>
                <th className="px-4 py-3 font-bold text-left">Method</th>
                <th className="px-4 py-3 font-bold text-left">Status</th>
                <th className="px-4 py-3 font-bold text-left">Date</th>
                <th className="px-4 py-3 font-bold text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {payments.map((payment, index) => (
                <tr key={payment._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{payment.user.name}</td>
                  <td className="px-4 py-3">{payment.user.email}</td>
                  <td className="px-4 py-3">{currency}{payment.amount.toFixed(2)}</td>
                  <td className="px-4 py-3">{payment.method}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`font-semibold ${
                        payment.status === "Paid"
                          ? "text-green-600"
                          : payment.status === "Refunded"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(payment.createdAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    {payment.status === "Paid" && (
                      <button
                        onClick={() => openRefundModal(payment)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Refund
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationDialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleRefund}
        title="Confirm Refund"
        message={`Are you sure you want to refund payment #${selectedPayment?._id}?`}
        confirmText="Refund"
        cancelText="Cancel"
      />
    </div>
  );
};

export default PaymentList;
