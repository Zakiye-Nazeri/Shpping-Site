import { useParams } from "react-router-dom";
import products from "../data/data.json"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";

const Product = () => {
  const { id } = useParams<{id:string}>();
  const parsedId: number = parseInt(id, 10)
  console.log(parsedId)
  const selectedProduct:any = products.find((product) => product.id === parsedId);

  const {
    plusHandler,
    minusHandler,
    moveToCart,
    numberCart,
  } = useShoppingCart()

  return (
    <>
      <div className="rtl container mx-auto max-w-[80%] flex flex-col md:flex-row">
        <div className="w-[100%] md:w-1/2">
          <img src={selectedProduct.imgUrl} className="w-[600px] h-[400px] md:h-[600px] mt-1" />
        </div>
        <div className="w-[100%] md:w-1/2 h-[calc(100vh-170px)] flex justify-between xs:mt-0 md:mt-[60px]">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">{selectedProduct.name}</h3>
            <h3 className="xs:text-xs sm:text-lg font-semibold mb-2">{selectedProduct.englishTitle}</h3>
            <p>
              <p className="text-sm font-semibold text-green-rosheh mb-4">
                <span className="text-xl font-semibold text-green-rosheh mb-4">{selectedProduct.price.toLocaleString()}</span> تومان               
              </p>
            </p>

              <div className="flex">
                <input
                  type="button"
                  className="w-[40px] border border-[#e4e4e4] text-2xl rounded-tr-3xl rounded-br-3xl"
                  value="+"
                  onClick={plusHandler}
                ></input>
                <input className="text-center w-[40px] border border-[#e4e4e4] text-md" value={numberCart}></input>
                <input
                  type="button"
                  className="w-[40px] border border-[#e4e4e4] text-2xl"
                  value="-"
                  onClick={minusHandler}
                ></input>
                <button
                  className="bg-[#69765a] p-1.5 text-white w-[140px] text-xl border rounded-tl-3xl rounded-bl-3xl"
                  onClick={() =>moveToCart(parsedId) }
                >
                  خرید
                </button>
              </div>

              <div className="flex gap-12 w-80">
                  <p className="flex justify-center items-center mt-4">
                    <BiShuffle></BiShuffle>
                    <span className="-mt-1">مقایسه</span>
                  </p>
                  <p className="flex justify-center items-center mt-4">
                    <AiOutlineHeart></AiOutlineHeart>
                    <span className="-mt-1">لایک</span>
                  </p>
                  <p className="flex justify-center items-center mt-4">
                    <AiOutlineCopy></AiOutlineCopy>
                    <span className="-mt-1">کپی</span>
                  </p>
              </div>

            <div className="my-3 border"></div>
            <div>
              <ul className="flex-col text-sm text-gray-800">
                <li> شیک و ترکیبی از کلاسیک و مدرنیته</li>
                <li>با دوام و همیشگی</li>
                <li>سازگاری بالا</li>
              </ul>
              <div className="my-3 border"></div>
              <h3 className="text-bold">کد کالا : {selectedProduct.id}</h3>
            </div>
          </div>
          <div className="hidden lg:inline-block  m-1">
            <img src={selectedProduct.logo}  className="ml-2 w-36 border hover:shadow-lg cursor-pointer" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;