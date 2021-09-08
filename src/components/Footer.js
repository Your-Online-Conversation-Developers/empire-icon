import React from 'react'
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'

const Footer = () => {
    return (
<div className="footer-section">
      <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12 mobile-center">
        <Link to="/" className="footer-logo"><img src="images/logo.png" alt="logo" className="foot-logo" /></Link>
          <p>
          Gain is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain
          </p>
        </div>

        <div className="col-md-3 col-sm-12 mobile-center">
          <h3>Quick Links</h3>
        <ul className="footer-links">
              <li><Link to="/">Licence</Link></li>
              <li><Link to="/">Policy</Link></li>
              <li><Link to="/">Discussion</Link></li>
            </ul>

        </div>

        <div className="col-md-3 col-sm-12 mobile-center">
        <h3>Contact Info</h3>
        <p>
        Plot No. 17, Centre Point Commercial, Jinnah Ave, near Grand Mosque, Bahria Town, Karachi
        </p>
        </div>


        <div className="col-md-3 col-sm-12 mobile-center">
          <h3>Get Direction</h3>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        </div>



        </div>



      </div>
    </div>
    )
}

export default Footer;
