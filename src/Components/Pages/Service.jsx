import blog5 from "../../assets/Home/Blog5.png";
import { FaAngleDoubleLeft, FaFilePdf } from "react-icons/fa";
import shape1 from "../../assets/Service/shape_2-1.png";
import modular from "../../assets/Home/Modular.png";
import full from "../../assets/Home/FullHome.png";
import luxury from "../../assets/Home/Lurxry.png";
import renovation from "../../assets/Home/Renovation.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import '../../App.css'

function Service() {

  const navigate = useNavigate()
  const handleClick1 = (path)=>{
    navigate(path)
  }
  const cards = [
    {
      id: "1",
      name: "Modular Interior",
      Description: "Smart. Stylish. Flexible. Modular Interiors Redefined.",
      img: modular,
      path:'/modular'
    },
    {
      id: "2",
      name: "Full Home Interior",
      Description:
        "Complete Home Interiors, Stylish, Functional, and Personalized.",
      img: full,
      path:'/fullhome'
    },
    {
      id: "3",
      name: "Luxury Interior",
      Description: "Timeless Luxury, Elegant Designs, Crafted for You.",
      img: luxury,
      path:'/luxury'
    },
    {
      id: "4",
      name: "Renovation",
      Description: "Revamp, Refresh, Renew – Transform Your Space Today!",
      img: renovation,
      path:'/renovation'
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="relative bg-cover bg-center w-full h-[40vh] md:h-[70vh] flex items-end" style={{ backgroundImage: `url(${blog5})` }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
     <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 flex flex-row gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">


          <div className="text-white text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">Services</h1>
            <div className="flex justify-center md:justify-start gap-2 items-center text-base sm:text-lg mt-2">
              <p className="font-bold">Home</p>
              <FaAngleDoubleLeft />
              <p className="text-red-600 font-bold">Service</p>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <img src={shape1} alt="Service Shape" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-4 sm:px-6 md:px-10 bg-white m-10 py-5 place-items-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group border-2 border-gray-400 rounded shadow sm:w-full lg:w-85 overflow-hidden relative"
          >
            {/* Image Section */}
            <div className="w-full h-[250px] overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>

              {/* Triangle */}
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[180px] border-t-[100px] border-l-red-500 border-t-transparent z-10 transition-all duration-500 ease-in-out group-hover:bottom-[-100px] opacity-50"></div>
            </div>

            {/* Text */}
            <div className="p-4 relative z-20">
              <h2 className="text-lg font-semibold">{card.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{card.Description}</p>

              <div className=" my-3">
                {/* <button  className="Contactbtn text-sm font-semibold">VIEW DETAILS</button> */}
                <button onClick={()=>handleClick1(card.path)} className="Contactbtn Contactbtn flex items-center gap-2 bg-[#eb3300] px-4 py-2 md:px-6 md:py-3 text-white font-semibold text-sm sm:text-base rounded hover:bg-[#cc2c00] transition duration-300">
              Read More <FaArrowRight />
            </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="bg-red-200 text-white font-bold flex justify-center items-center h-[240px]">
        <div className="flex justify-around items-center">
          <FaFilePdf />
          <div>
            <p>Our Brochures</p>
            <p>Download</p>
          </div>
          <MdArrowRightAlt />
        </div>
      </div> */}
    </>
  );
}

export default Service;
