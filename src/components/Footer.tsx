import logo from '../roshePics/logo/logo-rosheh-white.png'
import logoEnamad from '../roshePics/logo/enamad.png'
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
import bgFooter from "../roshePics/footer/footer-1.png";

const Footer = () => {
  return (
    
      <div
        className="relative bg-no-repeat bg-contain bg-center h-[446px] "
        style={{
          backgroundImage: `url("${bgFooter}")`,
          backgroundSize: "cover",
        }}
      >
        
        <div className="flex flex-col justify-center items-center lg:flex-row pt-16">
          <div className=" lg:absolute top-32 right-32">
            <img src={logo} alt="Logo" className="w-52 xl:w-60" />
          </div>


          <div className="lg:w-1/4 xl:w-1/5 xl:mt-0 mt-10 flex-col justify-center items-center lg:absolute xl:left-[38%] top-[30%] left-[36%] right-[50%]">
              <ul className="flex justify-between items-center xl:justify-evenly text-sm">
                <li>
                  <a href="#" className="text-white font-bold">شرایط و مقررات</a>
                </li>
                <li>
                  <a href="#" className="text-white font-bold">تماس با ما</a>
                </li>
                <li>
                  <a href="#" className="text-white font-bold">فروشگاه</a>
                </li>
                <li>
                  <a href="#" className="text-white font-bold">برندها</a>
                </li>
              </ul>
              <div className="flex justify-between mt-6 text-white">
                  <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center cursor-pointer">
                    <SiAparat size={20}/>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center cursor-pointer">
                    <BsTelegram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center cursor-pointer">
                    <AiOutlineWhatsApp size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center cursor-pointer">
                    <AiFillYoutube size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center cursor-pointer">
                    <AiOutlineInstagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center cursor-pointer">
                    <AiOutlineTwitter size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center cursor-pointer">
                    <BsFacebook size={20} />
                  </a>
          
              </div>
          </div>

          <div className="lg:absolute top-36 left-40">
            <img src={logoEnamad} alt="logo-Enamad" />
          </div>

          <div className="lg:w-1/5 text-sm text-gray-400 lg:absolute bottom-[22%] left-[40%] right-[50%] dir-rtl">
              <p className="text-white">  .تمامی حقوق برای روشه محفوظ است ©</p>
          </div>
        </div>

      </div>
  );
};

export default Footer;