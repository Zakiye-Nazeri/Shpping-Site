import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/data.json"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <div className="flex justify-between items-center">
      <button
          className="text-lg"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
      </button>

      <div className="flex-col text-right">
        <div className="text-sm ">
          {item.name}
        </div>

        <div className="text-gray-500 text-xs text-right">
          
          {quantity > 1 && (
            <span className="text-gray-500"> {quantity} x</span>
          )}
          {" "}
          {item.price.toLocaleString()}

        </div>
      </div>

      <img
        src={item.imgUrl}
        alt={item.name}
        className="w-20 h-20"
      />
    </div>
  )
}