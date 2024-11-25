import React from 'react'
import ImgPath from "../assets/images/ImgPath";


function ProductPromotion() {
    return (
        <>
            <section className='all-sections'>
                <div className='container'>
                    <div className='product-Promotion'>
                        <div className='product-Promotion-content'>
                            <div>
                                <h4>$108.00</h4>
                                <h3>Jabra (wireless headsets)</h3>
                                <p className='display-block-none-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id amet, ipsum egestas blandit sagittis.</p>
                            </div>
                            <button className='productPromotion-shop-btn'>Shop Now</button>
                        </div>
                        <img src={ImgPath.productPromotion} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductPromotion
