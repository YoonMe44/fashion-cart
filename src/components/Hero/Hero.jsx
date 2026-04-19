import React from 'react'
import Image1 from '../../assets/hero/sale.png'
import Image2 from '../../assets/hero/women.png'
import Image3 from '../../assets/hero/shopping.png'
import Slider from "react-slick";

const SlickSlider = Slider.default || Slider;
const ImageList = [
    {
        id: 1,
        image: Image1,
        title: "Big Sale",
        description: "Up to 50% off on selected items. Don't miss out on our biggest sale of the season!"        
    },
    {
        id: 2,
        image: Image2,
        title: "Women's Collection",
        description: "Discover our latest collection of stylish women's wear. Perfect for any occasion!"        
    },
    {
        id: 3,
        image: Image3,
        title: "Shop Now",
        description: "Explore our wide range of products and find everything you need at unbeatable prices!"        
    }
]
const Hero = ({handleOrderPopup}) => {
    var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  console.log(SlickSlider);
  return (
    
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* {background} */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
        </div>
         <div className='h-[720px] w-[720px] border-[3px] border-gray-600 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
        </div>
        {/* hero section */}
        <div className='container pb-8 sm:pb-0'>
            <SlickSlider {...settings}>
                {ImageList.map((data) => (
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            {/* text content sction */}
                            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                    {data.title}
                                </h1>
                                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-sm'>
                                    {data.description}
                                </p>
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                                    <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                            {/* image section */}
                            <div className='order-1 sm:order-2'>
                                <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                                    <img src={data.image} alt="" className='w-[400px] h-[400px] sm:h-[490px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </SlickSlider>
          
            
        </div>
    </div>
    
  )
}

export default Hero