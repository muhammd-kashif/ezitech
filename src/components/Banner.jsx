import React from "react";
import MainNavbar from "./MainNavbar";
import { TypeAnimation } from "react-type-animation";
import SearchBar from "./SearchBar";
import { FaHeart } from "react-icons/fa";
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/baner3.png"

const Banner = () => {
  const sequence = [
    "Programming",
    1000,
    "Social Skills",
    1000,
    "Web Designs",
    1000,
    "Marketing",
    1000,
  ];
  return (
    <div className="h-screen w-full bg-black banner_section-background">
      <MainNavbar />
      <main className="h-screen w-full flex justify-center items-center">
        <div className="w-2/4 flex justify-center items-center flex-col gap-8">
          <h2 className="text-white text-5xl font-semibold text-center leading-snug">
            Learn the Fundamentals with our Experts in{" "}
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={20}
              style={{ color: "#0693e3", fontWeight: "bolder" }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-white text-2xl text-center">
            Utilize Effective Learning to Reach Your Potential!
          </p>
          <div className="w-full  flex justify-center items-center">
            <SearchBar />
          </div>
          <p className="text-white text-2xl text-center flex justify-center items-center gap-2">
            Explore our more usefull products <FaHeart size={20} color="white" />
          </p>
          <div className="flex justify-center items-center gap-7 -mt-5">
            <img src={banner1} alt="banner1" width={220} />
            <img src={banner2} alt="banner1" width={200} />
            <img src={banner3} alt="banner1" width={250} className="-mt-2 -ml-2" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;
