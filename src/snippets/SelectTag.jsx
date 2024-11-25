import React, { useState } from "react";
import contectUsSelect from "../json/contectUs-selector.json";

function SelectTag(props) {
  const [selectText, setSelectText] = useState(props.name);
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
          color: selectText === props.name ? "#495F6A" : "#1f292d",
        }}
      >
        {selectText}
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
        {(props.content || contectUsSelect).map((item, index) => (
          <button
            onClick={() => {
              setSelectText(item.btn);
              setSelect(false);
            }}
            type="button"
            key={index}
            defaultValue={item.btn}
          >
            {item.btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectTag;
