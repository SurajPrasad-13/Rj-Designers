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
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="flex items-center justify-between bg-black text-white py-3 px-15">
          <div className="flex items-center">
            <div className="flex items-center gap-1 font-medium border-r border-white px-1">
              <FaPhoneAlt className="text-red-500 text-[15px]" />{" "}
              <span>+919784555134</span>
            </div>
            <div className="flex items-center justify-center gap-1 font-medium border-white px-1">
              <MdEmail className="text-red-500 text-[20px]" />{" "}
              <span>info@rjdesigners.com</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-xl ">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <IoLogoWhatsapp />
            <FaLinkedin />
            <RiInstagramFill />
          </div>
        </div>
        <nav className="flex items-center justify-start md:gap-45 bg-amber-100 py-2  ">
          <div>
            <img className="h-15 md:px-15 " src={Logo} alt="" />
          </div>
          <div className="flex items-center justify-around font-semibold px-10 text-lg gap-10">
            <NavLink
              to="/"
              className={`${({ isActive }) => (isActive ? "text-gray-700" : " text-black")} `}
            >
              Home
            </NavLink>
            <NavLink
              to="/service"
              className={`${({ isActive }) => (isActive ? "text-gray-700" : " text-black")} `}
            >
              Service
            </NavLink>
            <NavLink
              to="/projects"
              className={`${({ isActive }) => (isActive ? "text-gray-700" : " text-black")} `}
            >
              Projects
            </NavLink>
           
            <NavLink
              to="/aboutus"
              className={`${({ isActive }) => (isActive ? "text-gray-700" : " text-black")} `}
            >
              About Us
            </NavLink>
            <NavLink
              to="/blogs"
              className={`${({ isActive }) => (isActive ? "text-gray-700" : " text-black")} `}
            >
              Blogs
            </NavLink>
             <NavLink
              to="/contactus"
              className={`${({ isActive }) => (isActive ? "text-gray-700" : " text-black")} `}
            >
              Contact Us
            </NavLink>
             
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
