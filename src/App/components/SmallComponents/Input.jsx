import React, { useState } from "react";

const Input = ({placeholder}) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value)
  };

  return (
    <input
      value={inputValue}
      onChange={(e) => {
        onChange(e);
      }}
      placeholder={placeholder}
      className="w-32 h-10 border rounded-sm"
    />
  );
};

export default Input;
