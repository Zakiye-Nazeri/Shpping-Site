import hair from '../roshePics/category/hair.jpeg'
import makeup from '../roshePics/category/makeup.jpg'
import skin from '../roshePics/category/skin.jpg'
import reverse from '../roshePics/category/reverse.jpg'
import perfume from '../roshePics/category/perfume.jpg'

const Categories = () => {
  const categories = [
    {name:"برعکس", image:reverse},
    {name:"عطر", image:perfume},
    {name:"آرایش", image:makeup},
    {name:"مو", image:skin},
    {name:"پوست", image:hair},
]
  return (
    <div className="container max-w-[80%]  flex md:flex-row flex-col justify-center gap-4 pt-8 py-20">
      {categories.map((categorie) => (
        <div className="overflow-hidden h-64 md:h-[450px] md:w-64 relative">
          <img
            src={categorie.image}
            alt=""
            className="w-full h-full object-cover duration-500 brightness-75 hover:scale-[1.1] hover:brightness-50 "
          />
          <h1 className="text-white font-semibold text-xl lg:text-5xl bottom-5 absolute right-1/3 left-1/2 lg:right-1/2 lg:left-1/3 transform -translate-x-1/2">{categorie.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Categories;
