
import React from "react";
import Buttton from "./elements/Buttton";
import Heading from "./elements/Heading";

const Testimonial = () => {
  return (
    <div className="testimonials-section alt-bg" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="side-head">
              <Heading
                h2Text="Client"
                spanText="Words."
                h4Text="Don’t take our words take a look at client words."
              />

              <Buttton aText="be one of them" aLink="/" classes="button sm" />
            </div>
          </div>
          {/* .col */}
          <div className="col-md-8">
            <div className="testimonials-list">

              <div className="single-testimonial">
                <div className="row">
                  <div className="col-md-5 col-sm-4">
                    <div className="client-image">
                      <img src="images/testimonials/1.jpg" alt="testimonials" />
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-md-7 col-sm-8">
                    <div className="testimonial-text">
                      <blockquote>
                      Absolutely wonderful! I am completely blown away. We can't understand how we've been living without Empire Icon.
                      </blockquote>
                      <h5>
                        <small>Karachi , Pakistan</small>Mohsin Zia
                      </h5>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
              {/* .single-testimonial */}
              <div className="single-testimonial">
                <div className="row">
                  <div className="col-md-5 col-sm-4">
                    <div className="client-image">
                      <img src="images/testimonials/2.jpg" alt="testimonials" />
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-md-7 col-sm-8">
                    <div className="testimonial-text">
                      <blockquote>
                      Definitely worth the investment. You've saved our business! I would also like to say thank you to all your staff. I have gotten at least 50 times the value from Empire Icon.
                      </blockquote>
                      <h5>
                        <small>Lahore , Pakistan</small>Sadia Waqar 
                      </h5>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
              {/* .single-testimonial */}
            
            </div>
            {/* .testimonials-list */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
