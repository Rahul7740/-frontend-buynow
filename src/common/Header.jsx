import { Link, NavLink } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/header.css";
import "../style/all-popup.css";
import menuLinks from "../json/menuLInks.json";
import resMenuLInks from "../json/res-menuLinks.json";
import { useEffect, useState } from "react";
import searchRecents from "../json/serach-recents.json";
import language from "../json/languages.json";
import accoutPopu from "../json/accoutPopupContent.json";
// import cartProduct from "../json/cart-popup-products.json";
import AllButtons from "../snippets/AllButtons";
import AllPopups from "../snippets/AllPopups";
import { usePopup } from "../contaxt/PopupContext";
import chategorys from "../json/search-categoryPupup.json";
function Header() {
  // cart products popup
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartDataLoad, setCartDataLoad] = useState(false);

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [serachPopup, setSearchPopup] = useState(false);
  const [resSearchBarCategory, setResSearchBarCategory] = useState(false);
  const [searchIndex, setSearchIndex] = useState(0);
  const [languag, setLanguag] = useState("hi.svg");
  const [languagSearch, setLanguagSearch] = useState("");
  const [langaugPopup, setLanguagPopup] = useState(false);
  function showLanguagePopup() {
    setLanguagPopup(langaugPopup === false ? true : false);
  }
  const { setPopup } = usePopup();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cart/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, [cartDataLoad]);

  useEffect(() => {
    const fetchCartData = async () => {
      const promises = data.map(async (item) => {
        try {
          const response = await fetch(
            `http://localhost:5000/api/products/getSingleProduct/${item.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          return await response.json();
        } catch (error) {
          console.error("Error fetching product data:", error);
          return null;
        }
      });

      const results = await Promise.all(promises);
      setProducts(results.filter((product) => product !== null));
    };

    if (data.length > 0) {
      fetchCartData();
    }
  }, [data]);

  const user = localStorage.getItem("user");

  function logoutfucntion() {
    localStorage.removeItem("user");
    window.location.reload();
  }
  const [userData, setUserData] = useState("");
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

        setUserData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="header-top-bar-sectoin ">
        <div className="container">
          <div className="header-top-bar-content">
            <div className="display-flex">
              <img
                className="display-block-none-375"
                src={SvgPath.headerTopBarLogo}
                alt="free delivery logo"
              />
              <p className="header-topBar-Links">Free delivery on $100.00</p>
            </div>
            <div className="display-flex">
              <Link to={"/helpCenter"} className="header-topBar-Links">
                Help center
              </Link>
              <img src={SvgPath.verticalLine20px} alt="vertical-line" />
              <Link className="header-topBar-Links display-block-none-700">
                Returns policy
              </Link>
              <img src={SvgPath.verticalLine20px} alt="vertical-line" />
              <Link className="header-topBar-Links display-block-none-700">
                Support (+00) 0123456789
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <div className="header-section">
            <div className="main-logo-container">
              <Link to={"/"} className="display-block-none-700">
                <img src={SvgPath.mainLogo} alt="logo" />
              </Link>
              <Link to={"/"} className="display-none-block-700">
                <img src={SvgPath.mainLogoRes} alt="logo" />
              </Link>
              <ul className="navbar-nav">
                {menuLinks.map((i, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink
                      to={i.to}
                      className="nav-link"
                      activeclassname="active"
                      onMouseOver={() => {
                        setPopup(i.popup);
                      }}
                      onMouseLeave={() => {
                        setPopup(1);
                      }}
                      onClick={() => {
                        setPopup(1);
                      }}
                    >
                      {i.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <AllPopups />
            </div>
            <div className={`res-menu-bar  ${menu === true && "show-navbar"}`}>
              <div className="res-menu-header">
                <Link
                  to={"/profile"}
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="menu-user-div"
                >
                  {userData?.profile ? (
                    <img
                      className="my-account-contents-images max-w-[40px] w-full h-[40px]  rounded-full"
                      src={`http://localhost:5000/api/products/uploads/${userData?.profile}`}
                      // src={require(``)}
                      alt="my-myAccount"
                    />
                  ) : (
                    <h1 className="max-w-[40px] h-[40px]  w-full  rounded-full bg-yellow-300 content-center text-center text-[20px] sm:text-[30px] md:text-[40px] lg:text-[60px] font-black">
                      {userData?.firstName?.slice(0, 1).toUpperCase()}
                    </h1>
                  )}
                  {user ? (
                    <div>
                      <h3>{userData.firstName}</h3>
                      <p>{userData.email}</p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="flex gap-3">
                        Login first <Link to={"/profile"}>Enter</Link>
                      </h3>
                    </div>
                  )}
                </Link>
                <button
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <img src={SvgPath.menuCLoseBtn} alt="CLOSE" />
                </button>
              </div>
              <div className="res-menu-navBar">
                <div className="res-menu-navBar-content">
                  {resMenuLInks.map((item, index) => (
                    <NavLink
                      onClick={() => {
                        setMenu(false);
                      }}
                      key={index}
                      className="res-menuLinks"
                      to={item.to}
                      activeclassname="active"
                    >
                      <img
                        src={require(`../assets/svg/${item.img}`)}
                        alt="sections"
                      />
                      <p>{item.name} </p>
                    </NavLink>
                  ))}
                  {!user ? (
                    <div className="menu-login-signUp-container">
                      <Link to={"/login"}>Log In</Link>
                      <Link to={"/register"}>Sign Up</Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="res-menu-side-design"
                ></div>
              </div>
              <div className="menu-support-Btn">
                <a className="menu-support-Btn" href="tel:(+00) 0123456789">
                  Support (+00) 0123456789
                </a>
              </div>
            </div>
            <div className="searchBar-and-user-container">
              <div className={`searchBar-container relative`}>
                <div>
                  <img src={SvgPath.searchIcon} alt="searchIcon" />
                  <input type="text" placeholder="Search" />
                  <button
                    onClick={() => {
                      setSearch(false);
                    }}
                    className={`display-none-block-1100 ${
                      search === false ? "serach-close-show" : ""
                    }`}
                  >
                    <img
                      style={{ paddingRight: "5px" }}
                      src={SvgPath.closeBtn}
                      alt="CLOSE"
                    />
                  </button>
                </div>

                <button
                  className="search-all-btn"
                  onMouseOver={() => {
                    setSearchPopup(true);
                  }}
                  onMouseLeave={() => {
                    setSearchPopup(false);
                  }}
                >
                  {chategorys[searchIndex].name.split(" ")[0]}
                  <img
                    className={`transition-all duration-200 ${
                      serachPopup ? "rotate-180" : ""
                    }`}
                    src={SvgPath.downArrowWhite}
                    alt="downArrow"
                  />
                </button>
                <div
                  onMouseOver={() => {
                    setSearchPopup(true);
                  }}
                  onMouseLeave={() => {
                    setSearchPopup(false);
                  }}
                  style={{
                    transition: "all 0.2s",
                    opacity: serachPopup ? "1" : "0",
                    zIndex: serachPopup ? "9" : "-4",
                  }}
                  className="serach-category-popup"
                >
                  <div className="serach-categorys">
                    {chategorys.map((item, index) => (
                      <div
                        onClick={() => {
                          setSearchIndex(index);
                        }}
                        className={`cursor-pointer w-full ${
                          index === searchIndex ? "language-selected" : ""
                        }`}
                        key={index}
                      >
                        <h3
                          style={{
                            color:
                              index === searchIndex ? "#67517A" : "#495F6A",
                          }}
                        >
                          {item.name}
                        </h3>
                        <img
                          className="right-arrrow"
                          src={
                            require(`../assets/svg/right-victor-perpul.svg`)
                              .default
                          }
                          alt="go"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`res-searchBar  ${search && "showSearch"}`}>
                <div className="res-search-head">
                  <button
                    onClick={() => {
                      setSearch(false);
                    }}
                  >
                    <img src={SvgPath.arrowBack} alt="back" />
                  </button>
                  <div>
                    <img src={SvgPath.searchIcon} alt="searchIcon" />
                    <input type="text" placeholder="Search" />
                  </div>
                  <button
                    onClick={() => {
                      setResSearchBarCategory(!resSearchBarCategory);
                    }}
                  >
                    {resSearchBarCategory ? (
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="48"
                          height="48"
                          rx="24"
                          fill="#574B9B"
                          fill-opacity="0.04"
                        />
                        <path
                          d="M25.7066 16.7926C24.9267 15.5164 23.0733 15.5164 22.2934 16.7926L20.3595 19.9571C19.5451 21.2898 20.5043 23 22.0661 23H25.9339C27.4957 23 28.4549 21.2898 27.6404 19.9571L25.7066 16.7926ZM23.0737 19.3487C23.4974 18.6586 24.5007 18.6598 24.9228 19.3509C25.364 20.0733 24.8441 21 23.9976 21C23.15 21 22.6303 20.0711 23.0737 19.3487ZM29.5 25C27.01 25 25 27.01 25 29.5C25 31.99 27.01 34 29.5 34C31.99 34 34 31.99 34 29.5C34 27.01 31.99 25 29.5 25ZM29.5 32C28.12 32 27 30.88 27 29.5C27 28.12 28.12 27 29.5 27C30.88 27 32 28.12 32 29.5C32 30.88 30.88 32 29.5 32ZM15 31.5C15 32.6046 15.8954 33.5 17 33.5H21C22.1046 33.5 23 32.6046 23 31.5V27.5C23 26.3954 22.1046 25.5 21 25.5H17C15.8954 25.5 15 26.3954 15 27.5V31.5ZM17 29.5C17 28.3954 17.8954 27.5 19 27.5C20.1046 27.5 21 28.3954 21 29.5C21 30.6046 20.1046 31.5 19 31.5C17.8954 31.5 17 30.6046 17 29.5Z"
                          fill="#67517A"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                        rx="24"
                        fill="#574B9B"
                      >
                        <path
                          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          fill="#F8F8FB"
                        />
                        <path
                          d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
                          fill="#67517A"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {resSearchBarCategory ? (
                  <>
                    <p className="serach-recent-text">Recent</p>
                    <div className="serach-recent-container">
                      {searchRecents.map((item, index) => (
                        <div key={index} className="search-recnets">
                          <p>{item.name}</p>
                          <button>
                            <img
                              src={
                                require("../assets/svg/serach-recents-cut-btn.svg")
                                  .default
                              }
                              alt="cut"
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="serach-categorys">
                    {chategorys.map((item, index) => (
                      <div
                        onClick={() => {
                          setSearchIndex(index);
                        }}
                        className={`cursor-pointer w-full ${
                          index === searchIndex ? "language-selected" : ""
                        }`}
                        key={index}
                      >
                        <h3
                          style={{
                            color:
                              index === searchIndex ? "#67517A" : "#495F6A",
                          }}
                        >
                          {item.name}
                        </h3>
                        <img
                          className="right-arrrow"
                          src={
                            require(`../assets/svg/right-victor-perpul.svg`)
                              .default
                          }
                          alt="go"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="user-container">
                <button
                  onClick={() => {
                    setSearch(true);
                  }}
                  className="display-none-block-1100"
                >
                  <img src={SvgPath.searchGray} alt="search" />
                </button>
                <img
                  className="search-icon-vertical-line"
                  src={SvgPath.verticalLine20px}
                  alt="vertical"
                />

                <button
                  onMouseOver={() => {
                    setLanguagPopup(true);
                  }}
                  onMouseLeave={() => {
                    setLanguagPopup(false);
                  }}
                  className="languages-btn"
                >
                  <img
                    onClick={showLanguagePopup}
                    className="language"
                    src={require(`../assets/svg/languages/${languag}`)}
                    alt="langauge"
                  />
                  <img
                    onClick={showLanguagePopup}
                    style={{
                      transition: "all 0.3s",
                      transform: langaugPopup === true ? "rotate(180deg)" : "",
                      mixBlendMode: "color-burn",
                    }}
                    src={require(`../assets/svg/language-menu-btn.svg`).default}
                    alt="languagess"
                  />
                  <div
                    style={{
                      transition: "all 0.2s",
                      opacity: langaugPopup ? "1" : "0",
                      zIndex: langaugPopup ? "9" : "-4",
                    }}
                    className="language-popup"
                  >
                    <div className="language-popup-searchBar ">
                      <img src={SvgPath.searchIcon} alt="search" />
                      <input
                        type="search"
                        onChange={(e) => {
                          setLanguagSearch(e.target.value);
                        }}
                        value={languagSearch}
                        placeholder="Search"
                      />
                    </div>
                    <div className="language-popup-btns">
                      {language.map((item, index) =>
                        item.name
                          .toLowerCase()
                          .includes(languagSearch.toLowerCase()) ? (
                          <div
                            onClick={() => {
                              setLanguag(item.image);
                              setLanguagPopup(false);
                              setLanguagSearch("");
                            }}
                            className={
                              languag === item.image ? "language-selected" : ""
                            }
                            key={index}
                          >
                            <h3>
                              {item.name} -
                              <span style={{ color: "#ABB5BA" }}>
                                {" "}
                                {item.shortcut}
                              </span>
                            </h3>
                            <img
                              className="right-arrrow"
                              src={
                                require(`../assets/svg/right-victor-perpul.svg`)
                                  .default
                              }
                              alt="go"
                            />
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                </button>
                <img
                  className="display-block-none-700"
                  src={SvgPath.verticalLine20px}
                  alt="vertical"
                />
                <div
                  className="header-cart-btn"
                  onMouseOver={() => {
                    setCartDataLoad(!cartDataLoad);
                  }}
                >
                  <Link to={"/cart"}>
                    <img src={SvgPath.headerCartIcon} alt="cart" />
                  </Link>
                  <div className="class"></div>
                  <div className="header-cart-popup">
                    <div className="header-cart-popup-content">
                      {data.length > 0 ? (
                        products.map((item, index) => (
                          <div
                            key={index}
                            className="header-cart-popup-products"
                          >
                            <img
                              className="w-[70px] h-[64px]"
                              src={`http://localhost:5000/api/products/uploads/${item.image}`}
                              alt="cart-popup-img"
                            />
                            <div>
                              <h3>{item.title}</h3>
                              <p>{item.colors[item.colorsSelect[0]].price}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <h1 className="text-[17px] text-center text-[#422659]">
                          Your buynow Cart is empty 😟
                        </h1>
                      )}
                    </div>
                    <Link to={"/cart"}>
                      <AllButtons name="View Cart" class="cartPopup-btn" />
                    </Link>
                  </div>
                </div>
                <img
                  className="display-block-none-700"
                  src={SvgPath.verticalLine20px}
                  alt="vertical"
                />
                <div className="header-user-btn">
                  <Link to={"/myAccount"}>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="user-icon-border"
                        x="0.5"
                        y="0.5"
                        width="43"
                        height="43"
                        rx="21.5"
                        strokeOpacity="0.08"
                      />
                      <path
                        className="user-icon"
                        d="M22 15.9C23.16 15.9 24.1 16.84 24.1 18C24.1 19.16 23.16 20.1 22 20.1C20.84 20.1 19.9 19.16 19.9 18C19.9 16.84 20.84 15.9 22 15.9ZM22 24.9C24.97 24.9 28.1 26.36 28.1 27V27.1C28.1 27.6523 27.6523 28.1 27.1 28.1H16.9C16.3477 28.1 15.9 27.6523 15.9 27.1V27C15.9 26.36 19.03 24.9 22 24.9ZM22 14C19.79 14 18 15.79 18 18C18 20.21 19.79 22 22 22C24.21 22 26 20.21 26 18C26 15.79 24.21 14 22 14ZM22 23C19.33 23 14 24.34 14 27V29C14 29.5523 14.4477 30 15 30H29C29.5523 30 30 29.5523 30 29V27C30 24.34 24.67 23 22 23Z"
                      />
                    </svg>
                  </Link>
                  <div className="accout-popup">
                    <div className="welecome-text-accoutPopup">
                      <h3>WelCome</h3>
                      <img
                        src={
                          require(`../assets/svg/main-logo-icon.svg`).default
                        }
                        alt="logo"
                      />
                    </div>
                    <div
                      className={`accoutPopup-contents border-b ${
                        !user ? "border-b-[#574b9b1f]" : "border-b-transparent"
                      } `}
                    >
                      {accoutPopu.map((item, index) =>
                        item.to ? (
                          <Link
                            key={index}
                            to={item.to}
                            className="accoutPopup-btn"
                          >
                            {item.name}
                            <img
                              className="right-arrrow"
                              src={
                                require(`../assets/svg/right-victor-perpul.svg`)
                                  .default
                              }
                              alt="go"
                            />
                          </Link>
                        ) : (
                          <button
                            key={index}
                            className="accoutPopup-btn"
                            onClick={() => {
                              logoutfucntion();
                            }}
                          >
                            {item.name}
                            <img
                              className="right-arrrow"
                              src={
                                require(`../assets/svg/right-victor-perpul.svg`)
                                  .default
                              }
                              alt="go"
                            />
                          </button>
                        )
                      )}
                    </div>
                    {!user ? (
                      <div className="accoutPopup-login-btns">
                        <Link
                          to={"/login"}
                          style={{ background: "#422659", color: "#FFFFFF" }}
                        >
                          LOG IN
                        </Link>
                        <Link to={"/register"}>SIGN UP</Link>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMenu(true);
                  }}
                  className={`display-none-block-700 `}
                >
                  <img src={SvgPath.menuIcon} alt="menu" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
