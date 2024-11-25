import React, { Fragment } from "react";
import "../style/myAccount.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import inputData from "../json/persnal-inforation-inputs.json";
import selects from "../json/persnal-imforation-selects.json";
import AllButtons from "../snippets/AllButtons";
import SelectTag from "../snippets/SelectTag";
import TextInputs from "../snippets/TextInputs";

function Profile() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="sections-header">
          <h2>My Account</h2>
          <div className="pages-directions-div">
            <Link to={"/"}>Home</Link>
            <img src={SvgPath.arrowLIneRight} alt="forword" />
            <Link to={"/myAccount"}>
              {}
              My Accounts
            </Link>
            <img src={SvgPath.arrowLIneRight} alt="forword" />
            <Link style={{ color: "#1F292D" }} to={"/profile"}>
              {}
              Profile
            </Link>
          </div>
        </div>
        <div className="profile-main-container">
          <div className="profile-container">
            <img
              className="profile-img"
              src={require(`../assets/images/my-account-img-1.png`)}
              alt="profile.img"
            />

            <div className="my-account-contents">
              <div>
                <h3>Tiana Baptista</h3>
                <p>tim.jennings@example.com</p>
              </div>
              <span></span>
              <button className="saveAddress-btn">Chose Image</button>
            </div>
          </div>
          <form className="personal-Information-container">
            <div className="space-between">
              <h3>Personal information</h3>
              <button className="edit-btn">Edit</button>
            </div>
            {inputData.map((item, index) => (
              <div key={index} className="delivery-A-input-div">
                <TextInputs
                  name={item.firstInputPlaceholder}
                  type={item.firstInputType}
                />
                <TextInputs
                  name={item.secondInputPlaceholder}
                  type={item.secondInputType}
                />
              </div>
            ))}
            <div className="delivery-A-input-div">
              {selects.map((item, index) => (
                <Fragment key={index}>
                  <SelectTag name={item.head} content={item.options} />
                </Fragment>
              ))}
            </div>
            <div className="personal-inform-btns-container">
              <button className="saveAddress-btn">cancel</button>
              <AllButtons name="Save changes" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
