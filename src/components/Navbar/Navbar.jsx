import React from 'react'
import Logo from "../../assets/logo.png"
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* 1st Nav */}
        <div className="bg-primary/40 py-2">
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <div>
                            <img src={Logo} alt="logo" className='w-[4rem]'/>
                        </div>
                        <div className='block border-l-2 border-gray-200 pl-2'>
                            <p className='text-[40px]'>céva</p>
                            <p className='font-thin text-[12px]'>SHOPPING STORE</p>
                        </div>
                        
                    </a>
                </div>
                {/* search bar and cart */}
                <div>
                    <div className='group relative hidden sm:block'>
                        <input type="text" placeholder='search...' 
                        className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-200 px-2 py-1 focus:outline-none focus:border-1 focus:border-red-800'/>
                        <IoMdSearch className='text-gray-500 group-hover:text-primary'/>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        {/* 2nd Nav */}
        <div></div>
    </div>
  )
}

export default Navbar