import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/productDetail.css";
import ImgPath from "../assets/images/ImgPath";
import imagess from "../json/productDetailImgs.json";
import colors from "../json/prodcutDetail-colors.json";
import sizee from "../json/prodcutDetail-size.json";
import AllButtons from "../snippets/AllButtons";
import ProductInformation from "../productDetails/ProductInformation";
import ProductDetailss from "../productDetails/ProductDetailss";
import CustomerReviews from "../productDetails/CustomerReviews";
import FAQ from "../productDetails/FAQ";
import RelatedItemYourSearch from "../snippets/RelatedItemYourSearch";
import Checkbox from "../snippets/Checkbox";

function ProductDetail() {
  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Help Center</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link to={"/productsFilter"}>Products</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/productDetail"}>
                Products details
              </Link>
            </div>
          </div>
          <div className="product-detail-container">
            <div className="product-detail-imgs display-block-none-700">
              <div className="prodcut-detail-main-img">
                <img
                  className="like-btn"
                  src={SvgPath.productDetailLikeBtn}
                  alt="like"
                />
                <img src={ImgPath.procutDetailMain} alt="product" />
                <div>
                  <img src={SvgPath.productDetailDelivery} alt="freeDelivery" />
                  <p className="product-detail-para">Free delivered</p>
                </div>
              </div>
              <div className="prodcut-detail-imgs-types">
                {imagess.map((i, index) => (
                  <div>
                    <img
                      src={require(`../assets/images/${i.img}`)}
                      alt="product"
                    />
                  </div>
                ))}
                <img src={SvgPath.rightVictor} alt="" />
              </div>
            </div>
            <div className="product-detail-content">
              <div className="product-detail-header">
                <div className="product-detail-name-container">
                  <h2 className="product-detail-name">Apple Watch SE </h2>
                  <img src={SvgPath.exportIcon} alt="export" />
                </div>
                <p className="product-detail-para">
                  <span style={{ color: "#1F292D" }}>Price: $600.00 - </span>
                  Silver Aluminium Case with Abyss Blue Sport Band - Regular
                </p>
                <div className="product-detail-imgs display-none-block-700">
                  <div className="prodcut-detail-main-img">
                    <img
                      className="like-btn"
                      src={SvgPath.productDetailLikeBtn}
                      alt="like"
                    />
                    <img src={ImgPath.procutDetailMain} alt="product" />
                    <div>
                      <img
                        src={SvgPath.productDetailDelivery}
                        alt="freeDelivery"
                      />
                      <p className="product-detail-para">Free delivered</p>
                    </div>
                  </div>
                  <div className="prodcut-detail-imgs-types">
                    {imagess.map((i, index) => (
                      <div>
                        <img
                          src={require(`../assets/images/${i.img}`)}
                          alt="product"
                        />
                      </div>
                    ))}
                    <img src={SvgPath.rightVictor} alt="" />
                  </div>
                </div>
              </div>

              <div className="productDetail-divs">
                <p className="product-detail-para">Color</p>
                <form className="productDetail-colors">
                  {colors.map((i, index) => (
                    <Fragment key={index}>
                      <input
                        type="radio"
                        id={index}
                        name="colr"
                        defaultChecked
                      />
                      <label
                        htmlFor={index}
                        style={{ background: i.color }}
                      ></label>
                    </Fragment>
                  ))}
                </form>
              </div>

              <div className="productDetail-divs">
                <p className="product-detail-para">Size</p>
                <div className="productDetail-size">
                  {sizee.map((i, index) => (
                    <div key={index}>
                      <h3>{i.size}</h3>
                      <p>{i.p}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="productDetail-divs">
                <p className="product-detail-para">Style name</p>
                <div className="productDetail-style">
                  {[
                    { name: "GPS", id: "a1" },
                    { name: "GPS + Cellular", id: "a2" },
                  ].map((i, index) => (
                    <div key={index}>
                      <Checkbox name="style" id={i.id} />
                      <label htmlFor={i.id}>{i.name}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="productDetail-texes-div">
                <div>
                  <h3>$320.00</h3>
                  <p>Inclusive of all taxes</p>
                </div>
                <div className="texes-ratting-contaienr">
                  <p>4.5</p>
                  <div className="ratting-div">
                    <img src={SvgPath.star} alt="star" />
                    <img src={SvgPath.star} alt="star" />
                    <img src={SvgPath.star} alt="star" />
                    <img src={SvgPath.star} alt="star" />
                    <img src={SvgPath.helfStar} alt="half-star" />
                  </div>
                </div>
              </div>
              <p className="productDetail-readMore">
                10-day replacement only
                <Link style={{ color: "#1F292D" }}> Read more</Link>
              </p>

              <div className="productDetail-readMore product-Detail-btns">
                <AllButtons
                  name="Add to cart"
                  class="product-detail-addToCart-btn"
                />
                <AllButtons name="Buy now" class="product-detial-buyNow-btn" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductInformation />
      <ProductDetailss />
      <CustomerReviews />
      <FAQ />
      <RelatedItemYourSearch name="Related item your search" />
    </>
  );
}

export default ProductDetail;
