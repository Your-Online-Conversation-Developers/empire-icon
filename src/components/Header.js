import React from "react";

const Header = () => {
  return (
    <div id="navigation" className="top-bar">
      <nav className="navbar navbar-default">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#site-collapse-nav"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand nav-item" href="/">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="site-collapse-nav">
            <ul className="navbar-right pt-30">
              <li>
                <a
                  href="/"
                  data-effect="mfp-3d-unfold"
                  className="button sm embaded-popup"
                >
                  Get Direction
                </a>
              </li>
            </ul>
            <ul className="nav nav-list navbar-nav navbar-right">
              <li>
                <a className="nav-item" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  Floor Plans
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  Video Tour
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  Gallery
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  Locations
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container */}
      </nav>
    </div>
  );
};

export default Header;
