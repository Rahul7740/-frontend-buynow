import React, { useEffect, useState } from "react";
import "../style/loginRegister.css";
import { toast } from "react-toastify";
import AllButtons from "../snippets/AllButtons";

function PasswordResetOtp() {
  const [checkOTP, setCheckOTP] = useState("");
  const [otp, setOtp] = useState("");
  const [otpResendTrigger, setOtpResendTrigger] = useState(false);

  // Generate OTP on load and whenever resend is triggered
  useEffect(() => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", generatedOtp); // Debugging purpose
    setOtp(generatedOtp);
  }, [otpResendTrigger]);

  // Handle OTP input
  const handleInputChange = (e, index) => {
    const inputs = document.querySelectorAll(".optInputs");

    if (e.nativeEvent.data === null) {
      setCheckOTP((prev) => prev.slice(0, -1));
      if (index > 0) inputs[index - 1].focus();
    } else if (e.target.value) {
      setCheckOTP(checkOTP + e.target.value);
      if (index < 5) inputs[index + 1].focus();
    }
    e.target.value = e.target.value.slice(0, 1);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").slice(0, 6);
    setCheckOTP(pasteData);

    document.querySelectorAll(".optInputs").forEach((input, i) => {
      input.value = pasteData[i] || "";
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkOTP === otp) {
      toast.success("OTP verified successfully!");
      setTimeout(() => {
        window.location.href = "/enterNewPassword";
        const inputs = document.querySelectorAll(".optInputs");
        inputs.forEach((i) => {
          i.value = "";
        });
      }, 1000);
    } else {
      toast.error("Invalid OTP. Please try again.");
      const inputs = document.querySelectorAll(".optInputs");
      inputs.forEach((i) => {
        i.value = "";
      });
    }
  };

  return (
    <section className="all-sections">
      <div className="container">
        <div className="verifyEmail-container">
          <form className="verifyEmail-contents" onSubmit={handleSubmit}>
            <div>
              <h3 className=" ">
                Please Check your Email! 
                 <span className="resetPasswordOtp-heading-span">
                  (Reset Password OTP)
                </span>
              </h3>

              <p>
                Please check your email, 6-digit confirmation code to
                Tim.@example, please enter the confirmation code to verify your
                email.
              </p>
            </div>
            <div className="otp-Conform">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  placeholder="0"
                  className="optInputs"
                  onChange={(e) => handleInputChange(e, index)}
                  onPaste={handlePaste}
                />
              ))}
            </div>
            <div className="verfy-email-btns">
                <AllButtons
                  type="submit"
                  name="Verify"
                  class="loginRegisterBtn"
                />
              <div>
                <p>Don’t have a code? </p>
                <p style={{ color: "#422659" }} className="resendCOde">
                  Resend Code
                </p>
              </div>
            </div>
          </form>
          <div className="loginRegister-imgs">
            <img
              src={require(`../assets/images/emailVerify-img.png`)}
              alt="email-verify"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PasswordResetOtp;
