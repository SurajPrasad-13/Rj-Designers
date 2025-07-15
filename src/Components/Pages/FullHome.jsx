import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import blog5 from "../../assets/Home/Blog5.png";
import shape1 from "../../assets/Service/shape_2-1.png";
import blog3 from "../../assets/Home/blog3.png";
import bggirl from "../../assets/Service/bg-girl.png";

import svg1 from "../../assets/Service/service_feature_1_1-1.svg";
import svg2 from "../../assets/Service/service_feature_1_2-1.svg";
import svg3 from "../../assets/Service/service_feature_1_3-1.svg";
import svg4 from "../../assets/Service/service_feature_1_4-1.svg";
function FullHome() {
  const boxes = [
    {
      id: 1,
      img: svg1,
      title: "Instant Car Services",
      discription:
        "Maintain wireless scerios after sure quality vectors future",
    },
    {
      id: 2,
      img: svg2,
      title: "24/7 Quality Service",
      discription:
        "Maintain wireless scerios after sure quality vectors future",
    },
    {
      id: 3,
      img: svg3,
      title: "Easy Customer Service",
      discription:
        "Maintain wireless scerios after sure quality vectors future",
    },
    {
      id: 4,
      img: svg4,
      title: "Instant Car Services",
      discription:
        "Maintain wireless scerios after sure quality vectors future",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center w-full h-[40vh] md:h-[70vh] flex items-end"
        style={{ backgroundImage: `url(${blog5})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 w-full  mx-auto px-4 flex  flex-row justify-between items-center gap-6 py-10">
          {/* Text */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Full Home Interior
            </h1>
            <div className="flex justify-center lg:justify-start gap-2 items-center text-base sm:text-lg mt-2">
              <p className="font-bold">Home</p>
              <FaAngleDoubleLeft />
              <p className="text-red-600 font-bold">Full Home Interior</p>
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

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-8 gap-4 my-10 md:px-25">
        {/* Categories Box */}
        <div
          className="md:col-span-4 lg:col-span-3 bg-gray-200 p-4 flex flex-col justify-start 
                  lg:h-[calc(100%-50px)]"
        >
          <div className="text-2xl font-bold m-2 gap-2 p-2">Categories</div>

          <div className="list-none m-2 font-semibold text-lg">
            <div className="flex items-center gap-2 hover:bg-orange-500 border-t-2 border-gray-300 p-2 transform transition duration-75 hover:translate-x-[10px]">
              <FaAngleDoubleLeft />
              <li>Full Home Interior</li>
            </div>
            <div className="flex items-center gap-2 hover:bg-orange-500 border-t-2 border-gray-300 p-2 transform transition duration-75 hover:translate-x-[10px]">
              <FaAngleDoubleLeft />
              <li>Luxury Interior</li>
            </div>
            <div className="flex items-center gap-2 hover:bg-orange-500 border-t-2 border-gray-300 p-2 transform transition duration-75 hover:translate-x-[10px]">
              <FaAngleDoubleLeft />
              <li>Modular Interior</li>
            </div>
            <div className="flex items-center gap-2 hover:bg-orange-500 border-t-2 border-b-2 border-gray-300 p-2 transform transition duration-75 hover:translate-x-[10px]">
              <FaAngleDoubleLeft />
              <li>Renovation</li>
            </div>
            <div className="flex items-center gap-2 hover:bg-orange-500 border-b border-t-2 border-gray-200 p-2 transform transition duration-75 hover:translate-x-[10px]">
              <FaAngleDoubleLeft />
              <li>Uncategorized</li>
            </div>
          </div>

          <div className="bg-black text-white font-bold">
            <div></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:col-span-4 lg:col-span-5 bg-gray-400">
          <img
            src={blog3}
            alt="modular img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* second box  */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-8 gap-4 my-10 md:px-25">
        <div className="md:col-span-3 lg:col-span-3">
          {/* Download Section */}
          <div className="bg-black text-white font-bold p-5 flex flex-col text-2xl">
            <div>
              <p>Download</p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex justify-center items-center gap-4">
                  <FaRegFilePdf />
                  <div className="flex flex-col text-base font-normal">
                    <p>Our Brochures</p>
                    <p>Download</p>
                  </div>
                </div>
                <MdArrowRightAlt className="bg-red-500 hover:bg-white hover:text-red-500 text-3xl" />
              </div>
            </div>
            <hr className="m-3" />
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-4">
                  <FaRegFilePdf />
                  <div className="flex flex-col text-base font-normal">
                    <p>Our Brochures</p>
                    <p>Download</p>
                  </div>
                </div>
                <MdArrowRightAlt className="bg-red-500 hover:bg-white hover:text-red-500 text-3xl" />
              </div>
            </div>
          </div>

          {/* Background Image Section (Fixed) */}
          <div
            className="relative bg-cover bg-center w-full min-h-[70vh] flex items-end justify-start my-5"
            style={{ backgroundImage: `url(${bggirl})` }}
          >
            {/* Black overlay */}
            <div className="absolute inset-0  z-0"></div>

            {/* Help Content */}
            <div className="relative z-10 text-white text-center text-lg px-4 bg-black">
              <p className="text-2xl font-bold mb-2">Need Help?</p>
              <div className="flex justify-center items-center gap-3">
                <BsFillTelephoneFill className="text-xl bg-red-500 p-1" />
                <div>
                  <p className="font-semibold">Support</p>
                  <p className="text-base">+12 (907) 555-010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-5 ">
          <h1 className="text-2xl font-bold my-5">Unique Car Engine Service</h1>
          <div className="text-lg font-semibold text-gray-600">
            Continually myocardinate holistic mindshare with client-based web
            services. Assertively e-enable catalysts for change before fully
            tested markets. Phosfluorescently maintain wireless scenarios after
            intermandated applications. Conveniently predominate revolutionary
            quality vectors through future-proof manufactured products.
            Enthusiastically transform distinctive collaboration.
          </div>
          <div className="text-lg my-3 font-semibold text-gray-600">
            Intrinsicly coordinate multifunctional functionalities reliable
            potentialities. Objectively envisioneer high in convergence through
            collaborative networks. Interactively generate B2C e-tailers for
            business data restore fully researched relationships through
            resource maximizing results.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 bg-gray-50">
            {boxes.map((box) => (
              <div
                key={box.id}
                className="bg-white shadow-md rounded-md p-6 flex items-center gap-5 "
              >
                <img
                  src={box.img}
                  alt={box.title}
                  className="w-14 h-14 object-contain transition-transform duration-300 hover:rotate-y-180"
                />
                <div>
                  <h3 className="text-xl font-bold mb-1">{box.title}</h3>
                  <p className="text-gray-600 text-sm">{box.discription}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-lg  text-gray-400 flex flex-col gap-5">
            <p>
              Phosfluorescently maintain wireless scenarios after intermandated
              applications. Conveniently predominate revolutionary quality
              vectors through future-proof manufactured products. Objectively
              envisioneer high in convergence through collaborative networks.
              Interactively generate B2C e-tailers for business data restore
              fully researched relationships through resource maximizing
              results.
            </p>
            Conveniently predominate revolutionary quality vectors through
            future-proof manufactured products. Objectively envisioneer high in
            convergence through collaborative networks. Interactively generate
            B2C tailers for business data restore fully researched relationships
            through.
          </div>
        </div>
      </div>
    </>
  );
}

export default FullHome;
