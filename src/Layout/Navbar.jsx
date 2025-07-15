import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Logo from "../assets/logo.jpg";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <header>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:items-center justify-between bg-black text-white py-3 px-3 md:px-15">
          <div className="flex items-center text-[10px] sm:text-[14px] md:text-[16px]">
            <div className="flex items-center gap-1 font-medium border-r border-white px-1">
              <FaPhoneAlt className="text-red-500 text-[10px] md:text-[15px]" />{" "}
              <span>+919784555134</span>
            </div>
            <div className="flex items-center  justify-center gap-1 font-medium border-white px-1">
              <MdEmail className="text-red-500 text-[13px]  sm:text-[20px]" />{" "}
              <span>info@rjdesigners.com</span>
            </div>
          </div>

          <div className="flex items-center text-sm  justify-center gap-2   md:gap-4 md:text-xl ">
            <div className="font-medium">Follow Us On:</div>
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <IoLogoWhatsapp />
            <FaLinkedin />
            <RiInstagramFill />
          </div>
        </div>
        <nav className="  flex items-center justify-between py-2  ">
          <div  className="  h-13 w-30 md:h-16 md:w-55">
            <img
              className=" h-13 w-25 md:h-16 md:w-35  "
              src={Logo}
              alt=""
            />
          </div>
          <div className="hidden  md:flex items-center justify-around font-semibold px-10 text-[13px] lg:text-lg gap-10">
            <NavLink
              to="/"
              className={`${({ isActive }) =>
                isActive ? "text-gray-700" : " text-black"} `}
            >
              Home
            </NavLink>
            <NavLink
              to="/service"
              className={`${({ isActive }) =>
                isActive ? "text-gray-700" : " text-black"} `}
            >
              Service
            </NavLink>
            <NavLink
              to="/projects"
              className={`${({ isActive }) =>
                isActive ? "text-gray-700" : " text-black"} `}
            >
              Projects
            </NavLink>

            <NavLink
              to="/aboutus"
              className={`${({ isActive }) =>
                isActive ? "text-gray-700" : " text-black"} `}
            >
              About Us
            </NavLink>
            <NavLink
              to="/blogs"
              className={`${({ isActive }) =>
                isActive ? "text-gray-700" : " text-black"} `}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contactus"
              className={`${({ isActive }) =>
                isActive ? "text-gray-700" : " text-black"} `}
            >
              Contact Us
            </NavLink>
          </div>
          <div
            className="text-3xl md:hidden "
            onClick={() => setisOpen(!isOpen)}
          >
            {isOpen ? <RxCross2 /> : <IoMenu />}
          </div>
        </nav>
        <div
          className={` ${
            isOpen ? "flex flex-col items-center justify-around" : "hidden"
          } md:hidden absolute top-27 z-10 h-full  right-0 w-30 bg-amber-100    font-semibold px-5 gap-4`}
        > 
          <NavLink
            to="/"
            className={`${({ isActive }) =>
              isActive ? "text-gray-700" : " text-black"} `}
          >
            Home
          </NavLink>
          <NavLink
            to="/service"
            className={`${({ isActive }) =>
              isActive ? "text-gray-700" : " text-black"} `}
          >
            Service
          </NavLink>
          <NavLink
            to="/projects"
            className={`${({ isActive }) =>
              isActive ? "text-gray-700" : " text-black"} `}
          >
            Projects
          </NavLink>

          <NavLink
            to="/aboutus"
            className={`${({ isActive }) =>
              isActive ? "text-gray-700" : " text-black"} `}
          >
            About Us
          </NavLink>
          <NavLink
            to="/blogs"
            className={`${({ isActive }) =>
              isActive ? "text-gray-700" : " text-black"} `}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contactus"
            className={`${({ isActive }) =>
              isActive ? "text-gray-700" : " text-black"} `}
          >
            Contact Us
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
