import React from 'react'
import Img1 from "../../assets/topRate/top1.jpg"
import Img2 from "../../assets/topRate/top2.jpg"
import Img3 from "../../assets/topRate/top3.jpg"  
import Img4 from "../../assets/topRate/top4.jpg"  
import { FaStar } from "react-icons/fa6";
const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Casual Wear",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    },
    {
        id:2,
        img:Img2,   
        title:"Printed shirt",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    },
    {
        id:4,
        img:Img4,
        title:"Accessories",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    },
    {
        id:3,
        img:Img3,
        title:"Women shirt",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    },
]

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container p-0">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Seller Items
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div data-aos="zoom-in" className="p-10 sm:p-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
              {/* image section */}
              <div className="h-[100px]">
                <img src={data.img} alt="" className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"/>
              </div>
              {/* info section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar  />
                  <FaStar  />
                  <FaStar  />
                  <FaStar  />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;