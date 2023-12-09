import React, { useEffect, useRef, useState } from "react";
import Button from "../SmallComponents/Button";
const SlidePage = () => {
  let count = 0;
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    startSlide();

    // Clear the interval when the component is unmounted.
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const slides = [
    {
      url: "https://preview.colorlib.com/theme/florist/img/hero/hero-2.jpg.webp",
    },
    {
      url: "https://preview.colorlib.com/theme/florist/img/hero/hero-1.jpg.webp",
    },
  ];

  const startSlide = () => {
    intervalRef.current = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const changeSlide = (index) => {
    count = index;
    setCurrentSlide(index);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % slides.length;
    setCurrentSlide(count);
  };

  const handleOnPrevClick = () => {
    count = (currentSlide + slides.length - 1) % slides.length;
    setCurrentSlide(count);
  };

  return (
    <div className="w-full h-[36rem] relative">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
        className="w-full h-[36rem] bg-center bg-cover duration-500 z-0"
      >
        <div className="padding w-5/6 md:w-3/6 lg:w-1/3 h-[36rem] absolute top-0 left-0 right-0">
          <p className="mt-40 text-xl font-medium">FRESH FLOWER & GIFT SHOP</p>
          <p className="text-4xl font-medium font-serif mt-4">
            Making beautiful flowers a part of your life.
          </p>
          <Button content={"SHOP NOW"}/>
        </div>
      </div>
      <div className="absolute bottom-14 pl-36 md:pl-60 lg:pl-80 w-10 flex ">
        {slides.map((item, index) => (
          <button
            key={index}
            className={`rounded-full p-3 bg-slate-200 shadow-md mx-2 
                ${index === currentSlide ? "bg-pink-300" : ""}
              `}
            onClick={() => {
              changeSlide(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SlidePage;
