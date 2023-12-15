import React from "react";

const Button = ({ content, whiteBtn, outLineBtn, style }) => {
  return (
    <button
      className={`mt-4 ml-1 mr-1 px-8 py-2 ${
        whiteBtn
          ? "bg-slate-100 text-pink-400 hover:bg-slate-500 hover:text-white"
          : "bg-pink-500 text-slate-100 hover:bg-pink-200 hover:text-slate-800"
      } 
      
      ${
        outLineBtn
          ? "bg-transparent border-2 border-pink-400 text-slate-800"
          : ""
      }
      rounded-3xl font-semibold transition-all duration-100 shadow-lg
      ${style}
      `}
    >
      {content}
    </button>
  );
};

export default Button;
