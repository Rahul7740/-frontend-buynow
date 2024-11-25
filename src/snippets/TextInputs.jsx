import React from "react";

function TextInputs(props) {
  return (
    <input
      className={`delivery-a-inputs ${props.class}`}
      placeholder={props.name}
      type={props.type || "text"}
      id={props.id}
    />
  );
}

export default TextInputs;
