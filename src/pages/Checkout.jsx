import React from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/checkOut.css";
import loginTypes from "../json/checkOut-login-types.json"
import Summary from "../snippets/Summary";

// import FeaturedProducts from "../home/FeaturedProducts";

function Checkout() {
    return (
        <>
            <section className="all-sections">
                <div className="container">
                    <div className="sections-header">
                        <h2>Cart Products</h2>
                        <div className="pages-directions-div">
                            <Link to={"/"}>Home</Link>
                            <img src={SvgPath.arrowLIneRight} alt="forword" />
                            <Link style={{ color: "#1F292D" }}  to={"/checkout"}>Checkout</Link>
                        </div>
                    </div>
                    <div className="stepper">
                        <div className="stepper-line-container">
                            <div className="abcd active-shadow">
                                <h4 className="stepper-label activeTxt">Sign In</h4>
                                <div className="stepper-dots activeDot"></div>
                            </div>
                            <div className="stepper-line"></div>
                            <div className="abcd">
                                <h4 className="stepper-label">Delivery Address</h4>
                                <div className="stepper-dots"></div>
                            </div>
                            <div className="stepper-line"></div>
                            <div className="abcd">
                                <h4 className="stepper-label">Payment Option</h4>
                                <div className="stepper-dots"></div>
                            </div>
                            <div className="stepper-line"></div>
                            <div className="abcd">
                                <h4 className="stepper-label">Complete Order</h4>
                                <div className="stepper-dots"></div>
                            </div>
                        </div>
                    </div>
                    <div className="checkOut-main-container">
                        <div className="checkOut-login-section">
                            {
                                loginTypes.map((i, index) => (
                                    <Link to={"/deliveryAdress"} key={index} className="checkout-login-types">
                                        <div>
                                            <img src={require(`../assets/svg/${i.img}`)} alt="logins" />
                                            <h3>{i.name}</h3>
                                        </div>
                                        <img src={require(`../assets/svg/right-victor-lite-perpul.svg`).default} alt="right" />
                                    </Link>
                                ))
                            }
                        </div>
                        <Summary />
                    </div>

                </div>
            </section>
        </>
    )
}
export default Checkout