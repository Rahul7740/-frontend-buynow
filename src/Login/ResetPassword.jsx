import React, { useState } from "react";
import "../style/loginRegister.css";
import { Link } from "react-router-dom";
import AllButtons from "../snippets/AllButtons";
import { toast } from "react-toastify";

function ResetPassword() {
   // ========backend=======
   const intidata = {
    email: "",
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
      const response = await fetch(
        "http://localhost:5000/api/user/emailCheck",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Valid email");
        localStorage.setItem("email", formData.email);
        setTimeout(() => {
          window.location.href = "/passwordResetOtp";
        }, 1000);
        // setFormData(intidata); // Reset form after success
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
        <div className="verifyEmail-container">
          <form className="verifyEmail-contents" onSubmit={handleSubmit}>
            <div>
              <h3 className=" ">Reset Your Password</h3>

              <p>
                Please enter your email or phone no with associated your
                account, we sent one time password to your (Email or phone).
              </p>
            </div>
            <input
              type="text"
              name="email"
              className="delivery-a-inputs"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="verfy-email-btns">
              <AllButtons
                type="submit"
                name="Continue"
                class="loginRegisterBtn"
              />
              <div>
                <p>Back to</p>
                <Link to={"/register"}>
                  <p style={{ color: "#422659" }} className="resendCOde">
                    Register
                  </p>
                </Link>
              </div>
            </div>
          </form>
          <div className="loginRegister-imgs">
            <img
              src={require(`../assets/images/resetPassword-img.png`)}
              alt="reset-password"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
