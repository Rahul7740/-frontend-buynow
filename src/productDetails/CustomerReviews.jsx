import React from 'react'
import "../style/Customer-Reviews.css"
import SvgPath from "../assets/svg/SvgPath"
import ImgPath from "../assets/images/ImgPath"
import rangess from "../json/Ratting-ranges.json"
import comments from "../json/ratting-comments.json"
import { Link } from 'react-router-dom'
import AllButtons from "../snippets/AllButtons";
function CustomerReviews() {
    return (
        <section className='all-sections'>
            <div className='container'>
                <h3 className='product-details-headings'>Customer Reviews</h3>
                <div className='Customer-Reviews-container'>
                    <div className='Customer-Reviews-ratting'>
                        <div className='rating-range-container'>
                            <div className='rating-range-con-head'>
                                <p>Rating</p>
                                <div>
                                    <p>4.8 Out of 5</p>
                                    <img src={SvgPath.star} alt="star" />
                                </div>
                            </div>
                            
                            <div className='rating-rangess'>
                                {
                                    rangess.map((i, index) => (
                                        <div key={index} className='rating-rangess-childs'>
                                            <p><img src={SvgPath.starGray} alt="star" />{i.no}</p>
                                            <div><span style={{ width: i.parcentage }}></span></div>
                                            <p>{i.parcentage}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className='ratting-range-img'>
                            <img src={ImgPath.procutDetailMain} alt="img" />
                        </div>
                    </div>
                    <div className='Customer-Reviews-comments'>
                        {comments.map((i, index) => (
                            <div key={index} className='Customer-Reviews'>
                                <div className='Customer-Reviews-profiles'>
                                    <div>
                                        <img src={require(`../assets/images/${i.img}`)} alt="img" />
                                        <span>
                                            <h3>{i.name}</h3>
                                            <p className='Customer-Reviews-para'>{i.dat}</p>
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
                                <p className='Customer-Reviews-para'>{i.p}</p>
                                <div className='helpful-btn-container'>
                                    <Link className='helpful-btn'>helpful</Link>
                                </div>
                            </div>
                        ))}
                        <div className='see-all-reviews-btn'>
                            <AllButtons name="See all reviews" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews
