import React from "react";
import learning from "../assets/learningadvance.png";
import iosplaystore from "../assets/iosplaystore.webp";
import andplaystore from "../assets/andplaystore.png";

const LearningSection = () => {
  return (
    <section className="mt-20 px-4 md:px-6 lg:px-12">
      <div className="flex flex-col-reverse md:flex-row w-full my-10">
        <div className="md:w-[55%] flex items-center justify-center md:justify-end">
          <img src={learning} alt="Learning anytime from anywhere" className="w-[80%] md:w-[60%] object-contain" />
        </div>
        <div className="md:w-[45%] flex flex-col gap-4 pt-10 md:pt-20 px-4 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Learning <span className="text-[#0693e3]">anytime</span> from anywhere
          </h2>
          <p className="text-base md:text-lg text-gray-500 leading-loose">
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="flex gap-4 mt-2">
            <img src={iosplaystore} alt="iOS Play Store" className="w-[40%] md:w-auto object-contain"/>
            <img src={andplaystore} alt="Android Play Store" className="w-[40%] md:w-auto object-contain"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
