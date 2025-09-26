import React from "react";

const Input = (props) => {
  return (
    <input
      name={props.name}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

export default Input;
