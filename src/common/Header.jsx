import { Link, NavLink } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/header.css";
import "../style/all-popup.css";
import menuLinks from "../json/menuLInks.json";
import resMenuLInks from "../json/res-menuLinks.json";
import { useState } from "react";
import searchRecents from "../json/serach-recents.json";
import language from "../json/languages.json";
import accoutPopu from "../json/accoutPopupContent.json";
import cartProduct from "../json/cart-popup-products.json";
import AllButtons from "../snippets/AllButtons";
import AllPopups from "../snippets/AllPopups";
import { usePopup } from "../contaxt/PopupContext";
function Header() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [languag, setLanguag] = useState("hi.svg");
  const [languagSearch, setLanguagSearch] = useState("");
  const [langaugPopup, setLanguagPopup] = useState(false);
  function showLanguagePopup() {
    setLanguagPopup(langaugPopup === false ? true : false);
  }
  const { setPopup } = usePopup();

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
                  <img src={SvgPath.menuUserImg} alt="user" />
                  <div>
                    <h3>Tiana Baptista</h3>
                    <p>tim.jennings@example.com</p>
                  </div>
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
                  <div className="menu-login-signUp-container">
                    <Link>Log In</Link>
                    <Link>Sign Up</Link>
                  </div>
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
              <div className={`searchBar-container`}>
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

                <button className="search-all-btn">
                  ALL
                  <img src={SvgPath.downArrowWhite} alt="downArrow" />
                </button>
              </div>
              <div
                className={`res-searchBar  ${search === true && "showSearch"}`}
              >
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
                  <button>
                    <img
                      src={
                        require("../assets/svg/res-search-menu-btn.svg").default
                      }
                      alt="serach-menu"
                    />
                  </button>
                </div>
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
                      opacity: langaugPopup === true ? "1" : "0",
                      zIndex: langaugPopup === true ? "999999" : "-444",
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
                <div className="header-cart-btn">
                  <Link to={"/cart"}>
                    <img src={SvgPath.headerCartIcon} alt="cart" />
                  </Link>
                  <div className="class"></div>
                  <div className="header-cart-popup">
                    <div className="header-cart-popup-content">
                      {cartProduct.map((item, index) => (
                        <div key={index} className="header-cart-popup-products">
                          <img
                            src={require(`../assets/images/${item.img}`)}
                            alt="cart-popup-img"
                          />
                          <div>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                          </div>
                        </div>
                      ))}
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
                    <div className="accoutPopup-contents">
                      {accoutPopu.map((item, index) => (
                        <Link key={index} to={item.to}>
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
                      ))}
                    </div>
                    <div className="accoutPopup-login-btns">
                      <Link to={"/login"} style={{ background: "#422659", color: "#FFFFFF" }}>
                        LOG IN
                      </Link>
                      <Link to={"/register"}>SIGN UP</Link>
                    </div>
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
