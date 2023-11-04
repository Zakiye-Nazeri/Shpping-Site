import { useState } from 'react'
import logo from '../roshePics/logo/logo-rosheh.png'
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import {FaBars} from "react-icons/fa6"
import {FaXmark} from "react-icons/fa6"
import { useShoppingCart } from "../context/ShoppingCartContext"


export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { openCart, cartQuantity, closeCart, isOpen } = useShoppingCart()

    const openNav = () => {
      setIsNavOpen(true);
    }
  
    const closeNav = () => {
      setIsNavOpen(false);
    }
  
    const closeOnOverlayClick = () => {
      closeNav();
      closeCart()
    }
  
  return (
    <div>
    <header className="h-[105px] bg-white py-6 shadow-sm">
        <div className="container mx-auto max-w-[80%] flex justify-between items-center mt-0 px-4">

            <div className="flex justify-between items-center lg:gap-x-3">

                  <a href="#" onClick={openCart} className="hover:opacity-60 lg:inline-block w-9 lg:w-6 lg:h-6 relative" >
                      <AiOutlineShopping size="35px  lg:25px" />
                      <div
                        className="rounded-full bg-green-rosheh flex justify-center items-center text-xs"
                        style={{
                          color: "white",
                          width: "1rem",
                          height: "1rem",
                          position: "absolute",
                          left: -7,
                          top: 0,
                          
                        }}
                      >
                        {cartQuantity}
                      </div>
                  </a>

                <a href="#" className="hover:opacity-60 hidden lg:inline-block">
                    <BiShuffle size="25px" />
                </a>

                <a href="#" className="hover:opacity-60 hidden lg:inline-block">
                    <AiOutlineHeart size="25px" />
                </a>


                <a href="#" className="hover:opacity-60 hidden lg:inline-block">
                    <AiOutlineSearch size="25px" />
                </a>

                <a href="#" className="hover:opacity-60 hidden lg:inline-block">
                    <AiOutlineUser size="25px"/>
                </a>
            </div>

            <div className="hidden lg:inline-block">
                <ul className="flex flex-row-reverse">
                    <a href="/" className="mx-2 font-bold text-lg hover:text-green-rosheh">
                      برندها
                    </a>
                    <a href="/" className="mx-2 font-bold text-lg hover:text-green-rosheh">
                      پوست
                    </a>
                    <a href="/" className="mx-2 font-bold text-lg hover:text-green-rosheh">
                      مو
                    </a>
                    <a href="/" className="mx-2 font-bold text-lg hover:text-green-rosheh">
                      آرایش
                    </a>
                    <a href="/" className="mx-2 font-bold text-lg hover:text-green-rosheh">
                      عطر
                    </a>      
                    <a href="/" className="text-green-rosheh mx-2 font-bold text-lg">
                        <p className="inline-block rotate-180 "> برعکس</p>
                         صفحه
                    </a>
                </ul>
            </div>

            <a href='/' className="shrink-0">
                <img src={logo} alt="rosheh-logo" className="h-12 md:h-16" />
            </a>

            <div className={`lg:hidden nav-icon ${isNavOpen ? 'hidden' : ''}`} onClick={openNav}>
                <FaBars size="25px" />
            </div>

            <div className={` ${isNavOpen ? 'left-0' : '-left-72'} fixed top-0 bottom-0 -left-72 w-72 bg-white z-50 lg:hidden transition-all`}>

                <div className="flex justify-between w-100 items-center p-4 m-0 h-20 shadow-md">
                    <img src={logo} alt="rosheh-logo" className="h-10" />
                    <div className="nav-close" onClick={closeNav}>
                        <FaXmark size="25px" />
                    </div>
                </div>

                <ul className="flex flex-col gap-y-5 pr-4 w-100 text-end mt-4">
                    <a href="#" className="mx-2 font-bold text-xl hover:text-green-rosheh pb-2 border-b-2 border-gray">
                      برندها
                    </a>
                    <a href="#" className="mx-2 font-bold text-xl hover:text-green-rosheh pb-2 border-b-2 border-gray">
                      پوست
                    </a>
                    <a href="#" className="mx-2 font-bold text-xl hover:text-green-rosheh pb-2 border-b-2 border-gray">
                      مو
                    </a>
                    <a href="#" className="mx-2 font-bold text-xl hover:text-green-rosheh pb-2 border-b-2 border-gray">
                      آرایش
                    </a>
                    <a href="#" className="mx-2 font-bold text-xl hover:text-green-rosheh pb-2 border-b-2 border-gray">
                      عطر
                    </a>      
                    <a href="#" className="text-green-rosheh mx-2 font-bold text-xl">
                        <p className="inline-block rotate-180 "> برعکس</p>
                         صفحه
                    </a>
                </ul>
            </div>
        </div>

        <div className={`overlay ${isNavOpen|| isOpen ? 'overlay--visible' : ''}`} onClick={closeOnOverlayClick}></div>
        
    </header>
    </div>
  )
}

