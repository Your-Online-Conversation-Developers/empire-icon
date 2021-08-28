import React from "react";
import { Link } from "react-scroll";
import Buttton from "./elements/Buttton";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {

  const backToTop = () => {
      scroll.scrollToTop();
  }

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
            <Link className="navbar-brand nav-item" to="/">
              <img src="images/logo.png" alt="logo" className="top-logo" onClick={backToTop}/>
            </Link>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="site-collapse-nav">
            <ul className="navbar-right pt-30">
              <li>
                <Buttton 
                    aText="Get Direction"
                    dataEffect="mfp-3d-unfold"
                    aLink="https://goo.gl/maps/N5y8Ds4uvKg1RLy98"
                    classes="button sm embaded-popup"
                />
              </li>
            </ul>
            <ul class="nav nav-list navbar-nav navbar-right">
							<li><Link class="nav-item" to="about" smooth={true}  spy={true} offset={-85} >About</Link></li>
							<li><Link class="nav-item" to="floorplans" smooth={true}  spy={true} offset={-85} >Floor Plans</Link></li>
							<li><Link class="nav-item" to="tvc" smooth={true}  spy={true} offset={-85} >Video Tour</Link></li>
							<li><Link class="nav-item" to="gallery" smooth={true} spy={true} offset={-85} >Gallery</Link></li>
							<li><Link class="nav-item" to="location" smooth={true} spy={true} offset={-85} >Locations</Link></li>
							<li><Link class="nav-item" to="testimonials" smooth={true}  spy={true} offset={-85} >Testimonials</Link></li>
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
