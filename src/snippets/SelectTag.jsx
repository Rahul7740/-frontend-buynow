import React, { useState } from "react";
import contectUsSelect from "../json/contectUs-selector.json";

function SelectTag(props) {
  const { name, content, value, onChange } = props;
  const [select, setSelect] = useState(false);

  function updateSelect() {
    setSelect(select === false ? true : false);
  }

  return (
    <div className="select-container">
      <div
        className="select"
        onClick={updateSelect}
        style={{
          color: value === name ? "#495F6A" : "#1f292d",
        }}
      >
        {value || name}
        <img
          style={{
            transform: select === true ? "rotate(180deg)" : "rotate(0deg)",
          }}
          src={require(`../assets/svg/down-arrow-lite-purpal.svg`).default}
          alt="down-arrow"
        />
      </div>
      <div
        className={`select-content ${
          select === true ? "update-select-content" : ""
        }`}
      >
        {(content || contectUsSelect).map((item, index) => (
          <button
            onClick={() => {
              onChange(item.btn); // Update parent state with selected value
              setSelect(false);
            }}
            type="button"
            key={index}
            value={item.btn}
          >
            {item.btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectTag;
