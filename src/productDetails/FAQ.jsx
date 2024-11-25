import React, { useState } from 'react'
import faqContent from "../json/helpCenterContents.json"
import SvgPath from '../assets/svg/SvgPath'

function FAQ() {
    const [openIndex, setOpenIndex] = useState(
        faqContent.findIndex(item => item.o) 
      );
    
      const handleToggle = (index, isOpen) => {
        setOpenIndex(isOpen ? index : null);
      };
    return (
        <section className="all-sections">
            <div className='container'>
                <h3 className='product-details-headings'>FAQ.</h3>
                <div className="help-center-content  faq-container">
                    {faqContent.map((item, index) => (
                        <details
                            key={index}
                            className="filter-category"
                            open={openIndex === index}
                            onToggle={(e) => handleToggle(index, e.target.open)}
                            style={{borderBottom: item.borderNONE && "none"}}
                        >
                            <summary className="filter-summary">
                                <h3 className="filter-headings">{item.heading}</h3>
                                {openIndex === index ? (
                                    <img src={SvgPath.upArrow} alt="upArrow" />
                                ) : (
                                    <img src={SvgPath.downArrow} alt="downArrow" />
                                )}
                            </summary>
                            <p className="help-center-para">{item.p}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
