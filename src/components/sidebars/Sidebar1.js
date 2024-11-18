import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar1 = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Categories", path: "/categories" },
    { name: "Services", path: "/services" },
    { name: "User Management", path: "/user-management" },
    { name: "Vendor Management", path: "/vendor-management" },
    { name: "Bookings", path: "/bookings" },
    { name: "Settings", path: "/settings" },
    { name: "Vendors Location", path: "/vendors-location" },
    { name: "Vendor Account Delete", path: "/vendor-account-delete" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-100 shadow-md transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40 md:w-64 w-3/4`}
      >
        <div className="p-4 bg-primary text-white text-2xl font-semibold flex items-center justify-between md:justify-center">
          EasyMarg
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white md:hidden"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col mt-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 px-4 transition-colors ${
                location.pathname === link.path
                  ? "bg-primary text-white"
                  : "hover:bg-blue-500 hover:text-white text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="py-2 px-4 mt-auto bg-primary text-white hover:bg-blue-700 transition-colors">
            Log Out
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className=" fixed top-0 left-0 right-0 bg-primary text-white p-4 flex items-center justify-between shadow-md">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden block text-white focus:outline-none"
          >
            ☰
          </button>
          <h1 className="text-lg font-semibold">EasyMarg</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-primary py-1 px-3 rounded">
              Admin
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 overflow-auto">{children}</div>
      </div>

      {/* Backdrop for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar1;
