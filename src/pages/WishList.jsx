import React, { Fragment } from "react";
import "../style/productFilter.css";
import "../style/topDeal.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import topDealProducts from "../json/top-deal-products.json";
import RelatedItemYourSearch from "../snippets/RelatedItemYourSearch";
import ProductCard from "../snippets/TopDealProductCard";
import NewsLetter from "../home/NewsLetter";
function WishList() {
  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>My Wishlist</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/wishList"}>
              Wishlist
              </Link>
            </div>
          </div>
          <div className="filter_and_viewAll-container">
            <div className="products-view-all-contianer">
              <div className="products-view-all-head">
                <p>10 Items</p>
              </div>
              <div
                className="wishList-products-grid">
                {topDealProducts.map((i, index) => (
                  <Fragment key={index}>
                    <ProductCard
                      img={i.img}
                      name={i.name}
                      price={i.price}
                      discount={i.discount}
                    />
                  </Fragment>
                ))}
              </div>
              <div className="products-pages-controler">
                <button>
                  <img src={SvgPath.leftVictor} alt="back" />
                </button>
                <button className="page-select">1</button>
                <button>2</button>
                <img src={SvgPath.threeDOts} alt="dots" />
                <button>10</button>
                <button>
                  <img src={SvgPath.rightVictor} alt="next" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedItemYourSearch name="Related item your search" />

      <NewsLetter />
    </>
  );
}

export default WishList;
