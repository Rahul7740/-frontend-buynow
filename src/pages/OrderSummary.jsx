import React from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import productss from "../json/cart-procuts.json";
import Summary from "../snippets/Summary";
import "../style/order-Summary.css";

function OrderSummary() {
  function quntityMinus(e) {
    const pElement = e.currentTarget.nextElementSibling;
    let currentQuantity = Number(pElement.innerHTML);
    if (currentQuantity > 0) {
      pElement.innerHTML = currentQuantity - 1;
    }
  }
  function quntityPlus(e) {
    const pElement = e.currentTarget.previousElementSibling;
    let currentQuantity = Number(pElement.innerHTML);
    pElement.innerHTML = currentQuantity + 1;
  }

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
              <Link to={"/deliveryAdress"} className="abcd active-shadow">
                <h4 className="stepper-label activeTxt">Delivery Address</h4>
                <div className="stepper-dots activeDot"></div>
              </Link>
              <div className="stepper-line activeline"></div>
              <Link to={"/orderSummary"} className="abcd active-shadow">
                <h4 className="stepper-label activeTxt">Order Summary</h4>
                <div className="stepper-dots activeDot"></div>
              </Link>
              <div className="stepper-line"></div>
              <Link to={"/paymentOption"} className="abcd">
                <h4 className="stepper-label">Payment Option</h4>
                <div className="stepper-dots"></div>
              </Link>
              <div className="stepper-line"></div>
              <div className="abcd">
                <h4 className="stepper-label">Complete Order</h4>
                <div className="stepper-dots"></div>
              </div>
            </div>
          </div>
          <div className="deliveryAdress-section">
            <div className="deliveryAddress-container">
              <h3>Order Summary</h3>
              <div className="orderSummary-Main-container">
                {productss.map((i, index) => (
                  <div key={index} className="orderSummary-products">
                    <div className="orderSummary-imgs">
                      <img
                        src={require(`../assets/images/${i.img}`)}
                        alt="cart-img"
                      />
                    </div>
                    <div className="orderSummary-prdt-details ">
                      <div className="orderSummary-prdt-heading">
                        <h3>{i.name}</h3>
                        <p className="display-block-none-700">{i.p}</p>
                        <p className="display-none-block-700">{i.shortP}</p>
                      </div>

                      <div className="orderSummary-quantity-container">
                        <div className="orderSummary-quantity">
                          <button
                            onClick={(e) => {
                              quntityMinus(e);
                            }}
                          >
                            <img src={SvgPath.minus} alt="minus" />
                          </button>
                          <p>0</p>
                          <button
                            onClick={(e) => {
                              quntityPlus(e);
                            }}
                          >
                            <img src={SvgPath.plus} alt="plus" />
                          </button>
                        </div>
                        <div className="orderSummary-quantity-controls">
                          <h3 className="">{i.price}</h3>
                          <button className="cancel-btn remove-btn">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Summary />
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderSummary;
