import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import rjdesign from "../assets/rjdesign.png";
import img from "../assets/Home/gallery1.png";
const Footer = () => {
  return (
    <div>
      <div className="grid bg-black text-white grid-cols-1 md:grid-cols-4 font-medium p-4 ">
        <div>
          <img className="h-15 my-4" src={rjdesign} alt="" />
          <p>
            At RJ Designers, we transform spaces into stunning, functional, and
            inspiring environments.
          </p>
        </div>
        <div className="font-[400] leading-7 ">
          <h1 className="text-3xl my-2 font-bold">Our Services</h1>
          <div className="flex items-center gap-2 ">
            <MdKeyboardDoubleArrowRight className="text-2xl" />
            <p>Modular Interior</p>
          </div>
          <div className="flex items-center gap-2 ">
            <MdKeyboardDoubleArrowRight className="text-2xl" />
            <p>Full Home Interior</p>
          </div>
          <div className="flex items-center gap-2 ">
            <MdKeyboardDoubleArrowRight className="text-2xl" />
            <p>Renovation</p>
          </div>
          <div className="flex items-center gap-2 ">
            <MdKeyboardDoubleArrowRight className="text-2xl " />
            <p>Modular Interior</p>
          </div>
        </div>
        <div className="font-[400] leading-7 ">
          <h1 className="text-3xl my-2 font-bold">Contct Us</h1>
          <div className="flex items-center gap-2 ">
            <FaPhoneAlt className="" /> <p>+91 9784555143</p>
          </div>
          <div className="flex items-center gap-2 ">
            <MdEmail className="" /> <p>info@rjdesigners.com</p>
          </div>
          <div className="flex items-center gap-2 ">
            <IoLocationSharp className="" /> <p>Address:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
