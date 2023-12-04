import React from 'react'
import Button from '../button/Button'
const Contact = () => {
  return (
    <div className='padding w-full h-[32rem] my-10 bg-cover bg-center' style={{backgroundImage : `url(https://preview.colorlib.com/theme/florist/img/call-bg.jpg.webp)`}}>
      <div className='h-full w-full  md:w-1/3'>
        <p className='pt-32 font-serif text-2xl text-slate-100'>CUSTOM FLOWER</p>
        <p className='my-4 font-serif  text-4xl'>Let our flowers make your party more perfect.</p>
        <div>
          <Button content={"ORDER NOW"}/>
          <Button content={"CONTACT US"} whiteBtn={true}/>
        </div>
      </div>
    </div>
  )
}

export default Contact