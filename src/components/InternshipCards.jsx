import React from "react";
import { FaBriefcase, FaLocationArrow, FaUserTie } from "react-icons/fa";

const InternshipCards = ({ item }) => {
  return (
    <div className="rounded-2xl h-96 border overflow-hidden w-[400px] shadow-lg transform transition-transform duration-300 hover:translate-y-[-10px]">
      <div className="h-[35%] internship_header-backimage flex py-5 px-5">
        <div className="w-[50%] flex flex-col gap-2">
          <h3 className="text-2xl text-white font-bold">{item.title}</h3>
          <hr className="bg-white" />
          <p className="text-white">{item.institute}</p>
        </div>
        <div className="w-[50%] flex justify-end items-center">
          <img src={item?.image} alt="" width={80} />
        </div>
      </div>
      <div className="py-5 px-5 mt-3 flex flex-col gap-4">
        <div className="w-full flex">
          <span className="flex justify-center items-center gap-1 text-lg">
            <span className="h-8 rounded-full w-8 flex justify-center items-center bg-[#F0F7F4]">
              <FaUserTie className="" />
            </span>
            Employment -
          </span>{" "}
          &nbsp;
          <span className="bg-[#F0F7F4] p-[5px] rounded-md text-md font-medium">
            {" "}
            {item.employment}
          </span>
        </div>
        <div className="w-full flex">
          <span className="flex justify-center items-center gap-1 text-lg">
            <span className="h-8 rounded-full w-8 flex justify-center items-center bg-[#F0F7F4]">
              <FaLocationArrow className="" />
            </span>
            Location -
          </span>{" "}
          &nbsp;
          <span className="bg-[#F0F7F4] p-[5px] rounded-md text-md font-medium">
            {" "}
            {item.location}
          </span>
        </div>
        <div className="w-full flex">
          <span className="flex justify-center items-center gap-1 text-lg">
            <span className="h-8 rounded-full w-8 flex justify-center items-center bg-[#F0F7F4]">
              <FaBriefcase className="" />
            </span>
            Job Type -
          </span>{" "}
          &nbsp;
          <span className="bg-[#F0F7F4] p-[5px] rounded-md text-md font-medium">
            {" "}
            {item.jobType}
          </span>
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-[#326EC9] py-2 text-[18px] w-40 font-semibold rounded-md text-white mt-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCards;
