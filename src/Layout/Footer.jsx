import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import rjdesign from "../assets/rjdesign.png";
import { FaInstagram } from "react-icons/fa";
// import { motion } from "motion/react";
import { motion } from "framer-motion";

import { footerData } from "../assets/DataObject";

const Footer = () => {
  return (
    <div>
      <div className="grid bg-black h-90 text-white grid-cols-1 md:grid-cols-4 font-medium  p-20 ">
        <div>
          <img className="h-15 my-4" src={rjdesign} alt="" />
          <p>
            At RJ Designers, we transform spaces into stunning, functional, and
            inspiring environments.
          </p>
        </div>
        <div className="font-[400] leading-9 ">
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
        <div className="font-[400] leading-9 ">
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
        <div className="font-[400] h-full leading-7">
          <h1 className="text-3xl my-2 font-bold">Photos Gallery</h1>
          <div className="  h-33 grid grid-cols-3  ">
            {footerData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="h-13 w-22 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <motion.div
                    initial={{ scaleX: 0.1, opacity: 0, zIndex: 0 }}
                    whileHover={{ scaleX: 1, opacity: 0.5, zIndex: 3 }}
                    transition={{ duration: 0.2 }}
                    className=" flex items-center justify-center  absolute top-0 left-0 h-13 w-22 bg-red-400"
                  >
                    <FaInstagram />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#eb3300] text-white flex items-center justify-center gap-2 p-2">
        {" "}
        <FaRegCopyright /> 2025 All Rights Reserved By Rj Designer
      </div>
    </div>
  );
};

export default Footer;
