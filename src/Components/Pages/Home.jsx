import React from "react";
import Dots from "../../assets/Home/about_dots.webp";
import SliderBack from "../../assets/Home/sliderBack.jpeg";
import slider from "../../assets/Home/Slider.png";
import doubleLine1 from "../../assets/Home/doubleLine1.png";
import doubleLine2 from "../../assets/Home/doubleLine2.png";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import setting_bg from "../../assets/Home/settings_shape.webp";
import office from "../../assets/Home/office.jpeg";
import VideoImage from "../../assets/Home/videoimg.png";
import { FaPlay } from "react-icons/fa";
import {
  blogPosts,
  gallery,
  testimonials,
  whyChooseUs,
} from "../../assets/DataObject";
import testyImage from "../../assets/Home/testi-shape.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "../../assets/Home/quote.svg";

import ContactImg from "../../assets/Home/contactimg.jpg";
import "../../App.css";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { img } from "motion/react-client";

const Home = () => {
  const playButtonStyles =
    "absolute top-[50%] rounded-full bg-white left-[50%]  translate-x-[-50%] translate-y-[-50%] animate-ping  transition-all  duration-2000";

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet and above
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet and above
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* first Part image animation */}
      <div className="grid  grid-cols-1 lg:grid-cols-2 px-15">
        <div className="relative h-auto w-auto">
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className=" absolute h-100 right-0 top-0 "
          >
            <img className="h-130" src={Dots} alt="" />
          </motion.div>
          <div className="absolute z-3 h-100 w-170">
            <img className="h-100 w-150" src={SliderBack} alt="" />
          </div>
          <motion.div
            animate={{ x: [10, -30, 10] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute bg-white p-2 z-5 top-15 right-5"
          >
            <img src={slider} alt="" />
          </motion.div>
        </div>
        <div className=" px-15 h-160 w-120">
          <div className="relative w-38  bg-amber-300 flex items-center my-8 ">
            <p className="absolute right-21 my-1 border pb-[1px] bg-orange-600 w-13 border-orange-600 "></p>
            <p className="absolute bottom-[10x] right-0 text-orange-600 font-bold">
              ABOUT US
            </p>
            <p className="absolute bottom-0 my-1  border w-17 pb-[1px] bg-orange-600  border-orange-600"></p>
          </div>
          <div className="text-2xl  my-4 font-bold">
            Here’s a possible "About Us" section for RJ Designers, an interior
            design firm:
          </div>
          <div className="text-gray-600 leading-6 text-lg">
            At RJ Designers, we transform spaces into stunning, functional, and
            inspiring environments. With a passion for creativity and a
            commitment to excellence, our team specializes in residential,
            commercial, and luxury interior designs that reflect style,
            personality, and elegance.
          </div>
          <div className="flex items-center rounded justify-center gap-1 bg-[#eb3300] w-40 m-5 px-5 py-4 font-bold text-lg text-white">
            <button>Read More </button>
            <FaArrowRight />
          </div>
        </div>
      </div>
      {/* Second Part */}
      <div className="bg-[#161921]  pt-15 border border-white text-white ">
        <div className="text-[#eb3300] flex items-center font-bold uppercase justify-center gap-2">
          <div>
            <img className="w-8" src={doubleLine1} alt="" />
          </div>
          <p>Services We Provide</p>
          <div>
            <img className="w-8" src={doubleLine2} alt="" />
          </div>
        </div>

        <div className="text-5xl font-bold text-center my-5">
          Our Service Area
        </div>
      </div>

      {/* Third Part */}
      <div
        className=" h-auto bg-left-top bg-no-repeat grid gap-25 grid-cols-1 lg:grid-cols-2 my-15 px-15"
        style={{ backgroundImage: `url(${setting_bg})` }}
      >
        <div>
          <div className="flex items-center justify-start uppercase font-semibold text-[#eb3300]">
            <img className="w-7" src={doubleLine1} alt="" />
            <p>Rj designers</p>
          </div>
          <div className="capitalise text-[22px] font-bold my-5">
            Improve Your Living and Working Environments with Jaipur's Top
            Interior Designer
          </div>
          <div className="text-gray-600 leading-6 text-lg">
            RJ designers began with a clear goal: to design environments that
            inspire, change, and have an impact on people's lives. Our startup
            consisted of a group of designers who shared a passion for making
            things that were both beautiful and functional. Being one of the top
            interior designers in Jaipur, we have risen to prominence in recent
            years thanks to our commitment to interior design and our reputation
            for originality and creativity.
          </div>
        </div>
        <div className="h-93 w-98 mx-10">
          <img className="h-93 w-98" src={office} alt="" />
        </div>
      </div>
      {/* Fourth Part */}
      <div className="flex items-center justify-center  uppercase my-6 font-bold text-[#eb3300]">
        <img className="w-7" src={doubleLine1} alt="" />
        <p>"Dream. Design. Inspire. Your Perfect Home Awaits."</p>
        <img className="w-7" src={doubleLine2} alt="" />
      </div>
      <div className="text-5xl font-bold text-center mt-5 mb-25">
        Inspiration for home interior designs
      </div>

      {/* Fifth Part */}
      <div className="bg-[#161921] flex flex-col lg:flex-row   pt-5 border border-white text-white ">
        <div className=" relative h-140 w-140 rounded-lg ">
          <img className="h-140 w-140 rounded-lg " src={VideoImage} alt="" />
          <div className={`size-17 ${playButtonStyles} `}></div>
          <div className="absolute top-[50%] rounded-full bg-white left-[50%] size-25 shadow-2xl translate-x-[-50%] translate-y-[-50%] ">
            <div className={`size-22 ${playButtonStyles} `}></div>
            <FaPlay className="absolute top-[50%] text-[#eb3300] left-[50%] translate-x-[-50%] translate-y-[-50%] " />{" "}
          </div>
        </div>
        <div className="p-10">
          <div className="flex items-center justify-start pb-10 uppercase font-semibold text-[#eb3300]">
            <img className="w-7" src={doubleLine1} alt="" />
            <p>Why Choose Us?</p>
          </div>
          <div className="flex items-start justify-start flex-col gap-10">
            {whyChooseUs.map((item) => (
              <div className="group flex items-center justify-center gap-7">
                <div className="text-[#eb3300] px-6  size-20 text-4xl font-semibold rounded-full flex items-center justify-center bg-[#282a30] group-hover:bg-white transition-all duration-500">
                  {item.id}
                </div>
                <div>
                  <p className="text-2xl font-semibold">{item.title}</p>
                  <p className="text-gray-300 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sixth Part carousel */}
      <div className=" py-20 w-11/12 mx-auto">
        <div className="flex items-center justify-center  uppercase my-6 font-bold gap-2 text-[#eb3300]">
          <img className="w-7" src={doubleLine1} alt="" />
          <p>Testimonial</p>
          <img className="w-7" src={doubleLine2} alt="" />
        </div>
        <div className=" text-3xl md:text-5xl font-bold text-center my-3 md:mt-5 mb-25">
          What Clients Say About Us
        </div>
        <div className=" m-auto my-20">
          <Slider {...settings1}>
            {testimonials.map((item) => {
              return (
                <div key={item.id} className="px-4 ">
                  <div
                    className="bg-gray-100 rounded-lg p-6 h-full flex flex-col items-center text-center hover:bg-black group transition-all duration-300 "
                    style={{ backgroundImage: `url(${testyImage})` }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                    <p className="text-gray-700 mb-4 group-hover:text-white ">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-2 mt-auto justify-center">
                      <span className="text-orange-500 text-3xl leading-none">
                        <img src={quote} alt="" />
                      </span>
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-white ">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600 group-hover:text-white ">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* Sevent Part */}
      <div
        style={{ backgroundImage: `url(${ContactImg})` }}
        className="h-100 bg-center bg-cover w-full"
      >
        <div className="flex items-center gap-2 justify-center py-10">
          <img className="w-7" src={doubleLine1} alt="" />
          <p className="uppercase text-white font-bold">rj designers</p>
          <img className="w-7" src={doubleLine2} alt="" />
        </div>
        <div className="text-white text-3xl md:text-[50px] text-center font-bold">
          Best Interior & Architecture Designer in Jaipur
        </div>
        <div className="text-white text-[18px] text-center font-medium my-5">
          Have questions about our services or want to discuss your design
          project?
        </div>

        <div className="text-center">
          <button className="Contactbtn  group bg-[#eb3300] text-white p-4 px-7 uppercase rounded font-semibold my-10">
            Contact Us Now!
          </button>
        </div>
      </div>
      {/* Eight Part */}
      <div className="flex items-center gap-2 justify-center py-10">
        <img className="w-7" src={doubleLine1} alt="" />
        <p className="uppercase font-bold text-[#eb3300]">Blog & News</p>
        <img className="w-7" src={doubleLine2} alt="" />
      </div>
      <div className="text-5xl font-bold text-center  mb-20">
        Latest post from the Blog & News
      </div>
      {/* items-start  overflow-hidden  mx-auto justify-start gap-10 */}
      <div className="my-10 w-[89%] mx-auto pb-15  ">
        <Slider {...settings1}>
          {blogPosts.map((post) => {
            return (
              <div
                key={post.id}
                className="bg-white max-w-87  my-5   shadow-lg"
              >
                <div className="w-87 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-87 h-[250px] object-cover transition duration-300 hover:scale-110 hover:brightness-50 "
                  />
                </div>
                <div className="relative bg-red-400  mb-12">
                  <div className="absolute -top-10 left-10 bg-[#eb3300] size-20 text-white  px-4 py-3 text-center ">
                    <div className="text-3xl font-bold leading-none">
                      {post.date}
                    </div>
                    <div className="uppercase font-bold">{post.month}</div>
                  </div>
                </div>
                <div className=" px-3 text-sm text-gray-500 flex items-center gap-2  mb-2">
                  <span className="flex items-center text-gray-800 font-semibold justify-center gap-1">
                    <IoPersonOutline className="text-[#eb3300] text-lg" /> Post
                    By Admin
                  </span>
                  <span className="flex items-center text-gray-800 font-semibold justify-center gap-1">
                    <FaRegComments className="text-[#eb3300] text-lg" />{" "}
                    Comments(
                    {post.comments})
                  </span>
                </div>
                <div className="px-3 ">
                  <p className="text-xl font-bold my-2">{post.title}</p>
                  <p className="font-medium mb-2 text-gray-600">{post.desc}</p>
                </div>
                <div className="flex items-center hover:gap-5 gap-2 justify-start m-3 my-3  transition-all duration-600 ">
                  <a
                    href="#"
                    className="text-black hover:text-[#eb3300]   font-bold underline   "
                  >
                    READ MORE
                  </a>
                  <IoArrowForward className="text-xl text-[#eb3300] " />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {/* Ninth Part */}
      <div className="flex items-center gap-2 justify-center py-5">
        <img className="w-7" src={doubleLine1} alt="" />
        <p className="uppercase font-bold text-[#eb3300]">home interior</p>
        <img className="w-7" src={doubleLine2} alt="" />
      </div>
      <div className="text-5xl font-bold text-center  mb-10">Gallery</div>

      <div className="h-[332px] w-[1160px] my-15 mx-auto ">
        <Slider {...settings2}>
          {gallery.map((item, id) => (
            <div
              key={id}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" border-0 galleryCont relative h-83 w-80  object-cover overflow-hidden "
            >
              <img className="mx-5 hover:grayscale-75" src={item.img} alt="" />
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
