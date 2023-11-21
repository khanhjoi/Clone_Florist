import React from 'react';
import { useState } from 'react';
import image from '../../assets/logo.png.webp'
import { Outlet, Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { CiHeart, CiShoppingCart  } from "react-icons/ci";
import { IoMenu, IoExitOutline } from "react-icons/io5";

const Header = () => {

  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  return (
    <header className='padding flex justify-between items-center mt-6 mb-6'>
      <Link to="/" className='p-3 cursor-pointer'>
        <img src={image} placeholder='Logo'/>
      </Link>
      <div className='lg:block lg:w-4/6 md:hidden hidden'>
        <nav className='flex items-center justify-end'>
          <Link to="/" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400'>HOME</Link>
          <Link to="/about" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400'>ABOUT</Link>
          <Link to="/services" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400'>SERVICES</Link>
          <Link to="/shop" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400'>SHOP</Link>
          <Link to="/blog" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400'>BLOG</Link>
          <Link to="/contact" className='transition duration-300 text-lg font-mono mx-2 hover:text-pink-400'>CONTACT</Link>

          <div className='flex items-center'>
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
              <p className='ml-1'>1232$</p>
            </div>
          </div>
        </nav>
      </div>
      <div className='lg:hidden p-2 cursor-pointer relative'>
        <IoMenu className='text-3xl' onClick={() => {setIsOpenSubMenu(!isOpenSubMenu)}}/>
        {isOpenSubMenu ? <>
          <div className='fixed bg-black opacity-90 top-0 left-0 right-0 bottom-0' onClick={() => {setIsOpenSubMenu(!isOpenSubMenu)}}></div>
          <div className='fixed bg-white left-0 top-0 bottom-0 md:w-2/6 sm:w-3/6 w-4/6'>
            <IoExitOutline className='absolute top-10 right-8 text-black'
                onClick={() => {setIsOpenSubMenu(!isOpenSubMenu)}}
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
        </> : <></>}
      </div>
    </header>
  )
}

export default Header