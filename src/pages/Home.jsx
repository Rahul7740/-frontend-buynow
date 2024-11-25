import React from "react";
import BannerSection from "../home/BannerSection";
import FeaturedProducts from "../home/FeaturedProducts";
import ProductsByCategory from "../home/ProductsByCategory";
import ArrivalsProducts from "../home/ArrivalsProducts";
import ProductPromotion from "../home/ProductPromotion";
import TopProducts from "../home/TopProducts";
import Services from "../home/Services";
import NewsLetter from "../home/NewsLetter";


const Home = () => {
  return (
    <> 
      <BannerSection />
      <FeaturedProducts name="Featured products" btn="true" />
      <ProductsByCategory />
      <ArrivalsProducts />
      <ProductPromotion />
      <FeaturedProducts name="Related items for you" />
      <TopProducts />
      <Services />
      <NewsLetter />
    
    </>
  );
};

export default Home;
