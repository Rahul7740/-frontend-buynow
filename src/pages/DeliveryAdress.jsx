import React, { useState } from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/deliveryAddress.css";
import "../style/contectUs.css";
import Summary from "../snippets/Summary";
import selects from "../json/deliveryAdress-selects.json";
import saveAdresss from "../json/saveAdress.json";
import SelectTag from "../snippets/SelectTag";
import { Fragment } from "react";
import TextInputs from "../snippets/TextInputs";
// import contectUsSelect from "../json/contectUs-selector.json";
import Checkbox from "./../snippets/Checkbox";

function DeliveryAdress() {
  const [Address, setAddress] = useState(false);
  const [show, setshow] = useState(false);
  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Cart Products</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/checkout"}>
                Checkout
              </Link>
            </div>
          </div>
          <div className="stepper">
            <div className="stepper-line-container">
              <div className="abcd active-shadow">
                <h4 className="stepper-label activeTxt">Delivery Address</h4>
                <div className="stepper-dots activeDot"></div>
              </div>
              <div className="stepper-line"></div>
              <div className="abcd">
                <h4 className="stepper-label">Order Summary</h4>
                <div className="stepper-dots"></div>
              </div>
              <div className="stepper-line"></div>
              <div className="abcd">
                <h4 className="stepper-label">Payment Option</h4>
                <div className="stepper-dots"></div>
              </div>
              <div className="stepper-line"></div>
              <div className="abcd">
                <h4 className="stepper-label">Complete Order</h4>
                <div className="stepper-dots"></div>
              </div>
            </div>
          </div>
          <div className="deliveryAdress-section">
            <div className="deliveryAddress-container">
              <h3>Delivery Address</h3>
              <div
                style={{ display: Address === false ? "none" : "flex" }}
                className="save-adress-container"
              >
                {saveAdresss.map((i, index) => (
                  <div key={index} className="save-adress">
                    <div>
                      <div className="save-adress-heading">
                        <h3>{i.name}</h3>
                        <span>{i.place}</span>
                      </div>
                      <p>{i.adress}</p>
                    </div>
                    <Link to={"/orderSummary"}>
                      <button>Select address</button>
                    </Link>
                  </div>
                ))}
                <div className="saveAddress-btn-container">
                  <button
                    style={{ display: show === true ? "none" : "block" }}
                    onClick={() => {
                      setshow(true);
                    }}
                    className="saveAddress-btn"
                    type="submit"
                  >
                    Add new address
                  </button>
                </div>
              </div>
              <div
                style={{
                  display: show === false && Address === true ? "none" : "flex",
                }}
                className="deliveryAddress-container"
              >
                <h3 style={{ display: show === true ? "block" : "none" }}>
                  New Address
                </h3>

                <div className="delivery-A-input-div rsponcv-delivery-inputs">
                  <TextInputs name="First Name" />
                  <TextInputs name="Mobile Number" type="tel" />
                </div>
                <div className="delivery-A-input-div rsponcv-delivery-inputs">
                  <TextInputs name="Email Address" />
                  <TextInputs name="PIN Code" type="number" />
                </div>
                <div className="delivery-A-input-div">
                  {selects.map((i, index) => (
                    <Fragment key={index}>
                      <SelectTag name={i.head} content={i.options} />
                    </Fragment>
                  ))}
                </div>

                <div className="delivery-a-inputs">
                  <input placeholder="Address 1" type="text" />
                  <button>
                    <img
                      src={require(`../assets/svg/MyLocationIcon.svg`).default}
                      alt="location"
                    />
                  </button>
                </div>
                <TextInputs name="Address 2" />

                <div className="delivery-a-checkbox-div">
                  <Checkbox id="checkss" type="checkbox" />
                  <label htmlFor="checkss" style={{ color: "#1F292D" }}>
                    Business Address
                  </label>
                </div>
                <div className="space-between">
                  <button
                    onClick={() => {
                      setAddress(true);
                      setshow(false);
                    }}
                    className="saveAddress-btn"
                    type="submit"
                  >
                    Save Address
                  </button>
                  <button
                    style={{ display: show === true ? "block" : "none" }}
                    className="cancel-btn"
                    onClick={() => {
                      setshow(false);
                    }}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
            <Summary />
          </div>
          <div className="deliveryAdress-improtantNotice">
            <h3>Important Note</h3>
            <p>
              Consectetur adipiscing elit. At praesent volutpat accumsan non
              adipiscing. Amet, sed in fames nec tincidunt. Neque vel urna
              facilisis vel nisl non. Lacinia scelerisque in nunc egestas et.
              Mauris duis sed pharetra, vulputate ut elit blandit donec.
              Tristique id a integer malesuada imperdiet tincidunt quis cras
              faucibus. Erat vitae auctor odio interdum magna non.
            </p>

            <div>
              <button>View Buynow Policy</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeliveryAdress;
