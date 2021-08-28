import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-5 mobile-center">
              <span className="copyright-text">All right resarved by <a href="https://www.youronlineconversation.com/">YOC</a></span>
            </div>
            <div className="col-md-4 col-sm-2 text-center">
              <Link to="/" className="footer-logo"><img src="images/logo.png" alt="logo" className="foot-logo" /></Link>
            </div>
            <div className="col-md-4 col-sm-5 text-right mobile-center">
              <ul className="footer-links">
                <li><Link to="/">Licence</Link></li>
                <li><Link to="/">Policy</Link></li>
                <li><Link to="/">Discussion</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;
