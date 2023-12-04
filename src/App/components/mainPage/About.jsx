import React from "react";
import { IoIosPlay } from "react-icons/io";

import Button from "../button/Button";
const About = () => {
  return (
    <div className="padding mt-10 w-full">
      <div className=" md:flex w-full md:justify-around md:items-center ">
        <div className="w-full h-32 md:w-1/4 mt-10">
          <h1 className="text-pink-400 text-xl font-sans font-medium ">
            ABOUT US
          </h1>
          <h2 className="font-serif text-4xl">
            We provide all kinds of fresh flower services
          </h2>
        </div>
        <div className="h-44 md:w-3/5 font-thin text-lg">
          For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
          growing flowers that can be dried and incorporated into late fall and
          winter floral arrangements has been a game-changer. During her growing
          season, this farmer-florist relies on a vivid palette of annuals,
          perennials and ornamental grasses to supply her studio.
        </div>
      </div>
      <div className="mt-10 w-full md:flex md:justify-between md:mt-32 lg:mt-14">
        <div
          style={{
            backgroundImage: `url(https://preview.colorlib.com/theme/florist/img/about/about-video.jpg.webp)`,
          }}
          className="h-[30rem] z-10 group w-full  md:w-3/5 bg-cover bg-center no-bg-repeat rounded-lg flex shadow-lg justify-center items-end cursor-pointer group-hover:shadow-2xl"
        >
          <IoIosPlay className="text-pink-700 bg-slate-300 text-5xl mb-44 rounded-3xl shadow-2xl group-hover:opacity-80 transition-all duration-150" />
        </div>
        <div className="w-full -mt-8  md:my-4 md:-mt-8 md:-ml-14 md:w-3/5 lg:w-4/5 md:mx-4 ">
          <div className="w-full h-full px-8 py-6 sm:px-10 sm:py-10 md:px-24 md:py-20 shadow-2xl ">
            <h3 className="text-xl font-medium text-pink-400 mt-4">
              SLOW FLOWERS’ FLORAL INSIGHTS
            </h3>
            <h1 className="text-3xl font-serif mt-4">
              Dried flowers are having a renaissance
            </h1>
            <p className="mt-4 font-thin text-xl">
              This awareness has been stimulated by sustainable sourcing
              practices and the desire on the part of North American flower
              growers to “extend the season” beyond the last frost.
            </p>
            <Button  content={"CONTACT US"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
