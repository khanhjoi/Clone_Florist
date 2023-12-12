import React from 'react'
import SlidePage from '../components/mainPage/SlidePage';
import Benefits from '../components/mainPage/Benefits';
import Categories from '../components/mainPage/Categories';
import About from '../components/mainPage/About';
import Products from '../components/Products/Products';
import Contact from '../components/mainPage/Contact';
import Post from '../components/mainPage/Post';
import Footer from '../components/mainPage/Footer';

const MainPage = () => {
  return (
    <>  
      <SlidePage />
      <Benefits />
      <Categories />
      <About />
      <Products title={"New Arrivals"}/>
      <Contact />
      <Post />
      
    </>
  )
}

export default MainPage;