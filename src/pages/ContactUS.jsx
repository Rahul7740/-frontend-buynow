import React from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/contectUs.css";
import AllButtons from "../snippets/AllButtons";
import SelectTag from "../snippets/SelectTag";

function ContactUS() {
  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Get In touch!</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/contectUS"}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className="contectUs-container">
            <form className="contactUS-content">
              <label htmlFor="name">Contact Us</label>
              <input type="text" id="name" placeholder="Name" required />
              <input type="text" placeholder="Email/Phone no." required />

              <SelectTag name="Select an option..." />

              <textarea
                name=""
                id=""
                cols="70"
                rows="4"
                placeholder="Comment"
              ></textarea>
              <div className="content-us-policy">
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                  By continuing, you agree to{" "}
                  <span style={{ color: "#67517A" }}>Buynow</span> policy
                </label>
              </div>
              <AllButtons name="send message" class="contect-submit-btn" />
            </form>
            <img
              className="contentUs-banner"
              src={require("../assets/images/contectUs-banner.png")}
              alt="contact us"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUS;
