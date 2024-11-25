import React from "react";
import SvgPath from "../assets/svg/SvgPath";
import { Link } from "react-router-dom";
import "../style/products.css";

function ProductCard2(props) {
  return (
    <>
      <div className="product-card1 product-card2">
        <div className="product-card2-img">
          <img
            src={require(`../assets/images/${props.img}`)}
            alt="product-card"
          />
        </div>
        <div className="product-card2-content product-card1-content ">
          <Link to={"/productDetail"}>
            <h3 style={{ margin: "0" }}>{props.name}</h3>
          </Link>
          <div className="product-card1-ratting-div product-card2-ratting">
            {[1, 2, 3, 4].map((index) => (
              <img key={index} src={SvgPath.star} alt="star" />
            ))}
            <img src={SvgPath.helfStar} alt="half-star" />
          </div>

          <p style={{ margin: "0" }}>{props.price}</p>
          <button className="prodcut-card-2-buyBtn">
            BUY
            <img
              src={require("../assets/svg/right-victor-perpul.svg").default}
              alt="right victor"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard2;
