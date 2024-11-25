import { Link } from "react-router-dom";
import "../style/footer.css"
import SvgPath from '../assets/svg/SvgPath'
import linkss from "../json/footer-contects.json"
import downloadMethods from "../json/download-methods.json"

function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer">
            <div className="footer-about-container">
              <div className="footer-about-logo">
                <h2 className="footer-headings">About</h2>
                <img src={SvgPath.footerLogo} alt="about-logo" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit sem tortor dui mattis vulputate fermentum. Turpis nisi, nulla interdum luctus.</p>
              <div className="footer-mail-section">
                <div>
                  <img src={SvgPath.footerMail} alt="email" />
                  <a href="mailto:debra.holt@example.com" target="_blank" rel="noreferrer">debra.holt@example.com</a>
                </div>
                <div className="footer-mail">
                  <img src={SvgPath.footerMap} alt="map-location" />
                  <a href="https://maps.app.goo.gl/Umk1EAijfqpU9XES8" target="_blank" rel="noreferrer">6391 Elgin St. Celina, Delaware 10299</a>
                </div>
              </div>
              <div className="download-container">
                <p>Download the app</p>
                <div className="download-btns-container">
                  {
                    downloadMethods.map((item, index) => (
                      <button key={index}>
                        <img src={require(`../assets/svg/${item.img}`)} alt="download" />
                        <div>
                          <h6>{item.title}</h6>
                          <h3>{item.name}</h3>
                        </div>
                      </button>
                    ))
                  }

                </div>
              </div>
            </div>
            <div className="footer-contects-container">
              <div className="footer-contects-contents">
                <div className="contects-divs">
                  <h3 className="footer-headings">Customer support</h3>
                  {
                    linkss["support"].map((i, index) => (
                      <Link key={index} to={i.to} ><span className="footer-link">{i.name}</span></Link>
                    ))
                  }
                </div>
                <div className="contects-divs">
                  <h3 className="footer-headings">Contact with us</h3>
                  {
                    linkss["Contact"].map((i, index) => (
                      <Link key={index} to={i.to} target="_blank" ><span className="footer-link">{i.name}</span></Link>
                    ))
                  }
                </div>
                <div className="contects-divs about-ref">
                  <h3 className="footer-headings">About</h3>
                  <div className="contect-about-divs">
                    <div>
                      <Link to={""} ><span className="footer-link">Careers</span></Link>
                      <Link to={""} ><span className="footer-link">About us</span></Link>
                    </div>
                    <div>
                      <Link to={""} ><span className="footer-link">Blogs</span></Link>
                      <Link to={""} ><span className="footer-link">News</span></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="copyright-section">
                <a href="https://www.google.com" target="_blank" rel="noreferrer">© {year}. All rights reserved</a>
                <div>
                  <Link to={"/helpCenter"}><span className="footer-link">Help Center</span></Link>
                  <Link to={""}><span className="footer-link">Terms of Service</span></Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
