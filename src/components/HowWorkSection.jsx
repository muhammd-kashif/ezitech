import React from "react";
import work1 from "../assets/work1.svg";
import work2 from "../assets/work2.svg";
import work3 from "../assets/work3.svg";
import { workCards } from "../context";

const HowWorkSection = () => {
  return (
    <div className="my-16 px-4 md:px-6 lg:px-12 ">
      <h2 className="text-center text-4xl font-bold">How it works?</h2>
      <div className="w-full flex justify-around items-center mt-4 mb-16">
        <div className="">
          <img src={work1} alt="" width={300} />
        </div>
        <div className="">
          <img src={work3} alt="" width={300} />
        </div>
        <div className="">
          <img src={work2} alt="" width={300} />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center w-full">
        {workCards.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col gap-4 py-7 px-3 work-card_shadow rounded-3xl w-[150px] transform transition-transform duration-300 hover:translate-y-[-10px]"
          >
            <img src={item?.img} alt={item?.title} />
            <p className="font-bold">{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorkSection;
