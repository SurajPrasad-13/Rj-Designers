import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import blog5 from '../../assets/Home/Blog5.png';
import shape1 from '../../assets/Service/shape_2-1.png';

export default function ContactUs() {
  const [selected, setSelected] = useState("Select");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const options = [
    "Electrical System",
    "Auto Car Repair",
    "Engine Diagnostics",
    "Car & Engine Clean"
  ];

  return (
    <>
      {/* Header */}
      <div className="relative bg-cover bg-center w-full h-[40vh] md:h-[70vh] flex items-end" style={{ backgroundImage: `url(${blog5})` }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
     <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 flex flex-row gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">


          <div className="text-white text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">Contact</h1>
            <div className="flex justify-center md:justify-start gap-2 items-center text-base sm:text-lg mt-2">
              <p className="font-bold">Home</p>
              <FaAngleDoubleLeft />
              <p className="text-red-600 font-bold">Contact</p>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <img src={shape1} alt="Service Shape" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-6 p-5'>
        {/* Left Info Panel */}
        <div className='bg-white shadow p-5'>
          <div className='flex items-center mb-5'>
            <div className='flex flex-col gap-1'>
              <div className='border border-red-600 w-10'></div>
              <div className='border border-red-700 w-5 mx-5'></div>
            </div>
            <div className='font-bold text-red-600'>CONTACT US</div>
          </div>
          <div className='mb-5'>
            <h1 className='text-3xl md:text-5xl font-bold mb-2'>Get In Touch</h1>
            <p className='text-gray-500'>is a phrase used to encourage communication, often between individuals or businesses, to connect or resolve issues.</p>
          </div>
          {[{
            Icon: BsTelephoneOutbound,
            label: "Phone Call",
            value: "+91 9784555134"
          }, {
            Icon: MdOutlineEmail,
            label: "Email drop Us",
            value: "info@rjdesigners.com"
          }, {
            Icon: CiLocationOn,
            label: "Location",
            value: "Inglewood, Maine 98380"
          }].map((item, idx) => (
            <div key={idx} className='flex items-center gap-4 my-5'>
              <div className='text-orange-600 text-3xl bg-[#eb3300]/30 p-5 md:p-7 rounded-full'>
                <item.Icon />
              </div>
              <div>
                <p className='text-gray-500 text-lg'>{item.label}</p>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
          <hr className='block md:hidden my-5' />
          <div className='flex flex-col md:flex-row md:items-center gap-5'>
            <h1 className='font-bold text-2xl'>Follow Us</h1>
            <div className='flex gap-4 flex-wrap'>
              {[FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn].map((Icon, idx) => (
                <Icon key={idx} className='bg-gray-300 w-10 h-10 rounded-full p-2 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:rotate-360' />
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className='bg-gray-100 p-5'>
          <h1 className='text-3xl md:text-4xl font-bold mb-5'>Send A Message</h1>
          <form>
            <div className='bg-white p-3 border border-gray-50 hover:border-red-500 flex items-center gap-2 mb-5'>
              <IoPersonOutline className='text-red-600' />
              <input type="text" placeholder='Name' className='outline-0 w-full' />
            </div>
            <div className='bg-white p-3 border border-gray-50 hover:border-red-500 flex items-center gap-2 mb-5'>
              <MdOutlineEmail className='text-red-600' />
              <input type="email" placeholder='Email Address' className='outline-0 w-full' />
            </div>
            <div className='bg-white p-3 border border-gray-50 hover:border-red-500 relative mb-5'>
              <div className='flex items-center gap-2'>
                <GoTag className='text-red-600' />
                <div className='w-full relative'>
                  <div onClick={() => setDropdownOpen(!dropdownOpen)} className="cursor-pointer text-gray-500 py-2 px-3 rounded bg-white flex justify-between items-center">
                    <span>{selected}</span>
                    <span className="text-lg ml-2"><IoIosArrowDown /></span>
                  </div>
                  {dropdownOpen && (
                    <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded mt-1 z-20 shadow-md">
                      {options.map((opt, idx) => (
                        <li key={idx} onClick={() => { setSelected(opt); setDropdownOpen(false); }} className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
                          {opt}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className='bg-white p-3 border border-gray-50 hover:border-red-500 flex gap-2 mb-5'>
              <FaRegComment className='text-red-600' />
              <textarea className="w-full h-32 outline-0" placeholder='Message'></textarea>
            </div>
            <button className='flex items-center gap-2 bg-orange-500 text-white font-bold p-4'>
              SUBMIT NOW
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-8/12 mx-auto">
        <iframe className="w-full h-[300px] md:h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9415056897888!2d75.72937887489472!3d26.905351460408006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3fe5bb55f51%3A0x28ef04348dea4ee9!2sSudo%20Techlabs!5e0!3m2!1sen!2sin!4v1752496436205!5m2!1sen!2sin" loading="lazy"></iframe>
      </div>
    </>
  );
}