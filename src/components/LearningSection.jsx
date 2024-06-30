import React from "react";
import learning from "../assets/learningadvance.png";
import iosplaystore from "../assets/iosplaystore.webp";
import andplaystore from "../assets/andplaystore.png";

const LearningSection = () => {
  return (
    <section className="mt-20 px-4 md:px-6 lg:px-12 ">
      <div className="flex w-full my-10">
        <div className="w-[55%] flex items-center justify-end">
          <img src={learning} alt="" className="w-[60%]" />
        </div>
        <div className="w-[45%] flex flex-col gap-4 pt-20 px-24 ">
          <h2 className="text-5xl font-bold leading-snug">
            Learning <span className="text-[#0693e3]">anytime</span> from
            anywhere
          </h2>
          <p className="text-lg text-gray-500 leading-loose">
            {" "}
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <div className="flex gap-4 mt-2">
            <img src={iosplaystore} alt="" />
            <img src={andplaystore} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
