import { Link } from "react-router-dom";

type ProductBoxProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

const ProductBox = ({ name, price, imgUrl, id }:ProductBoxProps) => {

  return (
    <div className="p-4 relative">
      <Link to={`/product/${id}`}>
        <div className="w-70">
          <img src={imgUrl} alt="image product" className="w-full max-h-56" />
        </div>
        <div className="mt-2">
          <div className="text-gray-800 text-base text-center">
            <p>{name}</p>
          </div>
          <div className="text-green-rosheh text-base text-center flex justify-center gap-1">
            <span> تومان </span>
            <p> {price.toLocaleString()} </p> 
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductBox;


