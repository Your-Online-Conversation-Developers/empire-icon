import React from 'react'
import { Link } from 'react-router-dom';

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
        <iframe title="mynewempireFramme" src="" width="600" height="450" 
        style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
        </div>



        </div>



      </div>
    </div>
    )
}

export default Footer;
