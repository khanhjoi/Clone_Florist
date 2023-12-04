import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const Products = ({ title, showNav }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeNav, setActiveNav] = useState(1);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    setProduct([{ h1: "ok" }, { h1: "ok" }, {}, {}]);
  }, []);

  const handledSelectTab = (tab) => {
    setActiveTab(tab);
  };

  const handledSelectNav = (nav) => {
    setActiveNav(nav);
  };

  return (
    <div className="padding w-full my-10">
      <div className="w-full text-center">
        <h1 className="text-xl font-medium text-pink-400">OUR FLOWER</h1>
        <h1 className="text-5xl font-serif my-4">{title}</h1>
      </div>
      {/* filter */}
      <div className="w-full text-center flex flex-wrap justify-center my-6">
        <div
          className={`px-4 transition-all duration-150 py-2 w-auto mx-4 text-md cursor-pointer  ${
            activeTab === "All" ? "bg-pink-200 rounded-md text-slate-800" : ""
          }`}
          onClick={() => {
            handledSelectTab("All");
          }}
        >
          All
        </div>
        <div
          className={`px-4 transition-all duration-150 py-2 w-auto mx-4 text-md cursor-pointer ${
            activeTab === "Bouquet"
              ? "bg-pink-200 rounded-md text-slate-800"
              : ""
          }`}
          onClick={() => {
            handledSelectTab("Bouquet");
          }}
        >
          Bouquet
        </div>
        <div
          className={`px-4 transition-all duration-150 py-2 w-auto mx-4 text-md cursor-pointer ${
            activeTab === "Flower box"
              ? "bg-pink-200 rounded-md text-slate-800"
              : ""
          }`}
          onClick={() => {
            handledSelectTab("Flower box");
          }}
        >
          Flower box
        </div>
        <div
          className={`px-4 transition-all duration-150 py-2 w-auto mx-4 text-md cursor-pointer ${
            activeTab === "Flower shelf"
              ? "bg-pink-200 rounded-md text-slate-800"
              : ""
          }`}
          onClick={() => {
            handledSelectTab("Flower shelf");
          }}
        >
          Flower shelf
        </div>
        <div
          className={`px-4 transition-all duration-150 py-2 w-auto mx-4 text-md cursor-pointer ${
            activeTab === "Basket of flower"
              ? "bg-pink-200 rounded-md text-slate-800"
              : ""
          }`}
          onClick={() => {
            handledSelectTab("Basket of flower");
          }}
        >
          Basket of flower
        </div>
      </div>
      {/* List products */}
      <div className="w-full flex flex-wrap justify-center my-6">
        <div className="relative w-60 h-96 m-4 group cursor-pointer">
          <div className="relative overflow-hidden shadow-lg rounded-sm">
            <img
              className="h-auto w-auto shadow-md rounded-sm"
              src="https://preview.colorlib.com/theme/florist/img/product/product-1.jpg.webp"
            />
            <div className="absolute top-2 left-2 font-serif text-sm bg-cyan-950 text-slate-50 px-2 py-1 shadow-md rounded-sm">NEW</div>
            <div className="transition-all duration-300 opacity-50 absolute flex -bottom-9 w-full justify-center group-hover:bottom-4 group-hover:opacity-100">
              <div className="p-2 bg-slate-100 mx-2 rounded-full shadow-md hover:bg-pink-300 hover:text-slate-100">
                <IoSearch className="text-xl" />
              </div>
              <div className="p-2 bg-slate-100 mx-2 rounded-full shadow-md hover:bg-pink-300 hover:text-slate-100">
                <FaCartPlus className="text-xl" />
              </div>
              <div className="p-2 bg-slate-100 mx-2 rounded-full shadow-md hover:bg-pink-300 hover:text-slate-100">
                <CiHeart className="text-xl" />
              </div>
            </div>
          </div>
          <h1 className="text-center text-xl font-serif font-medium my-2">
            Fly me to the moon
          </h1>
          <div className="relative overflow-hidden h-10 ">
            <div className="absolute left-0 group-hover:-left-72 w-full text-center font-bold transition-all duration-300">
              $ 23.15
            </div>
            <div className="absolute -bottom-10 group-hover:bottom-3 w-full text-center font-bold text-pink-400 transition-all duration-200 ">
              Add cart
            </div>
          </div>
        </div>

        <div className="relative w-60 h-96 m-4 group cursor-pointer">
          <div className="relative overflow-hidden shadow-lg rounded-sm">
            <img
              className="h-auto w-auto shadow-md rounded-sm"
              src="https://preview.colorlib.com/theme/florist/img/product/product-1.jpg.webp"
            />
            <div className="transition-all duration-300 opacity-50 absolute flex -bottom-9 w-full justify-center group-hover:bottom-4 group-hover:opacity-100">
              <div className="p-2 bg-slate-100 mx-2 rounded-full shadow-md hover:bg-pink-300 hover:text-slate-100">
                <IoSearch className="text-xl" />
              </div>
              <div className="p-2 bg-slate-100 mx-2 rounded-full shadow-md hover:bg-pink-300 hover:text-slate-100">
                <FaCartPlus className="text-xl" />
              </div>
              <div className="p-2 bg-slate-100 mx-2 rounded-full shadow-md hover:bg-pink-300 hover:text-slate-100">
                <CiHeart className="text-xl" />
              </div>
            </div>
          </div>
          <h1 className="text-center text-xl font-serif font-medium my-2 ">
            Fly me to the moon
          </h1>
          <div className="relative overflow-hidden h-10 ">
            <div className="absolute left-0 group-hover:-left-72 w-full text-center font-bold transition-all duration-300">
              $ 23.15
            </div>
            <div className="absolute -bottom-10 group-hover:bottom-3 w-full text-center font-bold text-pink-400 transition-all duration-200 ">
              Add cart
            </div>
          </div>
        </div>
      </div>
      {/* pagination */}
      {showNav ? (
        <div className="w-full flex justify-center items-center my-6 ">
          <div className="p-3 mx-2 cursor-pointer hover:bg-pink-100 hover: opacity-60 rounded-md">
            <MdNavigateBefore />
          </div>
          {products.length >= 0 &&
            products.map((product, index) => (
              <div
                className={`p-3 mx-2 cursor-pointer 
              transition-all duration-200
              hover:bg-pink-100 hover: opacity-60 rounded-md
              ${activeNav === index + 1 ? "border-t-2 border-pink-400" : ""}`}
                onClick={() => {
                  handledSelectNav(index + 1);
                }}
              >
                <p className="leading-4 px-1">{index + 1}</p>
              </div>
            ))}
          <div className="p-3 mx-2 cursor-pointer hover:bg-pink-100 hover: opacity-60 rounded-md">
            <MdNavigateNext />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center my-6 ">
          <p className="cursor-pointer text-xl font-normal border-b-2 border-black">
            VIEW ALL PRODUCTS
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
