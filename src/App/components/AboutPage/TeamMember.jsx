import React from 'react'
import Button from '../SmallComponents/Button'
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const TeamMember = () => {
  return (
    <div className='w-full padding'>
      <div className='w-full md:flex md:justify-between'>
        <div> 
          <p className='font-sans font-light text-2xl text-pink-400'>OUR TEAM MEMBER</p>
          <p className='font-serif font-thin text-5xl'>Flower Experts</p>
        </div>
        <Button content="MEET OUR TEAM" outLineBtn={true}/>
      </div>
      <div className='w-full flex-none md:flex md:flex-wrap lg:justify-between md:justify-around my-10 '>
        <div className='w-2/4 md:w-[18rem] lg:w-1/5 my-4 flex flex-col items-center shadow-xl rounded-md p-4 mx-auto'>
          <div className='w-full h-[20rem] md:h-[20rem] bg-cover bg-center rounded-md shadow-lg' style={{backgroundImage: 'url(https://preview.colorlib.com/theme/florist/img/team/team-1.jpg.webp)'}}></div>
          <div className='font-serif text-2xl my-1'>Richard Osborne</div>
          <div className='font-mono text-xl text-pink-400 my-1'>Manager</div>
          <div className='flex my-1'>
            <FaFacebookF className='mx-2 text-xl cursor-pointer'/>
            <FaInstagram className='mx-2 text-xl cursor-pointer'/>
            <FaLinkedin className='mx-2 text-xl cursor-pointer'/>
          </div>
        </div>
        <div className='w-2/4 md:w-[18rem] lg:w-1/5 my-4 flex flex-col items-center shadow-xl rounded-md p-4 mx-auto'>
          <div className='w-full h-[20rem] md:h-[20rem] bg-cover bg-center rounded-md shadow-lg' style={{backgroundImage: 'url(https://preview.colorlib.com/theme/florist/img/team/team-2.jpg.webp)'}}></div>
          <div className='font-serif text-2xl my-1'>Richard Osborne</div>
          <div className='font-mono text-xl text-pink-400 my-1'>Manager</div>
          <div className='flex my-1'>
            <FaFacebookF className='mx-2 text-xl cursor-pointer'/>
            <FaInstagram className='mx-2 text-xl cursor-pointer'/>
            <FaLinkedin className='mx-2 text-xl cursor-pointer'/>
          </div>
        </div>
        <div className='w-2/4 md:w-[18rem] lg:w-1/5 my-4 flex flex-col items-center shadow-xl rounded-md p-4 mx-auto'>
          <div className='w-full h-[20rem] md:h-[20rem] bg-cover bg-center rounded-md shadow-lg' style={{backgroundImage: 'url(https://preview.colorlib.com/theme/florist/img/team/team-3.jpg.webp)'}}></div>
          <div className='font-serif text-2xl my-1'>Richard Osborne</div>
          <div className='font-mono text-xl text-pink-400 my-1'>Manager</div>
          <div className='flex my-1'>
            <FaFacebookF className='mx-2 text-xl cursor-pointer'/>
            <FaInstagram className='mx-2 text-xl cursor-pointer'/>
            <FaLinkedin className='mx-2 text-xl cursor-pointer'/>
          </div>
        </div>
        <div className='w-2/4 md:w-[18rem] lg:w-1/5 my-4 flex flex-col items-center shadow-xl rounded-md p-4 mx-auto'>
          <div className='w-full h-[20rem] md:h-[20rem] bg-cover bg-center rounded-md shadow-lg' style={{backgroundImage: 'url(https://preview.colorlib.com/theme/florist/img/team/team-4.jpg.webp)'}}></div>
          <div className='font-serif text-2xl my-1'>Richard Osborne</div>
          <div className='font-mono text-xl text-pink-400 my-1'>Manager</div>
          <div className='flex my-1'>
            <FaFacebookF className='mx-2 text-xl cursor-pointer'/>
            <FaInstagram className='mx-2 text-xl cursor-pointer'/>
            <FaLinkedin className='mx-2 text-xl cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember