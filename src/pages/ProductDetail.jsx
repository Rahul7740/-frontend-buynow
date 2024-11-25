import React, { useEffect, useState } from "react";
import "../style/productInfomation.css";
import "../style/Customer-Reviews.css";

import { Fragment } from "react";
import { json, Link, useParams } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/productDetail.css";
import ImgPath from "../assets/images/ImgPath";
import imagess from "../json/productDetailImgs.json";
import colorss from "../json/prodcutDetail-colors.json";
import sizee from "../json/prodcutDetail-size.json";
import contentess from "../json/productInfor-contents.json";

import rangess from "../json/Ratting-ranges.json";
import comments from "../json/ratting-comments.json";

import AllButtons from "../snippets/AllButtons";
// import ProductInformation from "../productDetails/ProductInformation";
// import ProductDetailss from "../productDetails/ProductDetailss";
// import CustomerReviews from "../productDetails/CustomerReviews";
import FAQ from "../productDetails/FAQ";
import RelatedItemYourSearch from "../snippets/RelatedItemYourSearch";
import Checkbox from "../snippets/Checkbox";

function ProductDetail() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [price, setPrice] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/getSingleProduct/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();

      setData(json);
      setPrice(json.all[json.colors[3]])
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  

  function colorChange(e) {
    const d = data.all[e.target.value];
    setPrice(d)    
  }
  console.log(price);
  
  useEffect(() => {
    fetchData();
  }, []);

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
                {/* <img src={`http://localhost:5000/api/products/uploads/${data.image}`} alt="product" /> */}
                <div>
                  <img src={SvgPath.productDetailDelivery} alt="freeDelivery" />
                  <p className="product-detail-para">Free delivered</p>
                </div>
              </div>
              <div className="prodcut-detail-imgs-types">
                {imagess.map((i, index) => (
                  <div key={index}>
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
                  <h2 className="product-detail-name">{data.title}</h2>
                  <img src={SvgPath.exportIcon} alt="export" />
                </div>
                <p className="product-detail-para">
                  <span style={{ color: "#1F292D" }}>
                    Price: {price.price} -{" "}
                  </span>
                  {data.description}
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
                      <div key={index}>
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
                  {data.colors?.map((i, index) => (
                    <Fragment key={index}>
                      <input
                        type="radio"
                        id={index}
                        name="colr"
                        value={i}
                        defaultChecked
                        onClick={(e) => {
                          colorChange(e);
                        }}
                      />
                      <label htmlFor={index} style={{ background: i }}></label>
                    </Fragment>
                  ))}
                </form>
              </div>

              <div className="productDetail-divs">
                <p className="product-detail-para">Size</p>
                <div className="productDetail-size">
                  {data.size?.map((i, index) => (
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
                  {data.styleName?.map((i, index) => (
                    <div key={index}>
                      <Checkbox name="style" id={i} />
                      <label htmlFor={i}>{i}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="productDetail-texes-div">
                <div>
                  <h3>{price.price}</h3>
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
      <section className="all-sections">
        <div className="container">
          <h3 className="product-details-headings">Product Information</h3>
          <div className="product-information-container">
            {contentess.map((i, index) => (
              <div
                key={index}
                style={{ borderBottom: i.borderBottom && "none" }}
              >
                <p style={{ color: "black" }}>{i.head}</p>
                <p>
                  {i.logo && (
                    <img src={require(`../assets/svg/${i.logo}`)} alt="apple" />
                  )}
                  {i.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="all-sections">
        <div className="container">
          <h3 className="product-details-headings">Product Information</h3>
          <p className="productDetail-section-para">
            Take calls and reply to texts. Id aliquam felis a egestas mi diam
            erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed.
            Tempus, lacus, consectetur neque, et. Vitae sapien, suspendisse eget
            maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel.
            Donec non vitae quam est consequat tortor etiam in in.
            <br />
            <br />
            Elementum condimentum dis tortor ipsum duis amet, non. A mauris
            amet, et molestie urna ut. Felis, eros varius molestie amet, quisque
            potenti pharetra aenean. Habitant morbi vehicula cras urna et sit
            hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit
            nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.
            <br />
            <br />
            Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam
            rutrum cursus nisi felis cursus vestibulum. Sagittis platea
            venenatis at nibh tellus purus urna. Ultricies mauris scelerisque
            dictum diam aliquet urna elementum. Aliquam tortor egestas nisi
            placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum
            vivamus pulvinar consectetur diam libero ornare.
          </p>
        </div>
      </section>
      <section className="all-sections">
        <div className="container">
          <h3 className="product-details-headings">Customer Reviews</h3>
          <div className="Customer-Reviews-container">
            <div className="Customer-Reviews-ratting">
              <div className="rating-range-container">
                <div className="rating-range-con-head">
                  <p>Rating</p>
                  <div>
                    <p>4.8 Out of 5</p>
                    <img src={SvgPath.star} alt="star" />
                  </div>
                </div>

                <div className="rating-rangess">
                  {rangess.map((i, index) => (
                    <div key={index} className="rating-rangess-childs">
                      <p>
                        <img src={SvgPath.starGray} alt="star" />
                        {i.no}
                      </p>
                      <div>
                        <span style={{ width: i.parcentage }}></span>
                      </div>
                      <p>{i.parcentage}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ratting-range-img">
                <img src={ImgPath.procutDetailMain} alt="img" />
              </div>
            </div>
            <div className="Customer-Reviews-comments">
              {data.reviews?.map((i, index) => (
                <div key={index} className="Customer-Reviews">
                  <div className="Customer-Reviews-profiles">
                    <div>
                      <img
                        src={require(`../assets/images/${i.img}`)}
                        alt="img"
                      />
                      <span>
                        <h3>{i.name}</h3>
                        <p className="Customer-Reviews-para">{i.dat}</p>
                      </span>
                    </div>
                    <div className="ratting-div">
                      <img src={SvgPath.star} alt="star" />
                      <img src={SvgPath.star} alt="star" />
                      <img src={SvgPath.star} alt="star" />
                      <img src={SvgPath.star} alt="star" />
                      <img src={SvgPath.star} alt="star" />
                    </div>
                  </div>
                  <p className="Customer-Reviews-para">{i.p}</p>
                  <div className="helpful-btn-container">
                    <Link className="helpful-btn">helpful</Link>
                  </div>
                </div>
              ))}
              <div className="see-all-reviews-btn">
                <AllButtons name="See all reviews" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <RelatedItemYourSearch name="Related item your search" />
    </>
  );
}

export default ProductDetail;
