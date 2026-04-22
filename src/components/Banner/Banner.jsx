import React from 'react'
import Image from "../../assets/banner/banner.png"

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-transparent dark:text-white relative z-10 mt-20'>
        <div className='container dark:bg-gray-800 bg-primary/40 rounded-xl shadow-lg'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                {/* image section */}
                <div>
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner