import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Split the current path into segments
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      className="flex items-center text-sm text-gray-600 my-4"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center ">
        <li className="inline-flex items-center">
          <Link to="/dashboard" className="text-gray-700 hover:text-[#681312]">
            Home
          </Link>
          {pathnames.length > 0 && <span className="mx-1">/</span>}
        </li>
        {pathnames.map((value, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={index} className="inline-flex items-center">
              <span className="text-gray-500 capitalize">{value}</span>
            </li>
          ) : (
            <li key={index} className="inline-flex items-center">
              {!isLast ? (
                <>
                  <Link
                    to={routeTo}
                    className="text-gray-700 hover:text-[#681312] capitalize"
                  >
                    {value}
                  </Link>
                  <span className="mx-1">/</span>
                </>
              ) : (
                <span className="text-gray-500 capitalize">{value}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
