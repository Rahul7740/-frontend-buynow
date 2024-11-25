import React from 'react'

const NewsLetter = () => {
    return (
        <section>
            <div className='newslette-colors'>
                <div className='newslettes-c'></div>
                <div className='newslettes-c' style={{ background: "black" }}></div>
                <div className="container newsletter-containerr">
                    <div className="newsletter-section">
                        <div className='newssletter-content'>
                            <img src={require(`../assets/svg/newsletter.svg`).default} alt='newsletter' />
                            <h3>Subscribe to our newsletter</h3>
                            <p>Get 10% discount</p>
                        </div>
                        <form className='newsletter-email'>
                            <input type="email" placeholder='Enter Your Email...' />
                            <button className='newspaper-submit-btn'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='newspaper-submit-svg' d="M21 12.5L3 20V15.5L21 12.5ZM21 12.5L3 9.5V5L21 12.5Z"  strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default NewsLetter
