import React, { useEffect, useState } from "react";
import "../style/loginRegister.css";
import { Link } from "react-router-dom";
import AllButtons from "../snippets/AllButtons";
import { toast } from "react-toastify";

function VerifyEmail() {
  const [checkOTP, setCheckOTP] = useState("");
  const [otp, setOtp] = useState("");
  const [otpResendTrigger, setOtpResendTrigger] = useState(false);

  useEffect(() => {
    const generatedOtp = Math.round(Math.random() * 1e6).toString();
    console.log("OTP:", generatedOtp);
    setOtp(generatedOtp);
  }, [otpResendTrigger]);

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
        window.location.href = "/login";
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
              <h3 className=" ">Please Check Your Email!</h3>
              {/* <h6 className="bg-black text-cyan-300 sm:bg-red-700 sm:text-[12px] md:text-[15px] lg:text-[24px] xl:bg-green-800 xl:text-[30px] 2xl:text-[40px]  font-sans">
                Please Check Your Email
              </h6> */}
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
                <p
                  style={{ color: "#422659" }}
                  className="resendCOde"
                  onClick={() => setOtpResendTrigger(!otpResendTrigger)}
                >
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

export default VerifyEmail;
