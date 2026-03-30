import React from 'react'
import Logo from "../../assets/logo.png"
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

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
                <div className='flex justify-between items-center gap-4'>
                    {/* search bar*/}
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='search...' 
                        className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-200 px-2 py-1 focus:outline-none focus:border-1 focus:border-red-800'/>
                        <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                    {/* icons */}
                    <button onClick={() => alert("Ordering is not available yet")} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                        <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                        <FaCartShopping className='text-xl text-white drop-shadow-sm'/>
                    </button>
                    {/* Dark Mode Button */}
                    <div>
                        <DarkMode/>
                    </div>
                </div>
            </div>
        </div>
        {/* 2nd Nav */}
        <div></div>
    </div>
  )
}

export default Navbar