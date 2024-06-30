import React from "react";
import footerImage from "../assets/footerImage.webp";
import footerCourse1 from "../assets/footerCourse1.webp";
import footerCourse2 from "../assets/footerCourse2.webp";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="footerUpperSection">
        <h2 className="text-center text-4xl font-bold text-white mb-10 leading-normal">
          It’s time to <span className="text-[#0693e3]">start</span> investing
          in
          <br /> yourself
        </h2>
        <img src={footerImage} alt="footerImage" className="-mb-32" />
      </div>
      <div className="footerLowerSection">
        <div className="footer_cover flex gap-5">
          <div className="w-[25%] flex flex-col gap-6 pr-5">
            <h3 className="text-2xl text-white font-bold uppercase">About</h3>
            <p className="text-white font-medium text-sm">
              Ezitech Institute provides a platform for newcomers to launch
              their IT and freelancing careers. Our emphasis on practical
              information technology courses that are career and work oriented
              makes us the top computer institute in Rawalpindi, Islamabad,
              Pakistan.
            </p>
          </div>
          <div className="w-[25%] flex flex-col gap-6 pr-5">
            <h3 className="text-2xl text-white font-bold uppercase">
              POPULAR COURSES
            </h3>
            <div className="flex gap-4 w-[80%]">
              <div className="">
                <img src={footerCourse1} alt="" width={100} />
              </div>
              <div className="">
                <h3 className="text-white text-1xl font-bold  ">
                  Online Arbitrage Mastermind 2.0 R..
                </h3>
                <p className="text-gray-400 text-sm">By Ahsan Iqbal</p>
              </div>
            </div>
            <div className="flex gap-4 w-[80%]">
              <div className="">
                <img src={footerCourse2} alt="" width={100} />
              </div>
              <div className="">
                <h3 className="text-white text-1xl font-bold  ">
                  he Complete Bootcamp 2022: Node.j...
                </h3>
                <p className="text-gray-400 text-sm">By Ezitech</p>
              </div>
            </div>
          </div>
          <div className="w-[25%] flex flex-col gap-6 pr-5">
            <h3 className="text-2xl text-white font-bold uppercase">PAGES</h3>
            <ul className="text-white font-medium text-sm flex flex-col gap-4 list-disc ml-4">
              <li>Blog</li>
              <li>EZICODING</li>
              <li>INTERNSHIP</li>
              <li>OUR SERVICES</li>
            </ul>
          </div>
          <div className="w-[25%] flex flex-col gap-6 pr-5">
            <h3 className="text-2xl text-white font-bold uppercase">CONTACT</h3>
            <div className="flex gap-4">
              <span>
                <FaLocationDot size={20} color="#0693e3" className="mt-2" />
              </span>
              <p className="text-white">
                Office #304-B Amna Plaza,
                <br /> near Radio Pakistan,
                <br /> Rawalpindi, Punjab 46000
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span>
                <FaPhoneAlt size={20} color="#0693e3" />
              </span>
              <p className="text-white">+923455555396</p>
            </div>
            <div className="flex gap-4 items-center">
              <span>
                <FaEnvelope size={20} color="#0693e3" />
              </span>
              <p className="text-white">info@ezitech.org</p>
            </div>
          </div>
        </div>
        <h2 className="text-white text-center py-20 text-md">
          Copyright © 2024 Ezitech Institute | Design & Develop by Eziline
          Software House
        </h2>
      </div>
    </div>
  );
};

export default Footer;
