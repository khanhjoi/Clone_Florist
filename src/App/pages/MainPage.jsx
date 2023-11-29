import React from 'react'
import SlidePage from '../components/mainPage/SlidePage';
import Benefits from '../components/mainPage/Benefits';
import Categories from '../components/mainPage/Categories';
import About from '../components/mainPage/About';
const MainPage = () => {
  return (
    <>  
      <SlidePage />
      <Benefits />
      <Categories />
      <About />
    </>
  )
}

export default MainPage;