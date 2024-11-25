import React from "react";
import "../style/orderDetails.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import rangeJson from "../json/order-detail-range.json";
import AllButtons from "../snippets/AllButtons";

function OrderDetail() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="sections-header">
          <h2>Order Details</h2>
          <div className="space-between">
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/orderDetails"}>
                {}
                Order Details
              </Link>
            </div>
            <AllButtons name="Buy it again" class="buy-it-again-btn" />
          </div>
        </div>
        <div className="orderDetails-main-container">
          <div className="order-ID">
            <div>
              <h3>
                Order ID <p>021D0252G56404930</p>{" "}
              </h3>

              <button>
                <img
                  src={require(`../assets/svg/copy-text-icon.svg`).default}
                  alt="copyText"
                />
              </button>
            </div>
            <h4>
              View all orders
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z"
                  fill="white"
                />
              </svg>
            </h4>
          </div>
          <div className="orderDetails-container">
            <div className="ordered-conformed-container">
              <div className="orderDetail-range-container">
                <div className="orderDetail-range">
                  <span></span>
                </div>
              </div>
              <div className="ordered-conformed-detail">
                {rangeJson.map((item, index) => (
                  <div key={index}>
                    <h3>
                      {item.name}
                      <span>{item.date}</span>
                    </h3>
                    <p>{item.p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="orderDetails-detail">
              <div className="orderDetails-product-detail">
                <div className="orderDetails-product-contents">
                  <h3>Apple watch SE </h3>
                  <p>
                    Silver Aluminium Case with Abyss Blue Sport Band - Regular
                  </p>
                  <h4>
                    Color <span> Black</span>
                  </h4>
                  <h2>$320.00</h2>
                </div>
                <img
                  src={require(`../assets/images/orderDetail-product-img.png`)}
                  alt="product img"
                />
              </div>
              <div className="shippingAddress-container">
                <div>
                  <h3>Shipping Address</h3>
                  <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M47.5 17.5C47.5 14.75 45.25 12.5 42.5 12.5H35V17.5H42.5V24.125L33.8 35H25V22.5H15C9.475 22.5 5 26.975 5 32.5V40H10C10 44.15 13.35 47.5 17.5 47.5C21.65 47.5 25 44.15 25 40H36.2L47.5 25.875V17.5ZM10 35V32.5C10 29.75 12.25 27.5 15 27.5H20V35H10ZM17.5 42.5C16.125 42.5 15 41.375 15 40H20C20 41.375 18.875 42.5 17.5 42.5Z"
                    fill="#67517A"
                  />
                  <path d="M25 15H12.5V20H25V15Z" fill="#67517A" />
                  <path
                    d="M47.5 32.5C43.35 32.5 40 35.85 40 40C40 44.15 43.35 47.5 47.5 47.5C51.65 47.5 55 44.15 55 40C55 35.85 51.65 32.5 47.5 32.5ZM47.5 42.5C46.125 42.5 45 41.375 45 40C45 38.625 46.125 37.5 47.5 37.5C48.875 37.5 50 38.625 50 40C50 41.375 48.875 42.5 47.5 42.5Z"
                    fill="#67517A"
                  />
                </svg>
              </div>
              <div className="orderDetails-btns">
                <button className="cancel-btn">
                  <p className="display-block-none-700">Return Product</p>
                  <p className="display-none-block-700">Return</p>
                </button>
                <button className="Rate-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="white-star"
                  >
                    <path
                      d="M11.4833 18.0819C11.8011 17.8901 12.1989 17.8901 12.5167 18.0819L16.151 20.2754C16.9083 20.7325 17.8425 20.0535 17.6416 19.192L16.6771 15.0578C16.5928 14.6963 16.7156 14.3178 16.9962 14.0748L20.2086 11.2919C20.8772 10.7127 20.5198 9.61442 19.6384 9.53964L15.4109 9.18098C15.0413 9.14962 14.7194 8.91629 14.5747 8.57479L12.9207 4.67237C12.5761 3.85934 11.4239 3.85934 11.0793 4.67237L9.42532 8.57479C9.28058 8.91629 8.95871 9.14962 8.58914 9.18098L4.36163 9.53964C3.4802 9.61442 3.1228 10.7127 3.79139 11.2919L7.00379 14.0748C7.28436 14.3178 7.40721 14.6963 7.32287 15.0578L6.35841 19.192C6.15745 20.0535 7.09168 20.7325 7.849 20.2754L11.4833 18.0819Z"
                      fill="white"
                    />
                  </svg>
                  <p className="display-block-none-700">Rate The product</p>
                  <p className="display-none-block-700">Rate</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderDetail;
