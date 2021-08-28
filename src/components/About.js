import React from "react";

const About = () => {
  return (
    <div className="about-section alt-bg" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="about-text">
              <h2>
                About <span>Nipe.</span>
              </h2>
              <h4>Lets learn a little bit more about nipe vila</h4>
              <p>
                Gain is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but because occasionally
                circumstances occur in which toil and pain can procure.
              </p>
              <ul className="about-list">
                <li>
                  <i className="icofont icofont-ruler-pencil" />
                  2375 Square Feet
                </li>
                <li>
                  <i className="icofont icofont-bricks" />2 Foors
                </li>
                <li>
                  <i className="icofont icofont-multimedia" />1 Living Room
                </li>
                <li>
                  <i className="icofont icofont-bed" />4 Bed Rooms
                </li>
                <li>
                  <i className="icofont icofont-bathtub" />6 Bath Rooms
                </li>
                <li>
                  <i className="icofont icofont-car-alt-2" />2 Car parking
                </li>
                <li>
                  <i className="icofont icofont-fork-and-knife" />2 kitchen
                </li>
                <li>
                  <i className="icofont icofont-swimmer" />1 Swiming Pool
                </li>
                <li>
                  <i className="icofont icofont-calendar" />
                  2015 Year Build
                </li>
                <li>
                  <i className="icofont icofont-water-drop" />2 Water Tank
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="appointment-form">
              <h6>Schedule a visit</h6>
              <form id="contact">
                {/* IF MAIL SENDING UNSUCCESSFULL */}
                <span className="error">
                  E-mail must be valid and message must be longer than 1
                  character.
                </span>
                <div className="input-box">
                  <input
                    id="cf-name"
                    type="text"
                    name="cf-name"
                    placeholder="Name"
                  />
                </div>
                <div className="input-box">
                  <input
                    id="cf-email"
                    type="text"
                    name="cf-email"
                    placeholder="Email"
                  />
                </div>
                <div className="input-box">
                  <input
                    id="cf-subject"
                    type="text"
                    name="cf-subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="input-box">
                  <textarea
                    id="cf-message"
                    name="cf-message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                {/* IF MAIL SENT SUCCESSFULLY */}
                <span className="success">
                  Your message has been sent successfully.
                </span>
                <div className="input-box">
                  <input
                    className="button"
                    id="cf-submit"
                    name="submit"
                    type="submit"
                    defaultValue="Send Message"
                  />
                </div>
              </form>
              {/* .contact-form */}
            </div>
            {/* .contact-form-side */}
          </div>
          {/* .col */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </div>
  );
};

export default About;
