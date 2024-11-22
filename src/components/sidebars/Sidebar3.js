import { FiLogOut } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsBoxSeam, BsPerson } from "react-icons/bs";
import { TbFileDescription } from "react-icons/tb";
import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const SellerSidebar = () => {
  const location = useLocation(); // Get the current URL
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle the sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
  };

  const navItems = [
    {
      section: "Overview",
      links: [
        { to: "/profile", icon: <BsPerson />, label: "My Profile" },
        { to: "/dashboard", icon: <BiBarChartSquare />, label: "Dashboard" },
        { to: "/reports", icon: <TbFileDescription />, label: "Reports" },
        {
          to: "/inventory-overview",
          icon: <BsBoxSeam />,
          label: "Inventory Overview",
        },
      ],
    },
    {
      section: "Inventory",
      links: [
        { to: "/my-products", icon: <BsBoxSeam />, label: "My Products" },
        {
          to: "/category-management",
          icon: <BsBoxSeam />,
          label: "Category Management",
        },
        {
          to: "/stock-management",
          icon: <BsBoxSeam />,
          label: "Stock Management",
        },
        {
          to: "/catalogues-storefront",
          icon: <BsBoxSeam />,
          label: "Catalogues / Storefront",
        },
      ],
    },
    {
      section: "Order Management",
      links: [
        { to: "/orders", icon: <BsBoxSeam />, label: "Orders" },
        { to: "/enquiries", icon: <BsBoxSeam />, label: "Enquiries" },
        { to: "/invoices", icon: <BsBoxSeam />, label: "Invoices" },
        { to: "/order-reviews", icon: <BsBoxSeam />, label: "Order Reviews" },
      ],
    },
    {
      section: "Settings",
      links: [
        {
          to: "/profile-management",
          icon: <BsBoxSeam />,
          label: "Profile Management",
        },
        {
          to: "/account-setting",
          icon: <BsBoxSeam />,
          label: "Account Setting",
        },
        {
          to: "/customer-support",
          icon: <BsBoxSeam />,
          label: "Customer Support",
        },
        { to: "/help-center", icon: <BsBoxSeam />, label: "Help Center" },
      ],
    },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="bg-white shadow-lg flex justify-between p-4 items-center fixed top-0 w-full z-50">
        <h1 className="text-2xl font-bold text-[#8CC5D9]">Trade Thrust</h1>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="p-2 bg-[#8CC5D9] text-white md:hidden rounded"
          >
            <BiMenuAltRight className="text-2xl" />
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="text-gray-800 border border-gray-300 p-2 rounded-md hover:bg-gray-100"
          >
            <FiLogOut className="text-2xl" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#8CC5D9]">Trade Thrust</h1>
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-800 md:hidden"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        <nav className="px-4 overflow-y-auto h-full">
          {navItems.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-gray-500 uppercase text-sm font-semibold">
                {section.section}
              </h2>
              <ul className="mt-2 space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className={`flex items-center p-2 rounded-md text-xs ${
                        // Active state logic: default to "My Products" if no other route matches
                        location.pathname === link.to ||
                        (location.pathname === "/" &&
                          link.to === "/my-products")
                          ? "bg-[#8CC5D9] text-white"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span className="ml-3">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Backdrop for Mobile */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </>
  );
};

export default SellerSidebar;
