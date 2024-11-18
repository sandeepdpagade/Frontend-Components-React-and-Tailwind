import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Using NavLink for active class
import Logo from "../../assets/logo.png";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Vendor Management", path: "/vendor-management" },
    { name: "Task Management", path: "/task-management" },
    { name: "Team Management", path: "/team-management" },
    { name: "Services", path: "/services" },
    { name: "Notifications & Alerts", path: "/notifications" },
    { name: "Mails", path: "/mails" },
    { name: "Calendar", path: "/calendar" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={toggleSidebar} // Toggle sidebar when button is clicked
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/dashboard" className="flex ms-2 md:me-24">
                <img src={Logo} className="h-16 me-3" alt="Parinitha Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-semibold">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex justify-start items-center p-2 rounded-lg group ${
                      isActive
                        ? "bg-orange-100 text-orange-500 border-l-4 border-orange-500"
                        : "text-gray-900 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setActiveLink(item.path)}
                >
                  <span className="ms-3">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <div className="fixed bottom-0 left-0 w-full justify-center p-4 bg-white">
            <button
              type="button"
              className="text-black font-semibold inline-flex items-center justify-between border-2 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <span className="mr-6">
                <CiLogout />
              </span>
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
