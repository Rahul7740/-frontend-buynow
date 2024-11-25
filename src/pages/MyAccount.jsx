import React from "react";
import "../style/myAccount.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import myAccountJson from "../json/my-accout-data.json";

function MyAccount() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="sections-header">
          <h2>My Account</h2>
          <div className="pages-directions-div">
            <Link to={"/"}>Home</Link>
            <img src={SvgPath.arrowLIneRight} alt="forword" />
            <Link style={{ color: "#1F292D" }} to={"/myAccount"}>
              {}
              My Accounts
            </Link>
          </div>
        </div>
        <div className="myAccount-main-container">
          {myAccountJson.map((item, index) => (
            <Link to={item.to} key={index} className="my-account-sections">
              <div className="my-account-contents">
                <img
                  className="my-account-contents-images"
                  src={require(`../assets/images/${item.img}`)}
                  alt="my-myAccount"
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
             
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="right-arrow"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29446 17.2946C8.90519 16.9053 8.90484 16.2743 9.29369 15.8846L12.465 12.7063C12.8545 12.316 12.8545 11.684 12.465 11.2937L9.29369 8.11538C8.90484 7.72569 8.90519 7.09466 9.29446 6.70538C9.68403 6.31581 10.3157 6.31581 10.7052 6.70538L15.2927 11.2929C15.6833 11.6834 15.6833 12.3166 15.2927 12.7071L10.7052 17.2946C10.3157 17.6842 9.68403 17.6842 9.29446 17.2946Z"
                  fill="#574B9B"
                  fillOpacity="0.54"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
