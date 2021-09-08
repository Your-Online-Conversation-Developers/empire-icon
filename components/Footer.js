import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 mt-2 mobile-center">
            <Link to="/" className="footer-logo">
              <img src="images/logo.png" alt="logo" className="foot-logo" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              incidunt at quam sunt? Alias voluptate esse dicta doloremque vero
              doloribus, porro neque nihil aliquid labore temporibus corrupti
              saepe vitae, inventore necessitatibus.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 ">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Our Partners</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 footer-info">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className="icofont icofont-flag-alt-1"></i>
                <a href="/">
                  Precinct 14, Plot 17, Bahria Town Karachi, Pakistan
                </a>
              </li>
              <li>
                <i className="icofont icofont-clock-time"></i>
                <a href="/">Mon - Sat: 07:00 - 18:00</a>
              </li>
              <li>
                <i className="icofont icofont-phone"></i>
                <a href="tel:123-456-789"> 123-456-789</a>
              </li>
              <li>
                <i className="icofont icofont-envelope"></i>
                <a href="mailto:info@empireicon.com">info@empireicon.com</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 mobile-center">
            <h4>Gallery</h4>
            <div className="insta-images">
              <img src="images/logo.png" alt="logo" className="insta-image" />
              <img src="images/logo.png" alt="logo" className="insta-image" />
              <img src="images/logo.png" alt="logo" className="insta-image" />
              <img src="images/logo.png" alt="logo" className="insta-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
