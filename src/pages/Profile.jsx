import React, { Fragment, useEffect, useState } from "react";
import "../style/myAccount.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
// import inputData from "../json/persnal-inforation-inputs.json";
import selects from "../json/persnal-imforation-selects.json";
// import AllButtons from "../snippets/AllButtons";
import SelectTag from "../snippets/SelectTag";
// import TextInputs from "../snippets/TextInputs";
import { toast } from "react-toastify";

function Profile() {
  let localStorage_User = JSON.parse(localStorage.getItem("user"));
  const [profilePopup, setProfilePopup] = useState(false);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState("");
  const [dataReload, setDataReload] = useState(false);
  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("user"));
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/user/getSingleUser/${id.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();

        setUser(json);
        setSelectedValues({ State: json?.State, Gender: json?.Gender });
        setFormData({
          firstName: json?.firstName,
          lastName: json?.lastName,
          email: localStorage_User.email,
          mobileNo: json?.mobileNo,
          address: json?.address,
          secondAddress: json?.secondAddress,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dataReload]);

  // ====backend=========
  const intidata = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: localStorage_User.email,
    mobileNo: user?.mobileNo,
    address: user?.address,
    secondAddress: user?.secondAddress,
  };

  const [formData, setFormData] = useState(intidata);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = Object.assign({}, formData, selectedValues);
      const response = await fetch(
        "http://localhost:5000/api/user/updateAllData",
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("update successfully");
        setEdit(false);
        // setFormData(intidata);
      } else {
        const errorData = await response.json();
        toast.error(`${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      toast.error("Error submitting the form");
    }
  };
  const [selectedValues, setSelectedValues] = useState({
    State: "select please",
    Gender: "select please",
  });

  const handleSelectChange = (head, value) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      [head]: value, // Update the selected value for the specific "head"
    }));
  };
  const [profile, setPofile] = useState("");
  function selectProfile(e) {
    const file = e.target.files[0];
    setPofile(file);
  }
  const uploadImage = async (e) => {
    try {
      if (!profile) {
        toast.error("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("email", localStorage_User.email);
      formData.append("profile", profile);

      const response = await fetch(
        "http://localhost:5000/api/user/uploadProfile",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // toast.success("Upload successful");
        setDataReload(!dataReload);
        setProfilePopup(false);
      } else {
        const errorData = await response.json();
        toast.error(`${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      toast.error("Error submitting the form");
    }
  };

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
            {user?.profile ? (
              <img
                className="profile-img w-[134px] h-[134px] rounded-full object-cover overflow-hidden"
                src={`http://localhost:5000/api/products/uploads/${user?.profile}`}
                alt="profile.img"
              />
            ) : (
              <h1 className="w-[134px] h-[134px] rounded-full bg-yellow-300 content-center text-center text-[60px] font-black">
                {localStorage_User?.firstName.slice(0, 1).toUpperCase()}
              </h1>
            )}

            <div className="my-account-contents">
              <div>
                <h3>{localStorage_User?.firstName}</h3>
                <p>{localStorage_User?.email}</p>
              </div>
              <span></span>
              <button
                onClick={() => {
                  setProfilePopup(true);
                }}
                className="saveAddress-btn"
              >
                Chose Image
              </button>
              <div
                className={`fixed left-0 top-0 w-full h-full bg-black opacity-70 ${
                  profilePopup ? "block" : "hidden"
                }`}
                onClick={() => {
                  setProfilePopup(false);
                }}
              ></div>
              <div
                className={`fixed top-2/4 left-2/4 z-50 -translate-x-2/4 -translate-y-2/4  ${
                  profilePopup ? "inline-flex" : "hidden"
                } w-auto items-center justify-center bg-white max-w-[400px] p-10 gap-10 flex-col rounded-md shadow-2xl `}
              >
                <button
                  className="w-[20px] h-5 absolute top-3 right-3"
                  onClick={() => {
                    setProfilePopup(false);
                  }}
                >
                  <img
                    src={require("../assets/svg/close-btn.svg").default}
                    alt="close"
                  />
                </button>
                <input
                  type="file"
                  onChange={(e) => {
                    selectProfile(e);
                  }}
                  id="myfile"
                  name="myfile"
                />
                <button
                  className="saveAddress-btn"
                  type="button"
                  onClick={uploadImage}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="personal-Information-container"
          >
            <div className="space-between">
              <h3>Personal information</h3>
              <button
                onClick={() => {
                  setEdit(!edit);
                }}
                className={`edit-btn ${edit ? "hidden" : "block"}`}
                type="button"
              >
                Edit
              </button>
            </div>
            {edit ? (
              <>
                <div className="delivery-A-input-div">
                  <input
                    className="delivery-a-inputs"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    name="firstName"
                  />
                  <input
                    className="delivery-a-inputs"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    name="lastName"
                  />
                </div>
                <div className="delivery-A-input-div">
                  <input
                    className="delivery-a-inputs"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                  />
                  <input
                    className="delivery-a-inputs"
                    type="tel"
                    placeholder="Mobile No."
                    value={formData.mobileNo}
                    onChange={handleChange}
                    name="mobileNo"
                  />
                </div>
                <div className="delivery-A-input-div">
                  <input
                    className="delivery-a-inputs"
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    name="address"
                  />
                  <input
                    className="delivery-a-inputs"
                    type="text"
                    placeholder="Second Address"
                    value={formData.secondAddress}
                    onChange={handleChange}
                    name="secondAddress"
                  />
                </div>
                <div className="delivery-A-input-div">
                  {selects.map((item, index) => (
                    <Fragment key={index}>
                      {/* <SelectTag name={item.head} content={item.options} /> */}
                      <SelectTag
                        key={item.head}
                        name={item.head}
                        content={item.options}
                        value={selectedValues[item.head]} // Pass selected value
                        onChange={(value) =>
                          handleSelectChange(item.head, value)
                        } // Pass function to handle changes
                      />
                    </Fragment>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="delivery-A-input-div">
                  <p className="delivery-a-inputs">
                    {user?.firstName || "firstName"}
                  </p>
                  <p className="delivery-a-inputs">
                    {user?.lastName || "lastName"}
                  </p>
                </div>
                <div className="delivery-A-input-div">
                  <p className="delivery-a-inputs"> {user?.email || "email"}</p>
                  <p className="delivery-a-inputs">
                    {" "}
                    {user.mobileNo || "mobile"}
                  </p>
                </div>
                <div className="delivery-A-input-div">
                  <p className="delivery-a-inputs">
                    {user.address || "address"}
                  </p>
                  <p className="delivery-a-inputs">
                    {user.secondAddress || "secondAddress"}
                  </p>
                </div>
                <div className="delivery-A-input-div">
                  <p className="delivery-a-inputs"> {user.State || "State"}</p>
                  <p className="delivery-a-inputs">{user.Gender || "gender"}</p>
                </div>
              </>
            )}
            <div
              className={`personal-inform-btns-container ${
                !edit ? "scale-y-0" : "scale-100"
              } `}
            >
              <button
                className="saveAddress-btn"
                type="button"
                onClick={() => {
                  setEdit(false);
                }}
              >
                cancel
              </button>
              <button type="submit" className="all-btns">
                <h5 className="all-btn-headings">Save changes</h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
