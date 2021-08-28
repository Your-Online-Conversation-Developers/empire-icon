import React from 'react'

const Footer = () => {
    return (
        <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-5 mobile-center">
              <span className="copyright-text">All right resarved by <a href="https://www.youronlineconversation.com/">YOC</a></span>
            </div>
            <div className="col-md-4 col-sm-2 text-center">
              <a href="/" className="footer-logo"><img src="images/logo.png" alt="logo" className="foot-logo" /></a>
            </div>
            <div className="col-md-4 col-sm-5 text-right mobile-center">
              <ul className="footer-links">
                <li><a href="/">Licence</a></li>
                <li><a href="/">Policy</a></li>
                <li><a href="/">Discussion</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;
