import React, { useState } from "react";
import blog5 from "../../assets/Home/Blog5.png";
import shape1 from "../../assets/Service/shape_2-1.png";
import ceoimg from "../../assets/Home/sliderBack.jpeg";
import { FaAngleDoubleLeft } from "react-icons/fa";

function AboutUs() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;

    setRotate({ x: rotateX.toFixed(2), y: rotateY.toFixed(2) });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      {/*  Top Banner Section */}
      <div className="relative bg-cover bg-center w-full h-[40vh] md:h-[70vh] flex items-end" style={{ backgroundImage: `url(${blog5})` }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
     <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 flex flex-row gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">


          <div className="text-white text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">About Us</h1>
            <div className="flex justify-center md:justify-start gap-2 items-center text-base sm:text-lg mt-2">
              <p className="font-bold">Home</p>
              <FaAngleDoubleLeft />
              <p className="text-red-600 font-bold">About Us</p>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <img src={shape1} alt="Service Shape" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>

      {/*  Bottom Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto items-center">
        {/*  CEO Image with Hover Tilt */}
        <div
          className="w-full transition-all duration-300 ease-in-out"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: "1400px" }}
        >
          <div
            className="w-full h-full"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.2s ease",
            }}
          >
            <img
              src={ceoimg}
              alt="ceo"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/*  Text Content */}
        <div className="flex flex-col justify-center gap-4 px-2">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <div className="border border-red-600 w-10"></div>
              <div className="border border-red-700 w-5 mx-5"></div>
            </div>
            <h2 className="font-bold text-red-600 text-lg">CEO MESSAGE</h2>
          </div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            At RJ Designers, we transform spaces into stunning, functional, and
            inspiring environments. With a passion for creativity and a
            commitment to excellence, our team specializes in residential,
            commercial, and luxury interior designs that reflect style,
            personality, and elegance.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
