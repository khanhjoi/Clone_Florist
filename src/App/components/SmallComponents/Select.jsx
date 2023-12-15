import React from "react";

const Select = ({ name, form, options, style }) => {
  return (
    <select
      name={name}
      form={form}
      className={`${style} transition-all duration-200 h-10 border rounded-md font-mono text-slate-400`}
    > 
      <option className="">Type services</option>
      {options &&
        options.map((option, i) => (
          <option
            className={` ${style} transition-all duration-200 text-slate-700`}
            value={option}
          >
            {option}
          </option>
        ))}
    </select>
  );
};

export default Select;
