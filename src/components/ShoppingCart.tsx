import { CartItem } from "./CartItem"
import storeItems from "../data/data.json"

import {FaXmark} from "react-icons/fa6"
import { useShoppingCart } from "../context/ShoppingCartContext"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {

  const { closeCart, cartItems } = useShoppingCart()

  return (
      <div className="relative flex-col mt-0 px-4">
       <div className={` ${isOpen ? 'inline-block' : 'hidden'} fixed top-0 left-0 h-100 w-80 bg-white z-20 transition-all`}>
      
          <div className=" flex items-center justify-between shadow-sm py-4 px-3 mb-1">
            <div className="nav-close" onClick={closeCart}>
              <FaXmark size="25px" />
            </div>
            <p className="text-lg">سبد خرید</p>
          </div>
          <div className="bg-white p-2 rounded-lg">
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        <div className="absolute bottom-0 w-100">
          <hr/>
          <div className="font-bold text-lg flex justify-between px-3 my-1">
            <div className="flex items-center gap-1 text-green-rosheh">
                  <span className="text-sm">تومان</span>
                  <div className="font-bold text-lg">
                    {
                      cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        const totalPrice = total + (item?.price || 0) * cartItem.quantity
                        return totalPrice
                      }, 0).toLocaleString()
                    }
                  </div>
            </div>
            <p className="text-gray-900">:جمع</p>
          </div>
          <button className="text-white bg-green-rosheh py-2 w-72 items-center text-base rounded-3xl my-2 mx-2.5">تکمیل سفارش</button>
        </div>
       </div>
      
      </div>
  )
}

