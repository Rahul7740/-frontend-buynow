import React, { useState } from "react";
import SvgPath from "../assets/svg/SvgPath";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [Class , setClass] = useState(false)
  function likeColor(){
    setClass(Class===false?true:false)
  }
  return (
    <>
      <div className="product-card">
        <div
          className={
            props.instock === true ? "instock-product-img" : "product-img"
          }
        >
          <img
            src={require(`../assets/images/${props.img}`)}
            alt="product-card"
          />
        </div>
        <div className="product-like-btn">
          {props.new ? <button className="new">New</button> : ""}
          <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={likeColor}
            className={`like-btn-svg ${Class===true ? "changeLIke":"dislike-anima"}`}
          >
            <path
            className="like-btn-path"
              d="M16.929 1.04986C13.929 0.54991 11.929 4.04979 10.929 4.04978C9.92904 4.04978 8.59575 0.642554 4.92902 1.04983C1.26229 1.45711 -0.0709708 5.21031 1.929 9.21033C3.92898 13.2104 7.92901 17.0498 10.929 17.0498C13.929 17.0498 17.929 13.2104 19.929 9.21033C21.929 5.21031 19.929 1.5498 16.929 1.04986Z"
              stroke="#495F6A"
              strokeWidth="2"
            />
          </svg>
        </div>
        {props.instock === true ? (
          <div className="instock-product-content">
            <div className="instock-content-head">
              <Link to={"/productDetail"}>
                <h3 className="instock-product-name">{props.name}</h3>
              </Link>
              <div className="instock-price-ratting">
                <p>{props.price}</p>

                {props.ratting ? (
                  <div className="ratting-div">
                    {[1, 2, 3, 4].map((index) => (
                      <img key={index} src={SvgPath.star} alt="star" />
                    ))}
                    <img src={SvgPath.helfStar} alt="half-star" />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="instock-label">
              <p>In stock</p>
              <button className="product-shop-btn">
                <span className="add-cart">ADD CART</span>
                <img
                  className="cart-img"
                  src={SvgPath.productShopBTN}
                  alt="shop"
                />
              </button>
            </div>
          </div>
        ) : (
          <div className="product-content">
            <Link to={"/productDetail"}>
              <h3 className="prodcut-name">{props.name}</h3>
            </Link>
            {props.ratting ? (
              <div className="ratting-div">
                {[1, 2, 3, 4].map((index) => (
                  <img key={index} src={SvgPath.star} alt="star" />
                ))}
                <img src={SvgPath.helfStar} alt="half-star" />
              </div>
            ) : (
              ""
            )}

            <p>{props.price}</p>
            <button className="product-shop-btn">
              <span className="add-cart">ADD CART</span>
              <img
                className="cart-img"
                src={SvgPath.productShopBTN}
                alt="shop"
              />
            </button>
          </div>
        )}
      </div>
      {/* </Link> */}
    </>
  );
}
export default ProductCard;
