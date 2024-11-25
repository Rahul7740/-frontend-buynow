import React from "react";
import { Link } from "react-router-dom";
import "../style/topDeal-product-card.css";
import colorsDots from "../json/product-card-color-dots.json"

function TopDealProductCard(props) {
  return (
    <>
      <Link to={"/productDetail"}>
        <div className="topDeal-product-card">
            <div className="topDeak-prodcut-card-discount">{props.discount}</div>
          <div className="topDeal-product-card-img">
            <img
              src={require(`../assets/images/${props.img}`)}
              alt="product-card"
            />
          </div>
          <div className="prodcut-card-colors-dots">
            {
                colorsDots.map((i,index)=>(
                    <span key={index} style={{background:i.colors}}></span>
                ))
            }
          </div>
          <h3 className="topDeal-product-card-heading">{props.name}</h3>
          <div className="topDeal-product-card-price-Buy">
            <p>{props.price}</p>
            <button className="prodcut-card-2-buyBtn">
              BUY
              <img
                src={require("../assets/svg/right-victor-perpul.svg").default}
                alt="right victor"
              />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default TopDealProductCard;
