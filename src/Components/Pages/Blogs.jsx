import { IoPersonOutline } from "react-icons/io5";
import { FaArrowRight, FaPlay, FaRegCalendarDays } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";
import blog1 from "../../assets/Blog/BlogPage1.png";
import blog2 from "../../assets/Home/Blog2.png";
import blog3 from "../../assets/Home/Blog4.png";
import blog4 from "../../assets/Blog/BG-1.webp";
import blog6 from "../../assets/Home/Blog6.png";
import blog5 from "../../assets/Home/Blog5.png";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDoubleLeft } from "react-icons/fa";
import shape1 from "../../assets/Service/shape_2-1.png"; // top right (badi wali)
import { BlogCards, RightCards } from "../../assets/DataObject";
const cards = [
  {
    id: 1,
    category: "full Home ",
    date: "May 15, 2023",
    comment: "Comments (3)",
    img: blog1,
    title: "Hello World!",
    desc: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
  },
  {
    id: 2,
    category: "Luxury",
    date: "May 15, 2023",
    comment: "Comments (3)",
    img: blog2,
    title: "We repair cars with care and attention to detail",
    desc: "We repair cars with care and attention to detail” is a statement that highlights the importance of providing high-quality auto repair services. It suggests that the company or individual providing the service takes pride in their work and is committed to ensuring that every car they",
  },
  {
    id: 3,
    category: "Modular",
    date: "May 15, 2023",
    comment: "Comments (3)",
    img: blog3,
    title: "Efficient repairs, reliable Results, every time here",
    desc: "We repair cars with care and attention to detail” is a statement that highlights the importance of providing high-quality auto repair services. It suggests that the company or individual providing the service takes pride in their work and is committed to ensuring that every car they",
  },
  {
    id: 4,
    category: "Renovation",
    date: "May 15, 2023",
    comment: "Comments (3)",
    img: blog4,
    title: "We’ll get your car back on the road in no time",
    desc: "We repair cars with care and attention to detail” is a statement that highlights the importance of providing high-quality auto repair services. It suggests that the company or individual providing the service takes pride in their work and is committed to ensuring that every car they",
  },
];



const playButtonStyles =
  "absolute border-4 border-black hover:border-[#eb3300] top-[50%] rounded-full bg-white left-[50%]  translate-x-[-50%] translate-y-[-50%] animate-ping opacity-20  transition-all  duration-2000";

const Blogs = () => {
  return (
    <div className="bg-slate-50">
      <div
        className="relative bg-cover bg-center w-full h-[40vh] md:h-[70vh] flex items-end"
        style={{ backgroundImage: `url(${blog5})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 flex flex-row gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="text-white text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Blogs
            </h1>
            <div className="flex justify-center md:justify-start gap-2 items-center text-base sm:text-lg mt-2">
              <p className="font-bold">Home</p>
              <FaAngleDoubleLeft />
              <p className="text-red-600 font-bold">Blogs</p>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <img
              src={shape1}
              alt="Service Shape"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:mx-10 gap-10 my-10 py-10">
        {/* left */}
        <div className="">
          {BlogCards.map((item) => {
            return (
              <div className=" w-75 sm:w-130   md:w-145 bg-white shadow my-10 mx-auto h-auto">
                <div className=" w-75 sm:w-130   md:w-145 mx-auto">
                  <img
                    className=" w-75 sm:w-130   md:w-145"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="m-3 my-5 flex flex-wrap items-center justify-start gap-4 font-medium text-sm text-gray-700">
                  <span className="flex items-center justify-start gap-1">
                    <IoPersonOutline className="text-[#eb3300] text-lg" /> Post
                    By Admin
                  </span>
                  <span className="flex items-center justify-start gap-1">
                    <FaRegCalendarDays className="text-[#eb3300] text-lg" />
                    April 3, 2025
                  </span>
                  <span className="flex items-center justify-start gap-1">
                    <FaRegComments className="text-[#eb3300] text-lg" />
                    {item.comment}
                  </span>
                </div>

                <div className="m-3 text-xl md:text-2xl font-semibold hover:text-[#eb3300] transition duration-300">
                  <p>{item.title} </p>
                </div>
                <div className="m-3 text-gray-600 ">
                  <p>{item.desc} </p>
                </div>
                <div className=" mx-3 py-7">
                  <button className="Contactbtn Contactbtn flex items-center gap-2 bg-[#eb3300] px-6 py-3 md:px-8 md:py-4 text-white font-semibold text-sm sm:text-base rounded hover:bg-[#cc2c00] transition duration-300 uppercase">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            );
          })}

          <div className=" w-75 sm:w-130   md:w-145 bg-white shadow my-10 mx-auto h-auto">
            <div className=" w-75 sm:w-130   md:w-145 mx-auto">
              <div className=" relative w-75 sm:w-130   md:w-145 mx-auto">
                <img
                  className=" w-75 sm:w-130   md:w-145 "
                  src={blog6}
                  alt=""
                />
                <div
                  className={` size-10 md:size-16 ${playButtonStyles} `}
                ></div>
                <div
                  className={` size-12 md:size-19 ${playButtonStyles} `}
                ></div>
                <div className=" group absolute top-[50%] rounded-full bg-white hover:bg-[#eb3300] left-[50%] size-15 md:size-20 shadow-2xl translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ">
                  <FaPlay className="absolute top-[50%] text-[#eb3300] group-hover:text-white left-[50%] translate-x-[-50%] translate-y-[-50%] " />{" "}
                </div>
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
          <div className=" w-75 sm:w-130   md:w-145 bg-white shadow my-10 mx-auto h-auto">
            <div className=" w-75 sm:w-130   md:w-145 mx-auto">
              <iframe
                width="100%"
                height="300"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/729604123&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
              <div className="text-[10px] text-[#cccccc] break-all break-normal overflow-hidden whitespace-nowrap text-ellipsis font-[100] font-sans">
                <a
                  href="https://soundcloud.com/demhoustonboys"
                  title="LUCKY3RD"
                  target="_blank"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  LUCKY3RD
                </a>{" "}
                ·{" "}
                <a
                  href="https://soundcloud.com/demhoustonboys/life-goes-on-lucky3rd"
                  title='" Life Goes On " LUCKY3RD'
                  target="_blank"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  &quot; Life Goes On &quot; LUCKY3RD
                </a>
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
        {/* right */}
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
              <button className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300">
                Accessories
              </button>
              <button className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300">
                Battery
              </button>
              <button className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300">
                Change
              </button>
              <button className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300">
                Engine
              </button>
              <button className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300">
                Equipment
              </button>
              <button className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300">
                Gadgets
              </button>
              <button className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300">
                Glasses
              </button>
              <button className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300">
                Repair
              </button>
              <button className="bg-white m-3 p-2 hover:bg-[#eb3300] hover:text-white font-semibold transition-all duration-300">
                Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
