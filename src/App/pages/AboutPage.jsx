import React from 'react'
import Benefits from '../components/mainPage/Benefits'
import About from '../components/mainPage/About'
import { Link } from 'react-router-dom'
import TeamMember from '../components/AboutPage/TeamMember'

const AboutPage = () => {
  return (
    <>
      <div className='w-full text-center h-36 bg-cover py-6 ' style={{backgroundImage : 'url(https://preview.colorlib.com/theme/florist/img/breadcrumb-bg.jpg.webp)'}}>
        <p className='font-serif text-4xl'>About us</p>
        <div className='text-lg mt-4'>
          <Link to="/" className='pr-2 font-thin border-r-2 border-cyan-950 active:text-pink-400'>HOME</Link>
          <Link to="/about" className='pl-2 font-thin active:text-pink-400 text-pink-400'>ABOUT</Link>
        </div>
      </div>
      <About />
      <Benefits />
      <TeamMember />
    </>
  )
}

export default AboutPage