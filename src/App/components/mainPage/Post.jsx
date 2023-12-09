import React from 'react'
import Button from '../SmallComponents/Button'

const Post = () => {
  return (
    <div className='padding w-full'>
      <div className='w-full sm:flex justify-between my-2 '>
        <div className='w-1/2'>
          <h2 className='font-mono text-2xl text-pink-400'>LATEST POST</h2>
          <h1 className='font-serif text-5xl'>Florist tricks</h1>
        </div>
        <Button content={"VIEW ALL POST"} outLineBtn={true}/>
      </div>
      <div className='w-full flex flex-wrap justify-center lg:flex-nowrap md:just lg:justify-between my-4'>
        <div className='w-[28rem] transition-all duration-100 m-4 lg:w-[w-1/4] lg:mx-2  shadow-md rounded-md cursor-pointer hover:shadow-xl group'>
          <img src='https://preview.colorlib.com/theme/florist/img/blog/blog-1.jpg.webp' className='w-full' />
          <div className='p-10 relative'>
            <div className='absolute -top-4 left-1/2 -translate-x-1/2 group-hover:bg-pink-400 group-hover:text-white rounded-sm bg-black text-white px-2 py-1'>TREND NEWS</div>
            <h1 className='font-sans 2xl text-2xl text-center mb-2'>8 Romantic Gifts to Celebrate Your Wedding Anniversary</h1>
            <h3 className='font-thin 2xl text-md text-center mb-2'>Flowers have a language all their own. In Victorian times, receiving a…</h3>
            <p className='font-thin xl text-md text-center'>MAY 22, 2020</p>
          </div>
        </div>
        <div className='w-[28rem] transition-all duration-100 m-4 lg:w-[w-1/4] lg:mx-2  shadow-md rounded-md cursor-pointer hover:shadow-xl group'>
          <img src='https://preview.colorlib.com/theme/florist/img/blog/blog-2.jpg.webp' className='w-full' />
          <div className='p-10 relative'>
            <div className='absolute -top-4 left-1/2 -translate-x-1/2 group-hover:bg-pink-400 group-hover:text-white rounded-sm bg-black text-white px-2 py-1'>TREND NEWS</div>
            <h1 className='font-sans 2xl text-2xl text-center mb-2'>Red Rose - Flower of love of Greek Mythology</h1>
            <h3 className='font-thin 2xl text-md text-center mb-2'>Flowers have a language all their own. In Victorian times, receiving a…</h3>
            <p className='font-thin xl text-md text-center'>MAY 22, 2020</p>
          </div>
        </div>
        <div className='w-[28rem] transition-all duration-100 m-4 lg:w-[w-1/4] lg:mx-2  shadow-md rounded-md cursor-pointer hover:shadow-xl group'>
          <img src='https://preview.colorlib.com/theme/florist/img/blog/blog-3.jpg.webp' className='w-full' />
          <div className='p-10 relative'>
            <div className='absolute -top-4 left-1/2 -translate-x-1/2 group-hover:bg-pink-400 group-hover:text-white rounded-sm bg-black text-white px-2 py-1'>TREND NEWS</div>
            <h1 className='font-sans 2xl text-2xl text-center mb-2'>Beautiful Mandalas Made From Flowers by Kathy Klein</h1>
            <h3 className='font-thin 2xl text-md text-center mb-2'>Flowers have a language all their own. In Victorian times, receiving a…</h3>
            <p className='font-thin xl text-md text-center'>MAY 22, 2020</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post