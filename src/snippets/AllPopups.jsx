import React from "react";
import "../style/all-popup.css";
import popupContects from "../json/topDeal-popup-contents.json"
import { usePopup } from "../contaxt/PopupContext";
import { Link } from "react-router-dom";

function AllPopups() {
  const { popup, setPopup } = usePopup()
  return (
    <>
      <div className={`all-popus ${popup} ${popup === 225 || typeof popup === "string" ? "popup-show" : ""}`} onMouseOver={() => { setPopup(popup) }} onMouseLeave={() => { setPopup(11) }} style={{ width: popup === 225 ? "auto" : "100%" }} >
        <div className="all-popus-container">
          {
            popupContects[typeof popup === "string" ? popup : " "].map((item, index) => (
              <div key={index} className="all-popus-content">
                <div className="all-popus-content-headings">
                  <h3 style={{ color: "#1F292D" }}>{item.name}</h3>
                </div>
                {item.btnss.map((i, index) => (
                  <button key={index} className="all-popus-content-btns">
                    <Link>
                      <h3 className="all-popus-content-links">{i.btn}</h3>
                    </Link>
                    <img
                      className="right-arrrow"
                      src={require(`../assets/svg/right-victor-perpul.svg`).default}
                      alt="go"
                    />
                  </button>
                ))}
              </div>
            ))
          }
        </div>
        {
          popup === "topDeal" ?
            <div className="topDeal-popup-productIntro">
              <div className="top-deal-popup-show-btn-section">
                <img src={require(`../assets/images/topDeal-popop-img-1.png`)} alt="topDeal-popup" />
                <div>
                  <h3>Top Products for you</h3>
                  <Link to={"/topDeals"}>
                    <button onClick={() => { setPopup(15) }}>SHOP NOW</button>
                  </Link>
                </div>
              </div>
              <div className="topDeal-popup-product">
                <div>
                  <h4>10% off</h4>
                  <p>Apple MacBook Pro </p>
                  <h3>$ 500.00</h3>
                </div>
                <img src={require(`../assets/images/topDeal-popop-img-2.png`)} alt="topDeal-popup" />
              </div>
            </div>
            : ""
        }
        {popup === 225 ?
          <div className="pages-popup-container">
            <div className="pages-popup-contents">
              {
                popupContects["pages"].slice(0, 2).map((item, index) => (
                  <div key={index} className="all-popus-content">
                    <div className="all-popus-content-headings">
                      <h3 style={{ color: "#1F292D" }}>{item.name}</h3>
                    </div>
                    {item.btnss.map((i, index) => (
                      <button key={index} className="all-popus-content-btns">
                        <h3 className="all-popus-content-links">{i.btn}</h3>
                        <img
                          className="right-arrrow"
                          src={require(`../assets/svg/right-victor-perpul.svg`).default}
                          alt="go"
                        />
                      </button>
                    ))}
                  </div>
                ))
              }
            </div>
            <div className="pages-popup-contents pagesPopup-contents-2">
              {
                popupContects["pages"].slice(2, 5).map((item, index) => (
                  <div key={index} className="all-popus-content">
                    <div className="all-popus-content-headings">
                      <h3 style={{ color: "#1F292D" }}>{item.name}</h3>
                    </div>
                    {item.btnss.map((i, index) => (
                      <button key={index} className="all-popus-content-btns">
                        <h3 className="all-popus-content-links">{i.btn}</h3>
                        <img
                          className="right-arrrow"
                          src={require(`../assets/svg/right-victor-perpul.svg`).default}
                          alt="go"
                        />
                      </button>
                    ))}
                  </div>
                ))
              }
            </div>
          </div>
          : ""}
      </div>
    </>
  );
}

export default AllPopups;
