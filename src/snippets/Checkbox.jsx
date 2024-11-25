import React from "react";

function Checkbox(props) {
  return (
    <span className="checkbox">
      <input
        type={props.type || "radio"}
        name={props.name}
        id={props.id}
        required
        defaultChecked={props.checked || false}
      />
      <div></div>
    </span>
  );
}

export default Checkbox;
