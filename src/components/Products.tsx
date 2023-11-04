import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import products from "../data/data.json"

import ProductBox from "./ProductBox";
import background from "../roshePics/background.png";
import CrossImg from "../roshePics/Cross.png";

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 420,
        settings: {slidesToShow: 1},
      },
      {
        breakpoint: 640,
        settings: {slidesToShow: 2},

      },
      {
        breakpoint: 1024,
        settings: {slidesToShow: 3},
      }
    ],
  };

  return (
    <>
      <div
        className="bg-contain bg-no-repeat bg-center h-[380px]"
        style={{
          backgroundImage: `url("${background}")`,
          backgroundSize: "cover",
        }}
      >

        <div className="w-[90%] container mx-auto px-4 mt-0 pt-[1.6%]">
          <Slider {...settings} className="p-8 ">
            {products.map((product) => (
              <ProductBox
                key={product.id}
                {...product}
              />
            ))}
          </Slider>
        </div>
      </div>

      <img src={CrossImg} alt="add-img" className="hidden lg:inline-block h-[360px] w-full" />
    </>
  );
};

export default Products;
