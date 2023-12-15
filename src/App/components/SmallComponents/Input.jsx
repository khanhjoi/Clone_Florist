import React, { useState } from "react";
import Button from "./Button";

const Input = ({ type, placeholder, style }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onsubmit = (e) => {};

  return (
    <input
      value={inputValue}
      onChange={(e) => {
        onChange(e);
      }}
      type={type}
      placeholder={placeholder}
      className={`${style} transition-all duration-200 h-10 border rounded-md`}
    />
  );
};

export default Input;
