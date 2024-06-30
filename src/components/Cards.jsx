import React from "react";

import { FaRegClock } from "react-icons/fa";

const Cards = ({item}) => {
  return (
    <div className="px-2 my-5">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-46 object-cover"
        />
        <div className="p-4">
          <p className="text-gray-500 capitalize">{item.category}</p>
          <h3 className="text-lg font-semibold">{item.title}</h3>
        </div>
        <div className="flex justify-between p-4 items-center border-t absolute bottom-0 w-full">
          <p className="flex items-center justify-center gap-2 text-gray-500">
            <FaRegClock size={18} />
            {item.duration}
          </p>
          <p className="font-semibold">PKR{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
