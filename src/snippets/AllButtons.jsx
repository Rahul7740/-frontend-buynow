import React from "react";

const AllButtons = (props) => {
  return (
    <button type={props.type || "button"} className={`all-btns ${props.class}`}>
      <h5 className="all-btn-headings">{props.name}</h5>
    </button>
  );
};

export default AllButtons;
