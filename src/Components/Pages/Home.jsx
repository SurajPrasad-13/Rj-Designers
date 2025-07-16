import Dots from "../../assets/Home/about_dots.webp";
import SliderBack from "../../assets/Home/sliderBack.jpeg";
import slider from "../../assets/Home/Slider.png";
import doubleLine1 from "../../assets/Home/doubleLine1.png";
import office from "../../assets/Home/office.jpeg";
import VideoImage from "../../assets/Home/videoimg.png";
import doubleLine2 from "../../assets/Home/doubleLine2.png";
import quote from "../../assets/Home/quote.svg";
import ContactImg from "../../assets/Home/contactimg.jpg";
import img1 from "../../assets/Home/videoimg.png";
import img2 from "../../assets/Home/Background2.jpg";
import img3 from "../../assets/Home/videoimg.png";
import img4 from "../../assets/Home/Background2.jpg";
import img5 from "../../assets/Home/hero_shape_3.webp"; 
import img6 from "../../assets/Home/hero_shape_2.webp"; 
import testyImage from "../../assets/Home/testi-shape.webp";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import setting_bg from "../../assets/Home/settings_shape.webp";
import { FaPlay } from "react-icons/fa";
import {
  blogPosts,
  gallery,
  serviceData,
  testimonials,
  whyChooseUs,
} from "../../assets/DataObject";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { useState, useEffect } from "react";
const images = [
  {
    img: img1,
    text: "We're expert For interior designers Services",
  },
  {
    img: img2,
    text: "Quality repairs You can trust Every time",
  },
  {
    img: img3,
    text: "We're expert For interior designers Services",
  },
  {
    img: img4,
    text: "Quality repairs You can trust Every time",
  },
];

const playButtonStyles =
  "absolute top-[50%] rounded-full bg-white left-[50%]  translate-x-[-50%] translate-y-[-50%] animate-ping  transition-all  duration-2000";

const Home = () => {
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

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <div>
      <div className="relative w-full min-h-[80vh] sm:min-h-[90vh] md:h-screen overflow-hidden shadow-lg">
        {/* Decorative Shape: Bottom Left */}
        <img
          src={img5}
          alt="shape bottom left"
          className="absolute bottom-0 left-0 w-[100px] sm:w-[150px] z-20"
        />

        {/* Decorative Shape: Top Right (badi aur responsive) */}
        <img
          src={img6}
          alt="shape top right"
          className="absolute top-10 right-0 w-[200px] sm:w-[300px] md:w-[700px] z-20 opacity-50"
        />

        {/* Image Slider */}
        <AnimatePresence>
          {images.map((item, i) =>
            i === index ? (
              <motion.div
                key={i}
                className="absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt={`slide-${i}`}
                />

                {/* Text Content */}
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 50, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute top-1/2 -translate-y-1/2 left-[40px] sm:left-[60px] md:left-[100px] text-white text-xl sm:text-2xl md:text-4xl font-bold z-30 text-left max-w-[90%]"
                >
                  {item.text}
                </motion.div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-16  w-full mb-10  mx-auto gap-8">
        {/* Left Image Section */}
        <div className="  relative w-50 sm:w-70  h-35  sm:h-60 md:h-96  md:w-full lg:w-135 mt-10 ">
          {/* Dots image */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
            className="absolute right-0 top-0 w-50 sm:w-70 h-35 md:h-80 lg:h-90  md:w-[216px]  "
          >
            <img className="h-full" src={Dots} alt="" />
          </motion.div>

          {/* Large background image */}
          <div className="absolute z-10 w-50 sm:w-70  h-35  sm:h-60 md:h-96  md:w-full lg:w-135 ">
            <img
              className="h-full w-full object-contain"
              src={SliderBack}
              alt=""
            />
          </div>

          {/* Sliding image */}
          <motion.div
            animate={{ x: [10, -30, 10] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
            className="absolute z-20 top-10 sm:top-14 right-4 bg-white p-1  h-25 md:h-68   md:w-[216px]"
          >
            <img className="h-full object-contain" src={slider} alt="" />
          </motion.div>
        </div>

        {/* Right Content Section */}
        <div className="w-full h-auto flex flex-col justify-center">
          {/* Title */}
          <div className="flex items-center justify-center md:justify-start space-x-2 my-6">
            <img src={doubleLine1} className="w-6 sm:w-8" alt="" />
            <p className="text-orange-600 font-bold text-sm sm:text-base">
              ABOUT US
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-snug">
            Here’s a possible "About Us" section for RJ Designers, an interior
            design firm:
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            At RJ Designers, we transform spaces into stunning, functional, and
            inspiring environments. With a passion for creativity and a
            commitment to excellence, our team specializes in residential,
            commercial, and luxury interior designs that reflect style,
            personality, and elegance.
          </p>

          {/* Button */}
          <div className="mt-6">
            <button className="Contactbtn Contactbtn flex items-center gap-2 bg-[#eb3300] px-4 py-2 md:px-6 md:py-3 text-white font-semibold text-sm sm:text-base rounded hover:bg-[#cc2c00] transition duration-300">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Services we Provide */}
      <div className="bg-[#161921]  pt-5 md:pt-15 border border-white text-white ">
        <div className="text-[#eb3300] flex items-center font-bold uppercase justify-center gap-2">
          <div>
            <img className="w-8" src={doubleLine1} alt="" />
          </div>
          <p>Services We Provide</p>
          <div>
            <img className="w-8" src={doubleLine2} alt="" />
          </div>
        </div>

        <div className=" text-3xl md:text-5xl font-bold text-center my-2 md:my-5">
          Our Service Area
        </div>

        <div className="my-10 h-120 w-full  mx-auto  ">
          <Slider {...settings1}>
            {serviceData.map((post) => {
              return (
                <div
                  key={post.id}
                  className="relative h-110  max-w-95  my-5   shadow-lg group "
                >
                  <div className="w-95 h-[300px] overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-97 h-[300px] object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-50 "
                    />
                  </div>
                  <div className="bg-white w-85 h-60 mx-auto absolute -bottom-10  left-6">
                    <div className=" absolute -left-6 bg-[#eb3300] size-15   p-3 text-center ">
                      <div className="  text-3xl font-bold leading-none">
                        {post.id}
                      </div>
                    </div>
                    <div className="px-10 capitalize">
                      <div className="py-7 text-2xl font-[600] text-black">
                        {post.title}
                      </div>
                      <div className=" mb-5 text-gray-600 text-lg">
                        {post.desc}
                      </div>
                    </div>
                    <div className="h-15 w-full flex items-center gap-2 justify-center bg-[#eb3300] hover:bg-gray-200 hover:text-[#eb3300] transition-all duration-300  ">
                      <p className="text-xl font-semibold">View Details </p>
                      <FaArrowRight className="text-xl" />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div
        className=" h-auto bg-left-top bg-no-repeat grid gap-10 md:gap-25 grid-cols-1 lg:grid-cols-2 my-15 px-3 md:px-15"
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
          <div className="text-gray-600 leading-6  md:text-lg">
            RJ designers began with a clear goal: to design environments that
            inspire, change, and have an impact on people's lives. Our startup
            consisted of a group of designers who shared a passion for making
            things that were both beautiful and functional. Being one of the top
            interior designers in Jaipur, we have risen to prominence in recent
            years thanks to our commitment to interior design and our reputation
            for originality and creativity.
          </div>
        </div>
        <div
          className=" h-70 w-70 md:h-93 md:w-98 mx-auto"
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
              src={office}
              alt="ceo"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Fourth Part */}
      <div className="flex items-center justify-center  uppercase my-6 font-bold text-[#eb3300]">
        <img className="w-7" src={doubleLine1} alt="" />
        <p className="text-sm sm:text-[16px]">
          "Dream. Design. Inspire. Your Perfect Home Awaits."
        </p>
        <img className="w-7" src={doubleLine2} alt="" />
      </div>
      <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mt-5 mb-20">
        Inspiration for home interior designs
      </div>

      {/* Fifth Part */}
      <div className="bg-[#161921] flex flex-col lg:flex-row   pt-5 border border-white text-white px-5 ">
        <div className=" relative h-70 w-70 sm:h-100 sm:w-100 mx-auto   md:h-140 md:w-140 rounded-lg ">
          <img
            className="h-70 w-70 sm:h-100 sm:w-100 mx-auto   md:h-140 md:w-140 rounded-lg "
            src={VideoImage}
            alt=""
          />
          <div className={` size-12 md:size-17 ${playButtonStyles} `}></div>
          <div className="absolute top-[50%] rounded-full bg-white left-[50%] size-18 md:size-25 shadow-2xl translate-x-[-50%] translate-y-[-50%] ">
            <div className={` size-15 md:size-22 ${playButtonStyles} `}></div>
            <FaPlay className="absolute top-[50%] text-[#eb3300] left-[50%] translate-x-[-50%] translate-y-[-50%] " />{" "}
          </div>
        </div>
        <div className="p-10">
          <div className="flex items-center justify-center pb-10 uppercase font-semibold text-[#eb3300]">
            <img className="w-7" src={doubleLine1} alt="" />
            <p>Why Choose Us?</p>
            <img className="w-7" src={doubleLine2} alt="" />
          </div>
          <div className="flex items-start justify-start flex-col gap-10">
            {whyChooseUs.map((item) => (
              <div className="group flex flex-col md:flex-row items-center justify-center gap-3 md:gap-7">
                <div className="text-[#eb3300] px-3 md:px-6 size-15 md:size-20 text-2xl md:text-4xl font-semibold rounded-full flex items-center justify-center bg-[#282a30] group-hover:bg-white transition-all duration-500">
                  {item.id}
                </div>
                <div className="text-center md:text-start">
                  <p className="text-xl md:text-2xl font-semibold">
                    {item.title}
                  </p>
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
        <div className=" text-2xl md:text-5xl font-bold text-center my-3 md:mt-5 mb-25">
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
        <div className="text-white text-2xl sm:text-3xl md:text-[50px] text-center font-bold">
          Best Interior & Architecture Designer in Jaipur
        </div>
        <div className="text-white text-[18px] text-center font-medium  my-3 md:my-5">
          Have questions about our services or want to discuss your design
          project?
        </div>

        <div className="text-center">
          <button className="Contactbtn  group bg-[#eb3300] text-white py-2 px-3 md:py-4 md:px-7 uppercase rounded font-semibold my-10">
            Contact Us Now!
          </button>
        </div>
      </div>
      {/* Eight Part Blog and News */}
      <div className="flex items-center gap-2 justify-center py-10">
        <img className="w-7" src={doubleLine1} alt="" />
        <p className="uppercase font-bold text-[#eb3300]">Blog & News</p>
        <img className="w-7" src={doubleLine2} alt="" />
      </div>

      <div className=" text-2xl md:text-5xl font-bold text-center px-3  mb-5 md:mb-20">
        Latest post from the Blog & News
      </div>
      <div className="my-10 w-[89%] mx-auto pb-15  ">
        <Slider {...settings1}>
          {blogPosts.map((post) => {
            return (
              <div
                key={post.id}
                className="bg-white flex justify-center max-w-87 mx-auto  my-5   shadow-lg"
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
                <div className="flex items-center hover:gap-5 gap-2 justify-start m-3 py-3  transition-all duration-600 ">
                  <a
                    href="#"
                    className="text-black hover:text-[#eb3300] font-bold underline   "
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
      <div className="text-2xl md:text-5xl font-bold text-center  mb-10">
        Gallery
      </div>

      <div className=" h-auto w-auto sm:w-[600px] md:w-[740px]   lg:w-[1160px]  md:my-15 mx-auto ">
        <Slider {...settings2}>
          {gallery.map((item, id) => (
            <div
              key={id}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" border-0 galleryCont relative h-80 w-40 sm:w-[300px] md:w-[370px] lg:w-[580px]  mx-auto  overflow-hidden "
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
