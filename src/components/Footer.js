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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4015369166577!2d67.32999051432422!3d25.054376143629803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34b525fa737f9%3A0x43624028ddb19e6!2sEmpire%20Icon!5e0!3m2!1sen!2s!4v1631098983287!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>



        </div>



      </div>
    </div>
    )
}

export default Footer;
