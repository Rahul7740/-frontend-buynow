import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath"
import Summary from "../snippets/Summary";
import "../style/payment-Option.css"
import selectorss from "../json/paymentOption-selectrs.json"
import CardsDebitCredit from "../PaymentOptionss/CardsDebitCredit";
import UpiPayments from "../PaymentOptionss/UpiPayments";
import NEtBanking from "../PaymentOptionss/NEtBanking";
import Emi from "../PaymentOptionss/Emi";
import CashOnDelivery from "../PaymentOptionss/CashOnDelivery";
function PaymentOption() {
    const[path,setPath]=useState(0)
    const [imgs,setImg] =useState("debitCredit.svg")


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
                            <Link to={"/deliveryAdress"} className="abcd active-shadow">
                                <h4 className="stepper-label activeTxt">Delivery Address</h4>
                                <div className="stepper-dots activeDot"></div>
                            </Link>
                            <div className="stepper-line activeline"></div>
                            <Link to={"/orderSummary"} className="abcd active-shadow">
                                <h4 className="stepper-label activeTxt">Order Summary</h4>
                                <div className="stepper-dots activeDot"></div>
                            </Link>
                            <div className="stepper-line activeline"></div>
                            <Link className="abcd active-shadow">
                                <h4 className="stepper-label activeTxt ">Payment Option</h4>
                                <div className="stepper-dots activeDot"></div>
                            </Link>
                            <div className="stepper-line"></div>
                            <div className="abcd">
                                <h4 className="stepper-label">Complete Order</h4>
                                <div className="stepper-dots"></div>
                            </div>
                        </div>
                    </div>
                    <div className="paymentOption-selectrs-container">
                        <ul className="paymentOption-selectrs">
                            {selectorss.map((i, index) => (
                                <li key={index} onClick={()=>{setImg(i.imges)}}>
                                    <NavLink onClick={()=>{setPath(index)}} className={`selectrs-Links ${path===index && "active-selector"} `} activeclassname="active">{i.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                        <img className="display-block-none-700" src={require(`../assets/svg/${imgs}`)} alt="debit" />
                    </div>
                    <div className="payment-option-main-container">
                        
                        {path===0?<CardsDebitCredit />:path===1?<UpiPayments />:path===2?<NEtBanking />:path===3?<Emi />:path===4?<CashOnDelivery />:""}

                        <Summary />

                    </div>
                </div>
            </section>
        </>
    )
}

export default PaymentOption
