import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { carouselItems } from "../context";
import Cards from "./Cards";

const RecommendedSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const appendDots = (dots) => (
    <div style={{ marginTop: "30px" }}>
      <ul style={{ marginTop: "50px", padding: "0px", textAlign: "center" }}>
        {dots}
      </ul>
    </div>
  );

  return (
    <div className="my-20 px-4 md:px-6 lg:px-12">
      <h2 className="text-center text-4xl font-bold">Recommended Courses</h2>
      <div className="mt-8">
        <Slider {...settings} appendDots={appendDots} className="mt-12">
          {carouselItems.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecommendedSection;
