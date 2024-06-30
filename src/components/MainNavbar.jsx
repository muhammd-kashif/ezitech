import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart, FaSearch } from "react-icons/fa";

const MainNavbar = () => {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="h-[100px] border-b pt-2">
      <div className="antialiased bg-transparent">
        <div className="w-full text-gray-700 bg-transparent">
          <div className="flex flex-col px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-12">
            <div className="flex flex-row items-center justify-between p-4">
              <img src={logo} alt="Logo" width={178} />
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline "
                onClick={toggleMenu}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6 text-[#0693e3]"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>
            </div>
            <nav
              className={`flex-col flex-grow ${
                open ? "flex" : "hidden"
              } pb-4 md:pb-0 md:flex md:justify-center md:flex-row`}
            >
              <a
                href="#"
                className="px-4 py-2 mt-8 text-md font-bold uppercase text-white rounded-lg md:mt-0 md:ml-4 bg-[#0693e3] focus:outline-none focus:shadow-outline "
              >
                Home
              </a>
              <a
                href="#"
                className="px-4 py-2 mt-2 text-md font-bold uppercase bg-transparent text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#0693e3] focus:outline-none focus:shadow-outline"
              >
                About Us
              </a>
              <a
                href="#"
                className="px-4 py-2 mt-2 text-md font-bold uppercase bg-transparent text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#0693e3] focus:outline-none focus:shadow-outline"
              >
                Certifications
              </a>
              <a
                href="#"
                className="px-4 py-2 mt-2 text-md font-bold uppercase bg-transparent text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#0693e3] focus:outline-none focus:shadow-outline"
              >
                Internships
              </a>
              <a
                href="#"
                className="px-4 py-2 mt-2 text-md font-bold uppercase bg-transparent text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#0693e3] focus:outline-none focus:shadow-outline"
              >
                Seminars
              </a>
              <a
                href="#"
                className="px-4 py-2 mt-2 text-md font-bold uppercase bg-transparent text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#0693e3] focus:outline-none focus:shadow-outline"
              >
                Tech Blogs
              </a>
            </nav>

            <div className="flex items-center justify-between p-4 authentication_navbar">
              <div className="flex items-center justify-center gap-5">
              <FaRegHeart size={20} className="text-white"/>
                <FaSearch size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
