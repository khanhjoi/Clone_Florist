import React, { useState } from "react";
import BreadCrumb from "../components/SmallComponents/BreadCrumb";
import { IoIosPlay } from "react-icons/io";
import From from "../components/SmallComponents/From";
const ServicesPage = () => {
  const [services, setService] = useState([
    {
      tile: "Custom orders",
      linkIcon:
        "https://preview.colorlib.com/theme/florist/img/services/services-1.png.webp",
      description:
        "Flower helps you perfectly express how important your significant.",
    },
    {
      tile: "Event decoration",
      linkIcon:
        "https://preview.colorlib.com/theme/florist/img/services/services-2.png.webp",
      description:
        "Flower helps you perfectly express how important your significant.",
    },
    {
      tile: "Green landscapes",
      linkIcon:
        "https://preview.colorlib.com/theme/florist/img/services/services-3.png.webp",
      description:
        "Flower helps you perfectly express how important your significant.",
    },
  ]);

  const inputs = [
    { placeholder: "Name", type: "text" },
    { placeholder: "Phone", type: "number" },
    { placeholder: "Email", type: "email" },
    {
      placeholder: "Type services",
      type: "select",
      options: ["Custom orders", "Event decoration", "Green landscapes"],
    },
    {placeholder: "Message", type: "textAria"}
  ];

  return (
    <div className="w-full">
      <BreadCrumb
        titleBreadCrumb="Services"
        BreadCrumbLink={["Home", "SERVICES"]}
      />
      <div className="padding w-full text-center my-10 md:flex">
        <div className="w-full md:w-1/3 mx-auto md:mr-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full cursor-pointer my-12 border border-pink-500 px-12 py-10 flex-col"
            >
              <p className="font-serif text-3xl ">{service.tile}</p>
              <p className="font-thin text-md">{service.description}</p>
              <img
                src={service.linkIcon}
                alt="icon"
                className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 bg-white"
              />
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/3 md:mr-8">
          <div
            className="bg-slate-200 w-full h-[24rem] mx-auto rounded-md shadow-lg relative bg-cover bg-center cursor-pointer my-2"
            style={{
              backgroundImage:
                "url(https://preview.colorlib.com/theme/florist/img/services/services-video.jpg)",
            }}
          >
            <p className="absolute bottom-0 left-0 px-8 py-2 bg-white text-3xl font-medium font-serif rounded-bl-md rounded-tr-md">
              Custom orders
            </p>
            <IoIosPlay className="text-pink-600 bg-slate-300 text-5xl mb-44 rounded-3xl shadow-2xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          </div>
          <div className="my-2 text-left text-xl text-pink-500 font-mono">
            From $60 - $300
          </div>
          <div className="font-thin text-left mb-8">
            For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
            growing flowers that can be dried and incorporated into late fall
            and winter floral arrangements has been a game-changer. During her
            growing season, this farmer-florist relies on a vivid palette of
            annuals, perennials and ornamental grasses to supply her studio.
          </div>
          <From
            title="GET A QUOTE"
            titleStyle="text-3xl font-serif"
            inputs={inputs}
            inputStyle="my-4 pl-4 w-2/4 h-12 rounded-md shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
