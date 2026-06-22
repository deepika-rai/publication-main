import React, { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [summary, setSummary] = useState({
    totalOrders: 120,
    totalRevenue: 45230.75,
    totalUsers: 87,
    totalBooks: 46,
  });

  const recentOrders = [
    { id: "ORD001", customer: "Amit Sharma", amount: 120.99, date: "2025-06-17" },
    { id: "ORD002", customer: "Rina Mehta", amount: 45.5, date: "2025-06-17" },
    { id: "ORD003", customer: "Rahul Kumar", amount: 72.0, date: "2025-06-16" },
    { id: "ORD004", customer: "Sneha Verma", amount: 98.5, date: "2025-06-16" },
    { id: "ORD005", customer: "Vikram Singh", amount: 135.75, date: "2025-06-15" },
    { id: "ORD006", customer: "Pooja Joshi", amount: 88.2, date: "2025-06-15" },
    { id: "ORD007", customer: "Karan Patel", amount: 56.4, date: "2025-06-14" },
    { id: "ORD008", customer: "Divya Kapoor", amount: 67.3, date: "2025-06-14" },
    { id: "ORD009", customer: "Suresh Rana", amount: 150.0, date: "2025-06-13" },
    { id: "ORD010", customer: "Neha Singh", amount: 110.0, date: "2025-06-12" },
  ];


  const bookOrderBarData = {
    labels: ["Dissertations", "Periodical", "MASI", "Theses", "Reports", "Monograph"],
    datasets: [
      {
        label: "Orders by Book",
        data: [35, 25, 18, 20, 28, 15],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#F67019"],
      },
    ],
  };

  return (
    <div className="flex-1">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl mb-6" style={{ color: "#0000cc" }}>Dashboard</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[{ title: "Total Orders", value: summary.totalOrders }, { title: "Revenue", value: `$${summary.totalRevenue.toFixed(2)}` }, { title: "Users", value: summary.totalUsers }, { title: "Books", value: summary.totalBooks }].map((item, index) => (
            <div key={index} className="bg-white shadow hover:shadow-md transition-transform hover:scale-[1.02] rounded-2xl p-5">
              <h3 className="text-sm text-gray-500">{item.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Book Category & Order Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow hover:shadow-md rounded-2xl flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-4">Book Distribution by Category</h3>
            <div style={{ width: "200px", height: "200px" }}>
              <Pie data={bookOrderBarData} options={{ plugins: { legend: { display: false } } }} />
            </div>
          </div>

          <div className="bg-white p-4 shadow hover:shadow-md rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Orders by Book</h3>
            <Bar data={bookOrderBarData} />
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-4 shadow hover:shadow-md rounded-2xl mt-8">
          <h2 className="text-2xl mb-6" style={{ color: "#0aad0a" }}>
       Recent Orders
          </h2>
          <div className="overflow-x-auto">
              <div className="overflow-x-auto bg-white shadow border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Order ID</th>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Customer</th>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Amount</th>
                <th className="px-4 py-3 text-left font-bold text-black uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-medium">{order.id}</td>
                    <td className="px-4 py-2">{order.customer}</td>
                    <td className="px-4 py-2">${order.amount.toFixed(2)}</td>
                    <td className="px-4 py-2">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
