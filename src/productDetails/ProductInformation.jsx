import React from 'react'
import "../style/productInfomation.css"
import contentess from "../json/productInfor-contents.json"
import SvgPath from "../assets/svg/SvgPath"
function ProductInformation() {
  return (
    <>
        <section className='all-sections'>
            <div className='container'>
                <h3 className='product-details-headings'>Product Information</h3>
                <div className='product-information-container'>
                    {
                        contentess.map((i,index)=>(
                            <div key={index}style={{borderBottom: i.borderBottom && "none"}} >
                                <p style={{color:"black"}}>{i.head}</p>
                                <p>{i.logo && <img src={SvgPath.appleLogo} alt='apple' />}{i.p}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductInformation
