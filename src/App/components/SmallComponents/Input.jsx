import React, { useState } from "react";
import Button from "./Button";

const Input = ({ placeholder, style}) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value)
  };

  const onsubmit = (e) => {

  }

  return (
    <div className="relative">
      <input
      value={inputValue}
      onChange={(e) => {
        onChange(e);
      }}
      placeholder={placeholder}
      className={`transition-all duration-200 w-32 h-10 border rounded-sm ${style} `}
    />
      <Button content="Submit"/>
    </div> 
  );
};

export default Input;
