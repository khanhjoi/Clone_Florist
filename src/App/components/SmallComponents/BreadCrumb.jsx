import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ titleBreadCrumb, BreadCrumbLink }) => {
  return (
    <div
      className="w-full text-center h-44 bg-cover bg-center py-6 shadow-md"
      style={{
        backgroundImage:
          "url(https://preview.colorlib.com/theme/florist/img/breadcrumb-bg.jpg.webp)",
      }}
    >
      <p className="font-serif text-4xl">{titleBreadCrumb}</p>
      <div className="text-lg mt-4">
        {BreadCrumbLink.length >= 0 &&
          BreadCrumbLink.map((item, index) => (
            <Link
              to={`/${item}`} // Assuming items can be used as paths
              key={index}
              className="pl-2 font-thin active:text-pink-400 border-r-2 border-cyan-900 px-2 last:text-pink-400 last:border-r-0"
            >
              {item}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BreadCrumb;
