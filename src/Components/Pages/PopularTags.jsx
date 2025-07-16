import React from "react";
import blog6 from "../../assets/Home/Blog6.png";
import { IoPersonOutline } from "react-icons/io5";
import {
  FaArrowRight,
  FaRegCalendarDays,
  FaRegComments,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { RightCards } from "../../assets/DataObject";
const PopularTags = () => {
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate('/populartag')
  }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:mx-10 gap-10 my-10 py-10">
        <div>
          <div className=" w-75 sm:w-130   md:w-145 bg-white shadow my-10 mx-auto h-auto">
            <div className=" w-75 sm:w-130   md:w-145 mx-auto">
              <div className=" relative w-75 sm:w-130   md:w-145 mx-auto">
                <img
                  className=" w-75 sm:w-130   md:w-145 "
                  src={blog6}
                  alt=""
                />
              </div>
            </div>
            <div className="m-3 my-5 flex items-center justify-start gap-4 font-medium text-sm text-gray-700">
              <span className="flex items-center justify-start gap-1">
                <IoPersonOutline className="text-[#eb3300] text-lg" /> Post By
                Admin
              </span>
              <span className="flex items-center justify-start gap-1">
                <FaRegCalendarDays className="text-[#eb3300] text-lg" />
                April 3, 2025
              </span>
              <span className="flex items-center justify-start gap-1">
                <FaRegComments className="text-[#eb3300] text-lg" />
                Commnetnts 3
              </span>
            </div>

            <div className="m-3 text-xl md:text-2xl font-semibold hover:text-[#eb3300] transition duration-300">
              <p>We fix cars fast so you can get back driving</p>
            </div>
            <div className="m-3 text-gray-600 ">
              <p>
                We repair cars with care and attention to detail” is a statement
                that highlights the importance of providing high-quality auto
                repair services. It suggests that the company or individual
                providing the service takes pride in their work and is committed
                to ensuring that every car they
              </p>
            </div>
            <div className=" mx-3 py-7">
              <button className="Contactbtn Contactbtn flex items-center gap-2 bg-[#eb3300] px-6 py-3 md:px-8 md:py-4 text-white font-semibold text-sm sm:text-base rounded hover:bg-[#cc2c00] transition duration-300 uppercase">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1  lg:w-full mx-auto">
          <div className="bg-gray-100 p-6 flex flex-col ">
            <label htmlFor="Search" className="font-bold my-3 text-lg">
              Search
            </label>
            <div className="  justify-start items-center ">
              <input
                type="text"
                name=""
                id=""
                className="bg-white outline-0 p-2 md:p-5 w-auto lg:w-100"
              />
              <button
                type="submit"
                className="bg-[#eb3300] p-2 md:p-5 md:px-7 cursor-pointer hover:bg-black  transform  duration-1000 text-white font-semibold "
              >
                Search
              </button>
            </div>
          </div>

          <div className="bg-gray-100 my-5 p-5 ">
            <h1 className="font-bold text-lg">Recent Posts</h1>
            <div className="list-none leading-10 text-slate-600">
              <li>Hello world!</li>
              <li>We repair cars with care and attention to detail</li>
              <li>Quality repairs for your car at affordable prices</li>
              <li>We’ll get your car back on the road in no time</li>
              <li>Efficient repairs, reliable Results, every time here</li>
            </div>
          </div>

          <div className="bg-gray-100 w-75 sm:w-120 md:w-auto my-5 p-5 h-110 ">
            <h1 className="text-lg font-bold">Recent Comments</h1>
            <div className="list-none text-slate-600 leading-10">
              <li className="  border-b border-gray-300">
                A WordPress Commenter on Hello world!
              </li>
              <li className="  border-b border-gray-300">
                malen on We fix cars fast so you can get back driving
              </li>
              <li className="  border-b border-gray-300">
                malen on Efficient repairs, reliable Results, every time here
              </li>
              <li className="  border-b border-gray-300">
                malen on We’ll get your car back on the road in no time
              </li>
              <li className="  border-b border-gray-300">
                malen on Quality repairs for your car at affordable prices
              </li>
            </div>
          </div>

          <div className="bg-gray-100 w-75 sm:w-120 md:w-auto p-6 flex flex-col ">
            <label htmlFor="Search" className="font-bold my-3 text-lg">
              Search
            </label>
            <div className=" flex justify-start items-center ">
              <input
                type="text"
                name=""
                placeholder="Search..."
                id=""
                className="bg-white outline-0 p-2 md:p-5 w-auto lg:w-100"
              />
              <button
                type="submit"
                className="bg-[#eb3300] p-[12px] md:p-5 md:px-7 cursor-pointer    text-white font-semibold "
              >
                <IoIosSearch />
              </button>
            </div>
          </div>

          <div className="bg-gray-100 my-5 p-5 w-75 sm:w-120 md:w-auto ">
            <div className="text-2xl font-bold m-2 gap-2 p-2">Categories</div>

            <div className="list-none m-2 font-semibold text-lg">
              <div className="flex items-center gap-2 hover:bg-orange-500 border-t-2 border-gray-300 p-2 transform transition duration-300 hover:translate-x-[10px]">
                <FaAngleDoubleLeft />
                <li>Full Home Interior</li>
              </div>
              <div className="flex items-center gap-2 hover:bg-orange-500 border-t-2 border-gray-300 p-2 transform transition duration-300 hover:translate-x-[10px]">
                <FaAngleDoubleLeft />
                <li>Luxury Interior</li>
              </div>
              <div className="flex items-center gap-2 hover:bg-orange-500 border-t-2 border-gray-300 p-2 transform transition duration-300 hover:translate-x-[10px]">
                <FaAngleDoubleLeft />
                <li>Modular Interior</li>
              </div>
              <div className="flex items-center gap-2 hover:bg-orange-500 border-t-2 border-b-2 border-gray-300 p-2 transform transition duration-300 hover:translate-x-[10px]">
                <FaAngleDoubleLeft />
                <li>Renovation</li>
              </div>
              <div className="flex items-center gap-2 hover:bg-orange-500 border-b border-t-2 border-gray-200 p-2 transform transition duration-300 hover:translate-x-[10px]">
                <FaAngleDoubleLeft />
                <li>Uncategorized</li>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-5 w-75 sm:w-120 md:w-auto  ">
            <h1 className="font-bold text-lg">Recent Posts</h1>
            {RightCards.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-start items-center border-b py-5 gap-3"
                >
                  <div className=" hover:scale-75 object-contain duration-300">
                    <img src={item.img} alt="img" className="w-14 h-16 mr-3 " />
                  </div>
                  <div className="flex flex-col">
                    <span>{item.title}</span>
                    <div className="flex items-center gap-1">
                      <IoPersonOutline />
                      <span>{item.people}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-100 w-75 sm:w-120 md:w-auto my-5  ">
            <h1 className="font-bold text-2xl">Popular Tags</h1>
            <div className="my-3 ">
              <button
                onClick={handleClick}
                className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300"
              >
                Accessories
              </button>
              <button
                onClick={handleClick}
                className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300"
              >
                Battery
              </button>
              <button
                onClick={handleClick}
                className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300"
              >
                Change
              </button>
              <button
                onClick={handleClick}
                className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300"
              >
                Engine
              </button>
              <button
                onClick={handleClick}
                className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300"
              >
                Equipment
              </button>
              <button
                onClick={handleClick}
                className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300"
              >
                Gadgets
              </button>
              <button
                onClick={handleClick}
                className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300"
              >
                Glasses
              </button>
              <button
                onClick={handleClick}
                className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300"
              >
                Repair
              </button>
              <button
                onClick={handleClick}
                className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300"
              >
                Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTags;
