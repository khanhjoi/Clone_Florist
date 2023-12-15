import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/logo.png.webp";

import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Input from "../SmallComponents/Input";
import Button from "../SmallComponents/Button";

const Footer = () => {
  return (
    <div className="padding w-full">
      <div className="mt-10 md:flex w-full justify-around">
        <Link to="/" className="p-3 cursor-pointer mt-5">
          <img src={image} placeholder="Logo" />
        </Link>
        <div className="mt-5 w-full md:w-2/5 font-sans text-md font-light">
          The floristry business has a significant market in the corporate and
          social event world, as flowers
        </div>
        <div className="mt-5 flex">
          <a href="facebook.com" className="mx-2 text-xl cursor-pointer">
            <FaFacebookF />
          </a>
          <a href="facebook.com" className="mx-2 text-xl cursor-pointer">
            <FaInstagram />
          </a>
          <a href="facebook.com" className="mx-2 text-xl cursor-pointer">
            <FaLinkedin />
          </a>
          <a href="facebook.com" className="mx-2 text-xl cursor-pointer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="w-full md:flex md:justify-around lg:justify-between md:flex-wrap ">
        <div
          style={{
            backgroundImage:
              "url(https://preview.colorlib.com/theme/florist/img/instagram/insta-1.jpg.webp)",
          }}
          className="group my-10 mx-auto md:mx-4 w-1/2 h-[22rem] md:w-[26rem] lg:w-1/5 lg:h-[24rem] bg-cover rounded-md shadow-lg relative"
        >
          <div className="transition-all duration-200 absolute left-1/2 -translate-x-1/2 w-0 h-0 top-32 bg-white rounded-md shadow-md text-center group-hover:w-5/6 group-hover:h-32 cursor-pointer overflow-hidden">
            <FaInstagram className="transition-all duration-500 opacity-0 text-2xl text-pink-400 cursor-pointer mx-auto mt-8 hidden group-hover:block group-hover:opacity-100" />
            <div className="transition-all duration-500 opacity-0 font-serif hidden group-hover:block group-hover:opacity-100">
              Flow Us
            </div>
            <div className="transition-all duration-500 opacity-0 font-serif underline cursor-pointer hidden group-hover:block group-hover:opacity-100">
              @Example
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://preview.colorlib.com/theme/florist/img/instagram/insta-2.jpg.webp)",
          }}
          className="group my-10 mx-auto md:mx-4 w-1/2 h-[22rem] md:w-[26rem] lg:w-1/5 lg:h-[24rem] bg-cover rounded-md shadow-lg relative"
        >
          <div className="transition-all duration-200 absolute left-1/2 -translate-x-1/2 w-0 h-0 top-32 bg-white rounded-md shadow-md text-center group-hover:w-5/6 group-hover:h-32 cursor-pointer overflow-hidden">
            <FaInstagram className="transition-all duration-500 opacity-0 text-2xl text-pink-400 cursor-pointer mx-auto mt-8 hidden group-hover:block group-hover:opacity-100" />
            <div className="transition-all duration-500 opacity-0 font-serif hidden group-hover:block group-hover:opacity-100">
              Flow Us
            </div>
            <div className="transition-all duration-500 opacity-0 font-serif underline cursor-pointer hidden group-hover:block group-hover:opacity-100">
              @Example
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://preview.colorlib.com/theme/florist/img/instagram/insta-3.jpg.webp)",
          }}
          className="group my-10 mx-auto md:mx-4 w-1/2 h-[22rem] md:w-[26rem] lg:w-1/5 lg:h-[24rem] bg-cover rounded-md shadow-lg relative"
        >
          <div className="transition-all duration-200 absolute left-1/2 -translate-x-1/2 w-0 h-0 top-32 bg-white rounded-md shadow-md text-center group-hover:w-5/6 group-hover:h-32 cursor-pointer overflow-hidden">
            <FaInstagram className="transition-all duration-500 opacity-0 text-2xl text-pink-400 cursor-pointer mx-auto mt-8 hidden group-hover:block group-hover:opacity-100" />
            <div className="transition-all duration-500 opacity-0 font-serif hidden group-hover:block group-hover:opacity-100">
              Flow Us
            </div>
            <div className="transition-all duration-500 opacity-0 font-serif underline cursor-pointer hidden group-hover:block group-hover:opacity-100">
              @Example
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://preview.colorlib.com/theme/florist/img/instagram/insta-4.jpg.webp)",
          }}
          className="group my-10 mx-auto md:mx-4 w-1/2 h-[22rem] md:w-[26rem] lg:w-1/5 lg:h-[24rem] bg-cover rounded-md shadow-lg relative"
        >
          <div className="transition-all duration-200 absolute left-1/2 -translate-x-1/2 w-0 h-0 top-32 bg-white rounded-md shadow-md text-center group-hover:w-5/6 group-hover:h-32 cursor-pointer overflow-hidden">
            <FaInstagram className="transition-all duration-500 opacity-0 text-2xl text-pink-400 cursor-pointer mx-auto mt-8 hidden group-hover:block group-hover:opacity-100" />
            <div className="transition-all duration-500 opacity-0 font-serif hidden group-hover:block group-hover:opacity-100">
              Flow Us
            </div>
            <div className="transition-all duration-500 opacity-0 font-serif underline cursor-pointer hidden group-hover:block group-hover:opacity-100">
              @Example
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 md:flex md:justify-between border-y-2">
        <div className="w-full border-b-2 py-2 md:px-2 md:py-6 md:border-b-0 md:border-r-2 md:w-2/4 ">
          <div className="font-serif text-2xl">Get in touch</div>
          <div className="font-thin">
            69 North Cleveland Street, Memphis,USA. (123) 8111 9210 - (012) 1111
            6868 Florisr@supportthem.com
          </div>
        </div>
        <div className="w-full md:w-2/4 md:px-2 md:py-6 py-2 md:ml-4">
          <div className="font-serif text-2xl">New Letter</div>
          <div className="font-thin">
            Subcribe to our newsletter to get more free tips. No Spam, Promise.
          </div>
          <div className="flex">
            <Input placeholder="Email" type="text" style="pl-4 mt-4 w-56 rounded-xl focus:bg-slate-100 focus:border-pink-300 mr-2"/>
            <Button content="Submit" style="inline-block"/>
          </div>
        </div>
      </div>
      <div className="w-full text-center my-2">
        Copyright ©2023 All rights reserved | This template is made with by Colorlib
      </div>
    </div>
  );
};

export default Footer;
