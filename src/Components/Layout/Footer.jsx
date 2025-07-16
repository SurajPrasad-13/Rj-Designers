import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import rjdesign from "../../assets/rjdesign.png";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import gallery1 from "../../assets/Home/gallery1.png";
import gallery2 from "../../assets/Home/gallery2.png";
import gallery3 from "../../assets/Home/gallery3.png";
import gallery4 from "../../assets/Home/gallery4.png";
import gallery5 from "../../assets/Home/gallery5.png";
import gallery6 from "../../assets/Home/gallery6.png";

const Footer = () => {
  const footerData = [
    { id: 1, img: gallery1 },
    { id: 2, img: gallery2 },
    { id: 3, img: gallery3 },
    { id: 4, img: gallery4 },
    { id: 5, img: gallery5 },
    { id: 6, img: gallery6 },
  ];
  return (
    <>
      <div>
        <div className="grid bg-black text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-medium px-6 py-12 gap-8">
          {/* Logo & Description */}
          <div>
            <img className="h-14 my-4" src={rjdesign} alt="logo" />
            <p className="text-sm md:text-[16px] text-white">
              At RJ Designers, we transform spaces into stunning, functional,
              and inspiring environments.
            </p>
          </div>

          {/* Services */}
          <div className="font-[400] leading-9 text-sm md:text-[17px]">
            <h1 className="text-xl my-2 font-bold">Our Services</h1>
            {[
              "Modular Interior",
              "Full Home Interior",
              "Renovation",
              "Modular Interior",
            ].map((service, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <MdKeyboardDoubleArrowRight className="text-lg" />
                <p>{service}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="font-[400] leading-9 text-sm md:text-[16px]">
            <h1 className="text-xl my-2 font-bold">Contact Us</h1>
            <div className=" cursor-pointer flex items-center gap-2">
              <FaPhoneAlt />
              <p>+91 9784555143</p>
            </div>
            <div className=" cursor-pointer flex items-center gap-2">
              <MdEmail />
              <p>info@rjdesigners.com</p>
            </div>
            <div className="flex items-center justify-start
             gap-2">
              <IoLocationSharp />
              <p>Address .........</p>
            </div>
          </div>

          {/* Gallery */}
          <div className="font-[400] leading-7 text-sm">
            <h1 className="text-xl my-2 font-bold">Photos Gallery</h1>
            <div className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
              <div className="grid grid-cols-3 gap-1">
                {footerData.map((item) => (
                  <div
                    key={item.id}
                    className="aspect-square bg-cover bg-center relative rounded-md overflow-hidden"
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <motion.div
                      initial={{ scaleX: 0.1, opacity: 0, zIndex: 0 }}
                      whileHover={{ scaleX: 1, opacity: 0.5, zIndex: 3 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center absolute top-0 left-0 h-full w-full bg-red-400"
                    >
                      <FaInstagram className="text-white" />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full bg-[#eb3300] text-white flex items-center justify-center gap-2 py-2 px-4 text-sm">
          <FaRegCopyright />
          2025 All Rights Reserved By RJ Designers
        </div>
      </div>
    </>
  );
};

export default Footer;
