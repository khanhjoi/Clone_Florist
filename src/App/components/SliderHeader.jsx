import React from 'react'
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CiHeart, CiShoppingCart  } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import image from '../../assets/logo.png.webp'

const SliderHeader = ({show, setIsShow}) => {
  return (
    <>
      <div className={`transition-all duration-500 fixed bg-white top-0 bottom-0 md:w-2/6 sm:w-3/6 w-4/6 z-10 shadow-md z-20
            ${show ?  "left-0": "-left-full"}
            ${show ?  "opacity-100": "opacity-0"}
      `}>
              <IoExitOutline className='absolute top-10 right-8 text-black'
                  onClick={() => {setIsShow(!show)}}
                  size={30}
                />
              <Link to="/" className='cursor-pointer absolute top-8 left-2'>
                <img src={image} placeholder='Logo'/>
              </Link>

              <div className='absolute top-20 left-2 w-4/5 h-3/4  flex-col'>
                <div className='flex w-full items-center justify-center mt-8'> 
                  <div className='transition duration-300 p-2 cursor-pointer hover:text-pink-400'>
                    <FaSearch className='text-lg'/>
                  </div>
                  <div className='flex p-2'>
                    <CiHeart className='transition duration-300 text-2xl cursor-pointer hover:text-pink-400'/>
                    <p>(05)</p>
                  </div>
                  <div className='flex p-2'>
                    <CiShoppingCart className='transition duration-300 text-2xl cursor-pointer hover:text-pink-400'/>
                    <p>(05)</p>
                  </div>
                </div>

                <Link to="/" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400 block my-1 hover:ml-6'>HOME</Link>
                <Link to="/about" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400 block my-1 hover:ml-6'>ABOUT</Link>
                <Link to="/services" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400 block my-1 hover:ml-6'>SERVICES</Link>
                <Link to="/shop" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400 block my-1 hover:ml-6'>SHOP</Link>
                <Link to="/blog" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400 block my-1 hover:ml-6'>BLOG</Link>
                <Link to="/contact" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400 block my-1 hover:ml-6'>CONTACT</Link>
              </div>
      </div>
      <div className={`transition-all duration-500 fixed bg-black opacity-80 top-0 left-0 right-0 bottom-0 z-10
              ${show ?  "opacity-90": "opacity-0"}
              ${show ? "block" : "hidden"}
            `}
            onClick={() => {setIsShow(!show)}}>
      </div>
    </>
  )
}

export default SliderHeader;