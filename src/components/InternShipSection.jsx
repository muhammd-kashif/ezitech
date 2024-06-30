import React from "react";
import { internshipItems } from "../context";
import InternshipCards from "./InternshipCards";

const InternShipSection = () => {
  return (
    <div className="my-20 px-4 md:px-6 lg:px-12">
      <h2 className="text-center text-4xl font-bold">
        Perfect Internship's For You
      </h2>
      <div className="flex flex-wrap gap-6 justify-center w-full mt-14 ">
        {internshipItems.map((item) => (
          <InternshipCards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default InternShipSection;
