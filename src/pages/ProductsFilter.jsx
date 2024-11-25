import React, { Fragment, useEffect, useState } from "react";
import "../style/productFilter.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import colosArray from "../json/filter-color.json";
import filterProducts from "../json/filterProducts.json";
import RelatedItemYourSearch from "../snippets/RelatedItemYourSearch";
import ProductCard from "../snippets/ProductCard";
import NewsLetter from "../home/NewsLetter";
import productCategorys from "../json/products-categorys.json";
import sortByPopupData from "../json/short-by-popup.json";
import BackendCards from "../snippets/BackendCards";

function ProductsFilter() {
  useEffect(() => {
    const elements = document.querySelectorAll(".filter-all-contents");
    elements.forEach((element) => {
      const imgElement = element.previousElementSibling;

      const img = imgElement.querySelector("img");
      const elementHeight = window.getComputedStyle(element).height;

      if (elementHeight === "0px" || !elementHeight) {
        img.style.transform = "rotate(0deg)";
        element.style.paddingTop = "0";
      } else {
        img.style.transform = "rotate(180deg)";
        element.style.paddingTop = "10px";
      }
    });
  }, []);
  // ======height Control function ====== //
  function heightControl(e) {
    const sibling = e.currentTarget.nextElementSibling;
    const imgElement = e.currentTarget.querySelector("img");

    const computedHeight = window.getComputedStyle(sibling).height;
    sibling.style.transition = "height 0.5s ease";

    if (computedHeight !== "0px") {
      sibling.style.height = sibling.scrollHeight + "px";
      setTimeout(() => {
        sibling.style.height = "0px";
        sibling.style.overflow = "hidden";
        sibling.style.paddingTop = "0";
      }, 10);
      imgElement.style.transform = "rotate(0deg)";
    } else {
      sibling.style.height = sibling.scrollHeight + "px";
      sibling.style.overflow = "visible";
      sibling.style.paddingTop = "10px";
      imgElement.style.transform = "rotate(180deg)";
      sibling.addEventListener("transitionend", function handler() {
        sibling.style.height = "auto";
        sibling.style.overflow = "visible";
        sibling.style.paddingTop = "10px";
        sibling.removeEventListener("transitionend", handler);
      });
    }
  }
  const [sortByPopup, setSortByPopup] = useState(false);
  function changeSortBY() {
    setSortByPopup(sortByPopup === false ? true : false);
  }

  const [filter, setFilter] = useState(false);
  const [categorys, setCategorys] = useState(8);
  function categorysQuantity() {
    setCategorys(categorys === 8 ? 11 : 8);
  }
  const [colors, setColor] = useState(12);
  function colorQuantity() {
    setColor(colors === 12 ? 24 : 12);
  }
  const [value, setValue] = useState(50);
  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [data, setData] = useState([]);

  return (
    <>
      <div
        onClick={() => {
          setFilter(false);
        }}
        className={`filter-background-overlay ${
          filter === true ? "showFIlter" : ""
        }`}
      ></div>

      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Apple watches</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/productsFilter"}>
                Products
              </Link>
            </div>
          </div>
          <div className="filter_and_viewAll-container">
            <div
              className={`filter-container ${
                filter === true ? "showFIlter" : ""
              }`}
            >
              <div className="filter-head">
                <h2>Filter</h2>
                <button className="filter-clear-all-btn">CLEAR ALL</button>
                <button
                  onClick={() => {
                    setFilter(false);
                  }}
                  className={`display-none-block-1100 }`}
                >
                  <img
                    src={require(`../assets/svg/filter-close-btn.svg`).default}
                    alt="CLOSE"
                  />
                </button>
              </div>
              {/* =============top-deal-categotys-filter============= */}
              <div className="filter-all-container">
                <div
                  onClick={(e) => {
                    heightControl(e);
                  }}
                  className="filter-all-head"
                >
                  <h3 className="filter-headings">Category</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.downArrow}
                    alt="downArrow"
                  />
                </div>
                <div className="filter-all-contents filter-category-contents">
                  {productCategorys.slice(0, categorys).map((item, index) => (
                    <button key={index}>{item.name}</button>
                  ))}
                  <div
                    onClick={categorysQuantity}
                    className="filter-viewALl-btn"
                  >
                    {categorys === 8 ? "View all" : "Show Less"}
                  </div>
                </div>
              </div>
              {/* =============Price-filter============= */}

              <div className="filter-all-container">
                <div
                  onClick={(e) => {
                    heightControl(e);
                  }}
                  className="filter-all-head"
                >
                  <h3 className="filter-headings">Price</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.downArrow}
                    alt="downArrow"
                  />
                </div>
                <div className="filter-all-contents filter-price-container">
                  <div className="filter-price-range">
                    <input
                      type="range"
                      min="50"
                      max="500"
                      value={value}
                      className="slider"
                      onChange={handleSliderChange}
                    />
                    <div
                      className="tooltip"
                      style={{ left: `calc(${(value - 50) / 4.9}% - 13px)` }}
                    >
                      {value}
                    </div>
                  </div>
                  <div className="filter-low-high-prices">
                    <p>low: $50.00</p>
                    <p>High: $500.00</p>
                  </div>
                </div>
              </div>
              {/* =============Color-filter============= */}

              <div className="filter-all-container">
                <div
                  onClick={(e) => {
                    heightControl(e);
                  }}
                  className="filter-all-head"
                >
                  <h3 className="filter-headings">Color</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.downArrow}
                    alt="downArrow"
                  />
                </div>
                <div className="filter-all-contents filter-color-container">
                  <form className="filter-form">
                    {colosArray.slice(0, colors).map((i, index) => (
                      <Fragment key={index}>
                        <input
                          className="filter-color-input"
                          id={i.id}
                          type="radio"
                          name="asdf"
                        />
                        <label
                          style={{ background: i.color }}
                          className="filter-color-label colors "
                          htmlFor={i.id}
                        ></label>
                      </Fragment>
                    ))}
                  </form>
                  <button
                    onClick={colorQuantity}
                    className="filter-viewALl-btn"
                  >
                    {colors === 12 ? "+12 more" : "Show Less"}
                  </button>
                </div>
              </div>
              {/* =============Brands-filter============= */}

              <div className="filter-all-container">
                <div
                  onClick={(e) => {
                    heightControl(e);
                  }}
                  className="filter-all-head"
                >
                  <h3 className="filter-headings">Brands</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.downArrow}
                    alt="downArrow"
                  />
                </div>
                <div className="filter-all-contents height-0">.......asdf</div>
              </div>
              {/* =============Customer review-filter============= */}

              <div className="filter-all-container">
                <div
                  onClick={(e) => {
                    heightControl(e);
                  }}
                  className="filter-all-head"
                >
                  <h3 className="filter-headings">Customer review</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.downArrow}
                    alt="downArrow"
                  />
                </div>
                <div className="filter-all-contents height-0">......asdf</div>
              </div>
              {/* =============Discount-filter============= */}

              <div className="filter-all-container">
                <div
                  onClick={(e) => {
                    heightControl(e);
                  }}
                  className="filter-all-head"
                >
                  <h3 className="filter-headings">Discount</h3>
                  <img
                    className="down-svg"
                    src={SvgPath.downArrow}
                    alt="downArrow"
                  />
                </div>
                <div className="filter-all-contents height-0">......asdf</div>
              </div>
            </div>
            {/* ===============================filter-section end=============================== */}
            <div className="products-view-all-contianer">
              <div className="products-view-all-head">
                <p>Showing 1–9 of 200 results</p>
                <div className="filter-btns-container">
                  <button
                    onClick={() => {
                      setFilter(true);
                    }}
                    className="filter-btn"
                  >
                    FILTER{" "}
                    <img src={SvgPath.downArrowperpal} alt="down-arrow" />
                  </button>
                  <button onClick={changeSortBY} className="sortBy-btn">
                    SORT BY{" "}
                    <img
                      style={{
                        transform: sortByPopup === true && "rotate(180deg)",
                      }}
                      src={SvgPath.downArrowperpal}
                      alt="down-arrow"
                    />
                  </button>
                  <div
                    className={`sort-by-popup ${
                      sortByPopup === true && "show-shortBy-popup"
                    }`}
                  >
                    {sortByPopupData.map((item, index) => (
                      <div key={index} className="sort-by-popup-contents">
                        <h3>{item.heading}</h3>
                        {item.btns.map((i, index) => (
                          <button onClick={changeSortBY} key={index}>
                            {i.btn}
                            <img
                              className="right-victor"
                              src={
                                require(`../assets/svg/right-victor-perpul.svg`)
                                  .default
                              }
                              alt="go"
                            />
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="view-all-products-grid">
                {/* {filterProducts.map((i, index) => (
                  <Fragment key={index}>
                    <ProductCard
                      img={i.img}
                      name={i.name}
                      price={i.price}
                      ratting={i.ratting}
                      new={i.new}
                      instock={i.instock}
                    />
                  </Fragment>
                ))} */}
                {data.map((item, index) => (
                  <Fragment key={index}>
                    <BackendCards
                      id={item.id}
                      img={item.image}
                      name={item.title}
                      price={item.price}
                      designRatting={item.designRatting}
                      new={item.new}
                      designInstock={item.designInstock}
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

export default ProductsFilter;
