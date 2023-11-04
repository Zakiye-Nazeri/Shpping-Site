import { createContext, ReactNode, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  moveToCart: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  numberCart: number
  cartItems: CartItem[]
  plusHandler: () => void
  minusHandler: () => void
  isOpen: boolean
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [numberCart, setNumberCart] = useState(0)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function plusHandler() {
    setNumberCart((prevNumber) => prevNumber + 1);
  }

  function minusHandler() {
    if (numberCart > 0) {
      setNumberCart((prevNumber) => prevNumber - 1);
    } else {
      setNumberCart(0);
    }
  }

  function moveToCart(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: numberCart }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + numberCart }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        moveToCart,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        plusHandler,
        minusHandler,
        numberCart,
        isOpen
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}