import React from "react";
import { IoIosPlay } from "react-icons/io";
const About = () => {
  return (
    <div className="padding mt-10 w-full">
      <div className=" md:flex w-full md:justify-around md:items-center ">
        <div className="w-full h-32 md:w-1/4 mt-10">
          <h1 className="text-pink-400 text-xl font-sans font-medium ">ABOUT US</h1>
          <h2 className="font-serif text-4xl ">We provide all kinds of fresh flower services</h2>
        </div>
        <div className="h-48 md:w-3/5 font-thin text-lg">
          For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
          growing flowers that can be dried and incorporated into late fall and
          winter floral arrangements has been a game-changer. During her growing
          season, this farmer-florist relies on a vivid palette of annuals,
          perennials and ornamental grasses to supply her studio.
        </div>
      </div>
      <div className="mt-10 ">
        <div
          style={{backgroundImage: `url(https://preview.colorlib.com/theme/florist/img/about/about-video.jpg.webp)`}}
          className="h-[30rem]  group w-full bg-cover bg-center no-bg-repeat rounded-lg flex shadow-lg justify-center items-end cursor-pointer group-hover:shadow-2xl"
        >
          <IoIosPlay className="text-pink-700 bg-slate-300 text-5xl mb-44 rounded-3xl shadow-2xl group-hover:opacity-80 transition-all duration-150" />
        </div>
      </div>
    </div>
  );
};

export default About;
