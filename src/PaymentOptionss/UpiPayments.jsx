import React from "react";
import "../style/upi-payment.css";
import upiMethodss from "../json/upiMethods.json";
import SvgPath from "../assets/svg/SvgPath";
import Checkbox from "../snippets/Checkbox";
import SelectTag from "../snippets/SelectTag";

function UpiPayments() {
  
  return (
    <div className="upiPayment-container">
      <div className="upiPayment-methods-div">
        {upiMethodss.map((i, index) => (
          <label className="upi-methods" key={index} htmlFor={index}>
            <div>
              <Checkbox name="upi" id={index} />
              <h3 className="all-para-16">{i.name}</h3>
            </div>
            <img src={require(`../assets/svg/${i.img}`)} alt="payment" />
          </label>
        ))}
        <label htmlFor="adupi" className="add-upi">
          <img src={SvgPath.plus} alt="plus" />
          <p className="all-para-16">Add UPI</p>
        </label>
      </div>
      <div className="otherCard-container">
        <h3 style={{ color: "#1F292D" }} className="all-para-16">
          Other UPI
        </h3>
        <SelectTag name="Select an option..." />
        <div className="space-between save-card-btns-container">
          <button className="saveAddress-btn">Save Upi</button>
          <button className="cancel-btn">CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default UpiPayments;
