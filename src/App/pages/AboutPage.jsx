import React from 'react'
import Benefits from '../components/mainPage/Benefits'
import About from '../components/mainPage/About'
import { Link } from 'react-router-dom'
import TeamMember from '../components/AboutPage/TeamMember'
import BreadCrumb from '../components/SmallComponents/BreadCrumb'

const AboutPage = () => {
  return (
    <>
      <BreadCrumb titleBreadCrumb="About us" BreadCrumbLink={["HOME", "ABOUT"]}/>
      <About />
      <Benefits />
      <TeamMember />
    </>
  )
}

export default AboutPage