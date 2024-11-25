import React, { useState } from "react";
import "../style/loginRegister.css";
import jsonData from "../json/LoginRegister-content.json";
import AllButtons from "../snippets/AllButtons";
import { Link } from "react-router-dom";
import Checkbox from "../snippets/Checkbox";
import { toast } from "react-toastify";


function Register() {
  // change password type function
  const [eye, setEye] = useState(false);

  function changeType(e) {
    const sibling = e.currentTarget.previousElementSibling;
    const firstPass = document.querySelector(".pass");
    if (sibling.type === "password") {
      sibling.type = "text";
      firstPass.type = "text";
    } else {
      sibling.type = "password";
      firstPass.type = "password";
    }
    setEye(eye === false ? true : false);
  }
  const [passMatch, setPassMatch] = useState(false);
  const passCheck = () => {
    const pass = document.querySelector(".pass").value;
    const confirmPass = document.querySelector(".confirm-pass").value;
    if (pass === confirmPass && pass !== "") {
      setPassMatch(true);
    } else {
      setPassMatch(false);
    }
  };
  // ====backend=========
  const intidata = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(intidata);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(!loading);

    try {
      const response = await fetch("http://localhost:5000/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("User created successfully");
        setFormData(intidata); // Reset form after success
        window.location.href = "/verifyEmail";
      } else {
        const errorData = await response.json();
        toast.error(`${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      toast.error("Error submitting the form");
    } finally {
      setLoading(!loading);
    }
  };

  return (
    <section className="all-sections">
      <div className="container">
        <div className="loginRegister-container">
          <div className="loginRegister-form-container">
            <div className="loginRegister-btns">
              <Link to={"/login"}>Log in </Link>
              <Link className="active-btn-login">Register</Link>
            </div>
            {jsonData["register"].map((item, index) => (
              <form className="loginRegister-Form " onSubmit={handleSubmit}>
                <h3>Create Your Account</h3>
                <input
                  type="text"
                  name="name"
                  className="delivery-a-inputs"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="user-name"
                />
                <input
                  type="email"
                  name="email"
                  className="delivery-a-inputs"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <input
                  type="password"
                  className="delivery-a-inputs pass"
                  placeholder="Password"
                  autoComplete="new-password"
                  onChange={() => {
                    passCheck();
                  }}
                />
                <div key={index} className="delivery-a-inputs">
                  <input
                    onChange={(e) => {
                      passCheck();
                      handleChange(e);
                    }}
                    name="password"
                    value={formData.password}
                    type="password"
                    placeholder="Confirm password"
                    className="confirm-pass"
                    autoComplete="new-password"
                    required
                  />
                  {(eye === false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="eye"
                    onClick={(e) => {
                      changeType(e);
                    }}
                  >
                    <path
                      d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
                      fill="#574B9B"
                      fillOpacity="0.54"
                    />
                  </svg>
                  ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="eye"
                    onClick={(e) => {
                      changeType(e);
                    }}
                  >
                    <g clipPath="url(#clip0_429_11158)">
                      <path
                        d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212"
                        stroke="#A49EC9"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 4L20 20"
                        stroke="#A49EC9"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_429_11158">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  ))}
                </div>

                <div className="loginRegister-policy-forget">
                  <div>
                    <Checkbox name="policy" id="policy1" type="checkbox" />
                    <label htmlFor="policy1">
                      By continuing, you agree to <span>Buynow</span> policy
                    </label>
                  </div>
                </div>
                <AllButtons
                  type="submit"
                  name={loading ? "Wait": item.btnName}
                  class={` ${passMatch ? "opacity-100":"opacity-50"}` }
                />
              </form>
            ))}
            <div className="loginRegister-other-accout-btns-container">
              <div className="or">
                <span></span>
                or
                <span></span>
              </div>
              <div className="loginRegister-other-accout-btns">
                <button>
                  <img
                    src={require(`../assets/svg/Goggle-icon.svg`).default}
                    alt="google"
                  />
                  <p>google</p>
                </button>
                <button>
                  <img
                    src={require(`../assets/svg/facebook-icon.svg`).default}
                    alt="facebook"
                  />
                  <p>facebook</p>
                </button>
              </div>
              <div className="bestExperience">
                <p>Log in or Register For Best Experience</p>
                <img
                  src={require(`../assets/svg/LoginOutlined.svg`).default}
                  alt="login"
                />
              </div>
            </div>
          </div>

          <div className="loginRegister-imgs">
            <img
              src={require(`../assets/images/register-img.png`)}
              alt="register"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
