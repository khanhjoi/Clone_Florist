import React from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
const Form = ({ action, title, titleStyle, inputs, inputStyle }) => {
  return (
    <form method={action} className="shadow-sm py-10 bg-slate-200 rounded-md">
      <div className={titleStyle}>{title}</div>
      {inputs &&
        inputs.map((input, index) => (
          <div key={index}>
            {input.type === "select" && (
              <Select style={inputStyle} options={input.options} />
            )}
            {input.type !== "select" && input.type !== "textAria" && (
              <Input
                style={inputStyle}
                type={input.type}
                placeholder={input.placeholder}
                options={index.options}
              />
            )}
            {input.type === "textAria" && (
              <textarea
                className={`${inputStyle} h-20 pt-2 block mx-auto`}
                placeholder={input.placeholder}
              ></textarea>
            )}
          </div>
        ))}
      <Button content="SEND" />
    </form>
  );
};

export default Form;
