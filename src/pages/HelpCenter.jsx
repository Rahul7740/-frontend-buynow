import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/helpCenter.css";
import SvgPath from "../assets/svg/SvgPath";
import NewsLetter from "../home/NewsLetter";
import helpCenterContent from "../json/helpCenterContents.json";
import helpCenterLinks from "../json/help-center-pages-links.json"

function HelpCenter() {

  const [openIndex, setOpenIndex] = useState(
    helpCenterContent.findIndex(item => item.o)
  );

  const handleToggle = (index, isOpen) => {
    setOpenIndex(isOpen ? index : null);
  };
  const [select,setSelect]=useState(false)
  const [selectIndex,setSeletIndex]= useState(0)
  function funkdf(){
    setSelect(select===false?true:false)
  }
  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header helpCenter-head">
            <div>
              <h2>Help Center</h2>
              <div className="pages-directions-div">
                <Link to={"/"}>Home</Link>
                <img src={SvgPath.arrowLIneRight} alt="forward" />
                <Link style={{ color: "#1F292D" }} to={"/helpCenter"}>Help Center</Link>
              </div>
            </div>
            <div className="helpCenter-SearchBar">
              <img src={SvgPath.searchIcon} alt="search" />
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="help-center-container">
            <div className="help-center-pages">
              {
                helpCenterLinks.map((item, index) => (
                  <Link onClick={()=>{setSeletIndex(index); funkdf()}} className={`helpCenter-Link ${item.selected&& "helpCenter-Link-selected"} ${select===true&&index===selectIndex && "helpCenter-Link-selected"}`} key={index} to={item.to}>{item.name}</Link>
                ))
              }
            </div>
            <img
              className="helpCenter-banner"
              src={require("../assets/images/helpCenter-banner.png")}
              alt="helpCenter-banner"
            />
            <img
              className="res-helpCenter-banner"
              src={require("../assets/images/helpCenter-banner-res.png")}
              alt="helpCenter-banner"
            />
            <div className="help-center-content">
              {helpCenterContent.map((item, index) => (
                <details
                  key={index}
                  className="filter-category"
                  open={openIndex === index}
                  onToggle={(e) => handleToggle(index, e.target.open)}
                  style={{borderBottom: item.borderNONE && "none"}}
                >
                  <summary className="filter-summary" >
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
        </div>
      </section>
      <NewsLetter />
    </>
  );
}

export default HelpCenter;
