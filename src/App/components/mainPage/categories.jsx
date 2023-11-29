import React, { useEffect, useState } from "react";

const Categories = () => {
  let categories = [
    {
      url: "https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg.webp",
      numberItem: 25,
    },
    {
      url: "https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg.webp",
      numberItem: 25,
    },
    {
      url: "https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg.webp",
      numberItem: 25,
    },
    {
      url: "https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg.webp",
      numberItem: 25,
    },
  ];

  useEffect(() => {
    const fetchCategories = [
      {
        url: "https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg.webp",
        numberItem: 25,
      },
      {
        url: "https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg.webp",
        numberItem: 25,
      },
      {
        url: "https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg.webp",
        numberItem: 25,
      },
      {
        url: "https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg.webp",
        numberItem: 25,
      },
    ];
  }, []);

  console.log(categories);
  return (
    <div className="padding flex flex-wrap justify-center md:justify-around my-10 w-full h-auto cursor-pointer">
      {categories.length < 0 && <div>Something wrong !!!</div>}
      {categories.length >= 0 &&
        categories.map((category, index) => (
          <div
            style={{ backgroundImage: `url(${category.url})` }}
            className="bg-cover h-[30rem]  bg-center bg-no-repeat shadow-md rounded-md relative  my-4 lg:w-1/5 md:my-4 md:w-2/5 w-3/5 "
          >
            <div
              className="mt-96 w-3/4 h-1/6 bg-slate-100 mx-auto flex-col justify-center 
            items-center text-center cursor-pointer
            rounded-md
            hover:bg-pink-300
            hover:text-cyan-950
            transition-all
            duration-200
          "
            >
              <h1 className="pt-2 text-2xl font-medium font-serif">
                Fresh flower
              </h1>
              <p className="font-thin">(25) item</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Categories;
