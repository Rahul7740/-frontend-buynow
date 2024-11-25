import React from "react";
import "../style/returnOrder.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import AllButtons from "../snippets/AllButtons";
import labelsJson from "../json/Return-Information-labels.json";
import Checkbox from "../snippets/Checkbox";

function ReturnOrder() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="sections-header">
          <h2>Return Order</h2>
          <div className="space-between">
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/returnOrder"}>
                {}
                Return
              </Link>
            </div>
            <AllButtons name="Need Help" class="NeedHelp-btn" />
          </div>
        </div>
        <div className="returnOrder-main-container">
          <div className="alert-container">
            <img
              src={require(`../assets/svg/alert-yellow.svg`).default}
              alt="alert"
            />
            <div>
              <h3>are you sure your order will be return</h3>
              <p>
                Montes, sit euismod commodo id aliquam facilisis lorem quam.
                Tortor aliquam commodo id non, pellentesque nulla. Semper quis
                sapien eu nulla ipsum duis eget quis. Lectus amet, nibh
                ultricies purus in pellentesque eu amet.
              </p>
            </div>
          </div>
          <div className="returnInformation-container">
            <h3>Return Information</h3>
            <div className="returnInformation-contents">
              {labelsJson.map((item, index) => (
                <div key={index}>
                  <Checkbox name="jad" id={item.id} />
                  <label htmlFor={item.id}>{item.name}</label>
                </div>
              ))}
            </div>
            <textarea
              placeholder="Product return reason Explain"
              rows="3"
            ></textarea>
          </div>
          <div className="returnInformation-container">
            <h3>Product Photo/Video</h3>
            <div className="mediaUploader-container">
              <div className="upload-div">
                <img
                  src={require(`../assets/svg/media-upload-icon.svg`).default}
                  alt="upload"
                />
                <div>
                  <p>Drop your files here. JPG or MP4 max 100mb.</p>
                  <button>Browse</button>
                </div>
              </div>
            </div>
          </div>
          <div className="reuten-Order-btns">
            <button className="cancel-btn">Go back</button>
            <AllButtons name="Return order" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReturnOrder;
