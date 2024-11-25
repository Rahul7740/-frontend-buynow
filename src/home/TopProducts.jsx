import React, { useRef } from "react"
import "../style/products.css"
import SvgPath from '../assets/svg/SvgPath'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import topProductsss from "../json/top-Products.json"
import ProductCard from '../snippets/ProductCard';

const TopProducts = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <section className="all-sections">
        <div className='container'>
          <h2 className="top-product-heading">Top products for top brands</h2>
          <div className='product-head'>
            <p>Top brands up to 30% off</p>
            <div>
              <button onClick={() => swiperRef.current.swiper.slidePrev()}><img src={SvgPath.arrowBack} alt='back' /></button>
              <img src={SvgPath.horizontalLine31px} alt="horizontal-line" />
              <button onClick={() => swiperRef.current.swiper.slideNext()}><img src={SvgPath.arrowForword} alt='forword' /></button>
            </div>
          </div>
          <Swiper
            ref={swiperRef}
            loop={true}
            pagination={false}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              350: {
                slidesPerView: 1.25,
                spaceBetween: 10,
              },
              540: {
                slidesPerView: 1.8,
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
            {topProductsss.map((i, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  img={i.img}
                  name={i.name}
                  price={i.price}
                  ratting={i.ratting}
                  new={i.new}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default TopProducts
