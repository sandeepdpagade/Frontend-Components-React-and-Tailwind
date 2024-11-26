import { BiUser } from "react-icons/bi";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Icon9 from "../../assets/icon9.png";
import Icon10 from "../../assets/icon10.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  // Define the navigation items
  const navItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/doctors", label: "Doctors" },
    { path: "/health-admins", label: "Health Admins" },
    { path: "/pharma-admins", label: "Pharma Admin" },
    { path: "/patients", label: "Patients" },
    { path: "/calendar", label: "Calendar" },
    { path: "/patients-reports", label: "Patients Reports" },
    { path: "/products-management", label: "Products Management" },
    { path: "/orders-management", label: "Orders Management" },
    { path: "/services", label: "Services" },
    { path: "/services-bookings", label: "Services Bookings" },
    { path: "/reviews-feedbacks", label: "Reviews & Feedbacks" },
    { path: "/category-management", label: "Category Management" },
    { path: "/offer-management", label: "Offer Management" },
    { path: "/content-management", label: "Content Management" },
    { path: "/settings", label: "Settings" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#F4F4F8] border-b border-gray-200  ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="" className="flex ms-2 md:me-24">
                <img src={logo} className="h-8 me-3" alt="Ayushvi Logo" />
              </a>
            </div>
            {/* Dropdown Component */}
            <div className="flex items-center">
              <div>
                <div className="cursor-pointer flex items-center justify-center w-8 h-8 bg-white rounded-full mr-6 hover:bg-[#F4F4F8] border border-[#681312]">
                  <img className="w-1/2 my-auto" src={Icon9} />
                </div>
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="rounded-lg inline-flex w-full justify-center items-center hover:bg-[#F4F4F8]">
                    <div className="flex items-center">
                      <div className="rounded-full bg-[#681312] flex justify-center items-center w-9 h-9 mr-2">
                        <BiUser className="h-5 mx-auto text-white" />{" "}
                        {/* Adjust the height if necessary */}
                      </div>
                      <span className="font-bold mr-2 hidden md:block align-middle">
                        Super Admin
                      </span>
                    </div>
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none font-bold"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Dashboard
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Settings
                      </a>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Sign out
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 pt-20 transition-transform overflow-y-scroll h-screen ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#F4F4F8] border-r border-gray-200 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className=" px-3 pb-4 overflow-y-auto bg-[#F4F4F8] ">
          <ul className="space-y-2 font-bold">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center text-gray-900 rounded-lg hover:bg-gray-200 p-1  ${
                      isActive ? "bg-white !text-[#681312]" : ""
                    } group`
                  }
                >
                  <span className="ms-3">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
