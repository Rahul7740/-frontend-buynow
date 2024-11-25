import React from "react";
import "../style/emi.css";
import "../style/upi-payment.css";
import Checkbox from "../snippets/Checkbox";

function CashOnDelivery() {
  return (
    <div className="cash-on-delivery-main-container">
      <label className="upi-methods" htmlFor="pay1">
        <div>
          <Checkbox name="pay" id="pay1" type="checkbox" />
          <h3 className="all-para-16">Pay On Delivery</h3>
        </div>
        <p className="all-para-14">Available</p>
      </label>
      <div className="cashONDelivery-moreDetail">
        <h4 style={{ color: "black" }} className="all-para-16">
          More Details
        </h4>
        <p className="all-para-14">
          Ut fermentum fringilla pretium amet arcu etiam habitasse praesent.
          Auctor at nunc lacinia sit. Posuere aenean donec ac sit in. Elementum
          ac eu purus elit. At velit, dictum neque purus accumsan, proin ut non.
          Eu in consequat non dui eget feugiat.
        </p>
      </div>
    </div>
  );
}

export default CashOnDelivery;
