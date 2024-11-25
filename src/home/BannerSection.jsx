import React from "react";
import "../style/bannerSection.css";
import ImgPath from "../assets/images/ImgPath";
import SvgPath from "../assets/svg/SvgPath";

function BannerSection() {
  return (
    <>
      <section className="banner-main-section">
        <div className="container">
          <div className="banner-section">
            <div className="banner-content">
              <div className="banner-content-child1">
                <p>Exclusive products<img src={require("../assets/svg/fire-icon.svg").default} alt="fire" /></p>
                <h1 className="banner-heading">
                  Find Top
                  <span style={{ color: "#67517A" }}> Amazing Products, </span> 
                  Start Shopping Now
                </h1>
              </div>
              <p className="banner-content-benifit">
                For First Pruches 
                <span style={{ color: "#FFB400" }}> Get 30% Off </span>
              </p>
              <div className="banner-btn-container">
                <button className="banner-shop-now-btn">
                  <p>Shop Now</p>
                  <img className="banner-shop-now-btn-img" src={SvgPath.forwordArrow} alt="arrow" />
                </button>
                <div className="product-offer-container">
                  <img
                    className="display-block-none-700"
                    src={SvgPath.bannerOfferIcon}
                    alt="product offer"
                  />
                  <p>OFFER PRODUCTS</p>
                </div>
              </div>
            </div>
            <img className="banner-main-img" src={ImgPath.bannerMain} alt="banner" />
          </div>
        </div>
      </section >
    </>
  );
}

export default BannerSection;
