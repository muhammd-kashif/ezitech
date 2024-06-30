import React from "react";
import {
  FaBehance,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-100 bg-[#0693e3] h-12  flex justify-center items-center gap-8 topBar">
      <div className="flex justify-center items-center gap-2">
        <FaPhone size={18} color="white" />
        <span className="text-white">+92 3455555396</span>
      </div>
      <div className="flex justify-center items-center gap-2 ">
        <FaLocationDot size={18} color="white" />
        <span className="text-white">
          Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan
        </span>
      </div>
      <div className="flex justify-center items-center gap-2 ">
        <FaClock size={18} color="white" />
        <span className="text-white"> Mon - Fri 8.00 - 20.00</span>
      </div>
      <div className="flex justify-center items-center gap-2 ">
        <span>
          <FaFacebook size={18} color="white" />
        </span>
        <span>
          <FaInstagram size={18} color="white" />
        </span>
        <span>
          <FaBehance size={18} color="white" />
        </span>
        <span>
          <FaLinkedinIn size={18} color="white" />
        </span>
        <span>
          <IoLogoYoutube size={18} color="white" />
        </span>
      </div>
      <div className="flex justify-center items-center gap-2 ">
        <FaUser size={18} color="white" />

        <span className="text-white">Login</span>
        <span className="text-white">Register</span>
      </div>
    </div>
  );
};

export default Navbar;
