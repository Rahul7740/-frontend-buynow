import React, { useRef } from "react";
import "../style/products.css";
import SvgPath from "../assets/svg/SvgPath";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Pagination, Navigation } from "swiper/modules";
import AllButtons from "../snippets/AllButtons";
import { Link } from "react-router-dom";
import ProductCard2 from "../snippets/ProductCard2";
import prodcutsDetialss from "../json/Related-item-your-search-items.json"

const RelatedItemYourSearch = (props) => {
  const swiperRef = useRef(null);


  
  

  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="product-head">
            <h2>{props.name}</h2>
            <div>
              <button onClick={() => swiperRef.current.swiper.slidePrev()}>
                <img src={SvgPath.arrowBack} alt="back" />
              </button>
              <img src={SvgPath.horizontalLine31px} alt="horizontal-line" />
              <button onClick={() => swiperRef.current.swiper.slideNext()}>
                <img src={SvgPath.arrowForword} alt="forword" />
              </button>
            </div>
          </div>
          <Swiper
            ref={swiperRef}
            loop={true}
            pagination={false}
            navigation={false}
            autoplay={{
              delay: 1900,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              350: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              540: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 2.8,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3.1,
                spaceBetween: 24,
              },
              1140: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
              1141: {
                slidesPerView: 3.7,
                spaceBetween: 24,
              },
              1250: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 24,
              }

            }}
          >
            {prodcutsDetialss.map((i, index) => (
              <SwiperSlide key={index}>
                <ProductCard2
                  img={i.img}
                  name={i.name}
                  price={i.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {props.btn ? (
            <Link
              to={"/productsFilter"}
              className="featuredProducts-btn"
            >
              <AllButtons name="View all Products" />
            </Link>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default RelatedItemYourSearch;
