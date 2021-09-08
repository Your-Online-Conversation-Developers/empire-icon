import React from "react";
import Heading from "./elements/Heading";
import LiItem from "./elements/LiItem";

const About = () => {
  const liContent = [
    {
      id: 1,
      liText: "23 Square Feet",
      iconVal: "true",
      iconClass: "icofont icofont-ruler-pencil",
    },
    {
      id: 2,
      liText: "2 Foors",
      iconVal: "true",
      iconClass: "icofont icofont-bricks",
    },
    {
      id: 3,
      liText: "Living Rooms",
      iconVal: "true",
      iconClass: "icofont icofont-multimedia",
    },
    {
      id: 4,
      liText: "Bed Rooms",
      iconVal: "true",
      iconClass: "icofont icofont-bed",
    },
    {
      id: 5,
      liText: "Bath Rooms",
      iconVal: "true",
      iconClass: "icofont icofont-bathtub",
    },
    {
      id: 6,
      liText: "Car parking",
      iconVal: "true",
      iconClass: "icofont icofont-car-alt-2",
    },
    {
      id: 7,
      liText: "kitchen",
      iconVal: "true",
      iconClass: "icofont icofont-fork-and-knife",
    },
    {
      id: 8,
      liText: "Swiming Pool",
      iconVal: "true",
      iconClass: "icofont icofont-swimmer",
    },
    {
      id: 9,
      liText: "2015 Year Build",
      iconVal: "true",
      iconClass: "icofont icofont-calendar",
    },
    {
      id: 10,
      liText: "Water Tank",
      iconVal: "true",
      iconClass: "icofont icofont-water-drop",
    },
  ];

  return (
    <div className="about-section alt-bg" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="about-text">
              <Heading
                h2Text="About"
                spanText="Empire Icon."
                h4Text="Lets learn a little bit more about Empire Icon"
              />
              <p>
                Gain is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but because occasionally
                circumstances occur in which toil and pain can procure.
              </p>
              <ul className="about-list">
                {liContent.map((item) => (
                  <LiItem
                    key={item.id}
                    liText={item.liText}
                    iconVal={item.iconVal}
                    iconClass={item.iconClass}
                  />
                ))}
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
