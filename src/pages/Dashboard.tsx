import React, { useState } from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";

const StatCard: React.FC<{ title: string; value: string; bg: string }> = ({
  title,
  value,
  bg,
}) => (
  <div className={`rounded-lg p-6 text-white shadow ${bg}`}>
    <div className="text-lg font-semibold mb-2">{title}</div>
    <div className="text-3xl font-bold">{value}</div>
  </div>
);

const DashboardHome: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <StatCard title="Total Collections" value="KES 1,200,000" bg="bg-blue-600" />
    <StatCard title="Students Count" value="350" bg="bg-green-600" />
    <StatCard title="Outstanding Balances" value="KES 300,000" bg="bg-red-600" />
  </div>
);

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          collapsed ? "w-16" : "w-64"
        } bg-gray-800 text-white h-screen transition-all duration-300 flex flex-col`}
      >
        <button
          className="p-4 focus:outline-none"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle Sidebar"
        >
          {collapsed ? (
            <span>&#9776;</span>
          ) : (
            <span>&#10005;</span>
          )}
        </button>
        <nav className="flex-1">
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/students"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Students
              </Link>
            </li>
            <li>
              <Link
                to="/payments"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Payments
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="students" element={<div>Students Page</div>} />
          <Route path="payments" element={<div>Payments Page</div>} />
        </Routes>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;