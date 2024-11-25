import React from "react";
import "../style/upi-payment.css";
import "../style/emi.css";
import emiMethodss from "../json/emiMethods.json";
import emiHeadings from "../json/emi-section-headings.json";
import emiPlans from "../json/emiPlans.json";
import Checkbox from "../snippets/Checkbox";
import SelectTag from "../snippets/SelectTag";



function Emi() {
  return (
    <div className="upiPayment-container">
      <div className="upiPayment-methods-div">
        {emiMethodss.map((i, index) => (
          <label className="upi-methods" key={index} htmlFor={index}>
            <div>
              <Checkbox name="upi" id={index} />
              <h3 className="all-para-16">{i.name}</h3>
            </div>
            <img src={require(`../assets/svg/${i.img}`)} alt="payment" />
          </label>
        ))}
      </div>
      <div className="otherCard-container">
        <h3 style={{ color: "#1F292D" }} className="all-para-16">
          No Cost EMI
        </h3>
        <SelectTag name="HDFC bank credit card" />
      </div>
      <div className="emi-main-container">
        <h2 className="all-para-14">EMI Plan</h2>
        <div className="emi-contents-head">
          {emiHeadings.map((i, index) => (
            <div key={index}>
              <p className="all-para-14">{i.name}</p>
            </div>
          ))}
        </div>
        {emiPlans.map((i, index) => (
          <label htmlFor={i.id} key={index} className="emi-contents">
            <div>
              <Checkbox name="aa" id={i.id} />
              <p className="all-para-14">{i.price}</p>
            </div>
            <div>
              <p className="all-para-14">{i.interest}</p>
            </div>
            <div>
              <p className="all-para-14">{i.Cost}</p>
            </div>
            <div>
              {i.Status ? (
                <span className="emi-status emi-status-abailable">
                  Available
                </span>
              ) : (
                <span className="emi-status emi-status-NOabailable">
                  Not Available
                </span>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Emi;
