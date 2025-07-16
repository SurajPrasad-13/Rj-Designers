import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";

import blog5 from "../../assets/Home/Blog5.png";
import shape1 from "../../assets/Service/shape_2-1.png";

export default function Projects() {
  return (
    <>
      <div
        className="relative bg-cover bg-center w-full h-[60vh] mb-40 md:h-[70vh] flex items-end"
        style={{ backgroundImage: `url(${blog5})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 w-full  mx-auto px-4 flex  flex-row justify-between items-center gap-6 py-10">
          {/* Text */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Projects Interior
            </h1>
            <div className="flex justify-center lg:justify-start gap-2 items-center text-base sm:text-lg mt-2">
              <p className="font-bold">Home</p>
              <FaAngleDoubleLeft />
              <p className="text-red-600 font-bold">Projects Interior</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-[420px]">
            <img
              src={shape1}
              alt="Service Shape"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
